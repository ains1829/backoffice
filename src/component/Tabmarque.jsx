import '../assets/scss/Form_tab.css';
import '../assets/fontawesome-5/css/all.min.css'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Spinner } from "spin.js"
function Tabmarque() {
    const [marque, setMarque] = useState([]);
    const [visible, setvisible] = useState(false);
    const [idmarque, setId] = useState(0);
    const [loading, setLoading] = useState(true);
    const spinnerContainerRef = useRef(null);
    useEffect(() => {
        const spinner = new Spinner().spin(spinnerContainerRef.current);
        setLoading(true);
        fetch('https://voitureoccasion-production-baee.up.railway.app/marque/allMarque')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMarque(data.data);
                setLoading(false)
                spinner.stop()
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
            .get('https://voitureoccasion-production-baee.up.railway.app/marque/updateMarque?idMarque=' + idmarque + '&nomMarque=' + input_value.value)
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
                .get('https://voitureoccasion-production-baee.up.railway.app/marque/deleteMarque?idMarque=' + id)
                .then((response) => {
                    console.log(response.data)
                    if (response.data.status === 200) {
                        tr.innerHTML = ''
                    } else {
                        alert(response.data.message)
                    }
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
        try {
            const response = await fetch('https://voitureoccasion-production-baee.up.railway.app/marque/insertMarque', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(posttada),
            });
            if (response.ok) {
                await fetch('https://voitureoccasion-production-baee.up.railway.app/marque/allMarque')
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 200) {
                            console.log(data)
                            setMarque(data.data);
                        } else {
                            alert(data.message);
                        }
                    })
                    .catch(error => {
                        console.log("errorr : " + error)
                    });
            }
        } catch (error) {
            console.log("erreur : " + error)
        }
    };
    return (
        <div>
            <div ref={spinnerContainerRef}>
                {
                    loading ? ('') : (

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
            </div>
        </div>
    )
}
export default Tabmarque