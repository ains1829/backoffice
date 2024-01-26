import '../assets/fontawesome-5/css/all.min.css'
import { useState, useEffect } from "react";
import axios from 'axios';
function Tabcategorie() {
    const [categorie, setCategorie] = useState([]);
    useEffect(() => {
        fetch('http://192.168.43.79:1000/categorie/allCategorie')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setCategorie(data);
            })
            .catch(error => {
                console.log("errorr")
            });
    }, []);
    const [visible, setvisible] = useState(false)
    const [idcategorie, setId] = useState(0)
    function modify(id) {
        setvisible(true)
        setId(id)
        const tr = document.getElementById(id)
        const td = tr.querySelectorAll('td')[0];
        const input_hidden = document.querySelector('.hidden')
        input_hidden.value = id
        const input_value = document.querySelector('.modification')
        input_value.value = td.innerHTML
    }
    function update_form() {
        const input_value = document.querySelector('.modification')
        const input_hidden = document.querySelector('.hidden')
        const tr = document.getElementById(input_hidden.value)
        const td = tr.querySelectorAll('td')[0];
        axios
            .get('http://192.168.43.79:1000/categorie/updateCategorie?idCategorie=' + idcategorie + '&nomCategorie=' + input_value.value)
            .then((response) => {
                console.log(response.data)
                td.innerHTML = input_value.value
                setvisible(false)
            })
    }
    function deleting(id) {
        const tr = document.getElementById(id)
        setId(id)
        axios
            .get('http://192.168.43.79:1000/categorie/deleteCategorie?idCategorie=' + id)
            .then((response) => {
                console.log(response.data)
                tr.innerHTML = ''
            })
    }
    const handleInsert = async (e) => {
        e.preventDefault();
        const input = document.querySelector('.categorie')
        const posttada = {
            nomCategorie: input.value
        }
        const response = await fetch('http://192.168.43.79:1000/categorie/insertCategorie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(posttada),
        });
        if (response.ok) {
            setCategorie((prevState) => [
                ...prevState, { idcategorie: categorie.length, nomCategorie: input.value }
            ])
        }
    };
    return (
        <div className="content-form-tab">
            <div className='form'>
                <form>
                    <div className="cate">
                        <label htmlFor="">Categorie : </label>
                        <input className='categorie' type="text" name="" id="" />
                    </div>
                    <div className="submit">
                        <input onClick={handleInsert} type="submit" value="Valider" />
                    </div>
                </form>
            </div>
            <div className="tab">
                <table>
                    <thead>
                        <tr>
                            <th>Categorie</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        categorie.map((element) => (
                            <tbody key={element.idCategorie} id={element.idCategorie}>
                                <tr key={element.nomCategorie} className="tr">
                                    <td>{element.nomCategorie}</td>
                                    <td> <i onClick={() => modify(element.idCategorie)} className="fas fa-pen"></i></td>
                                    <td><i onClick={() => deleting(element.idCategorie)} className="fas fa-trash-alt "></i></td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
            <div className={visible ? 'modify-style' : 'form-none'}>
                <input type="hidden" className="hidden" />
                <input type="text" className="modification" />
                <input onClick={update_form} type="submit" value="modifier" />
            </div>
        </div>
    )
}
export default Tabcategorie