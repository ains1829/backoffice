import '../assets/scss/Form_tab.css';
import '../assets/fontawesome-5/css/all.min.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
function Tabmarque() {
    const [marque, setMarque] = useState([]);
    const [visible, setvisible] = useState(false)
    const [idmarque, setId] = useState(0)
    useEffect(() => {
        fetch('http://192.168.43.79:1000/marque/allMarque')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMarque(data);
            })
            .catch(error => {
                console.log("errorr")
            });
    }, []);
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
            .get('http://192.168.43.79:1000/marque/updateMarque?idMarque=' + idmarque + '&nomMarque=' + input_value.value)
            .then((response) => {
                console.log(response.data)
                td.innerHTML = input_value.value
                setvisible(false)
            })
    }
    function deleting(id) {
        const tr = document.getElementById(id)
        setId(id)
        try {
            axios
                .get('http://192.168.43.79:1000/marque/deleteMarque?idMarque=' + id)
                .then((response) => {
                    console.log(response.data)
                    tr.innerHTML = ''
                })
        } catch (error) {
            console.log(error)
        }
    }
    const handleInsert = async (e) => {
        e.preventDefault();
        const input = document.querySelector('.marque')
        const posttada = {
            nomMarque: input.value
        }
        const response = await fetch('http://192.168.43.79:1000/marque/insertMarque', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(posttada),
        });
        if (response.ok) {
            setMarque((prevState) => [
                ...prevState, { idMarque: marque.length, nomMarque: input.value }
            ])
        }
    };
    return (
        <div className="content-form-tab">
            <div className="form">
                <form>
                    <div className="cate">
                        <label >Marque : </label>
                        <input className='marque' type="text" />
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
                            <th>Marque</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        marque.map((element) => (
                            <tbody key={element.idMarque} id={element.idMarque}>
                                <tr key={element.nomMarque} className='tr'>
                                    <td>{element.nomMarque}</td>
                                    <td><i onClick={() => modify(element.idMarque)} className="fas fa-pen"></i></td>
                                    <td><i onClick={() => deleting(element.idMarque)} className="fas fa-trash-alt "></i></td>
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
export default Tabmarque