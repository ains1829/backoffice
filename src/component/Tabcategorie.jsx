import Categorie from "./formulaire/Categorie";
import '../assets/fontawesome-5/css/all.min.css'
import { useState } from "react";
function Tabcategorie(){
    const [categorie , setCategorie] = useState(['Famille' , 'Sport' , 'Course','4*4','Blinder']) ;
    const [visible , setvisible] = useState(false)
    function modify(id){
        setvisible(true)
        const tr = document.getElementById(id)
        const td = tr.querySelectorAll('td')[0] ;
        const input_hidden = document.querySelector('.hidden')
        input_hidden.value = id
        const input_value = document.querySelector('.modification')
        input_value.value = td.innerHTML
        
    }
    function update_form(){
        const input_value = document.querySelector('.modification')
        const input_hidden = document.querySelector('.hidden')
        const tr = document.getElementById(input_hidden.value)
        const td = tr.querySelectorAll('td')[0] ;
        td.innerHTML = input_value.value
        setvisible(false)
    }
    function deleting(id){
        const tr = document.getElementById(id)
        tr.innerHTML = ''
    }
    function add(){
        setCategorie((prevState) => [
            ...prevState , 'Andy'
        ])
    }
    return(
        <div className="content-form-tab">
            <Categorie />
            <div className="tab">
                <table>
                    <tr>
                        <th>Categorie</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {
                        categorie.map((element , item ) => (
                            <tr key={item} id={`${item}`} className="tr">
                                <td>{element}</td>
                                <td> <i  onClick={()=>modify(item)} className="fas fa-pen"></i></td>
                                <td><i  onClick={()=>deleting(item)} className="fas fa-trash-alt "></i></td>
                            </tr>
                        ))
                    }
                </table>
            </div>
            <div className={visible ? 'modify-style' : 'form-none'}>
                <input type="hidden"  className="hidden"/>
                <input type="text" className="modification"/>
                <input onClick={update_form} type="submit" value="modifier" />
            </div>
        </div>
    )
}
export default Tabcategorie