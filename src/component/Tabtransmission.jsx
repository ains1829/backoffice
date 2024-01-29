import '../assets/fontawesome-5/css/all.min.css'
import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { Spinner } from "spin.js"
function Tabtransmission() {
    const [Transmission, setTransmission] = useState([]);
    const [loading, setLoading] = useState(true);
    const spinnerContainerRef = useRef(null);
    useEffect(() => {
        const spinner = new Spinner().spin(spinnerContainerRef.current);
        setLoading(true);
        fetch('https://voitureoccasion-production-baee.up.railway.app/transmission/allTransmission')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setTransmission(data.data);
                    setLoading(false)
                    spinner.stop();
                } else {
                    alert(data.message)
                }
            })
            .catch(error => {
                console.log("errorr")
            });
    }, []);
    const [visible, setvisible] = useState(false)
    const [idTransmission, setId] = useState(0)
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
            .post('https://voitureoccasion-production-baee.up.railway.app/transmission/updateTransmission?idTransmission=' + idTransmission + '&nomTransmission=' + input_value.value)
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
            .get('https://voitureoccasion-production-baee.up.railway.app/transmission/deleteTransmission?idTransmission=' + id)
            .then((response) => {
                if (response.data.status === 200) {
                    tr.innerHTML = ''
                } else {
                    alert(response.data.message)
                }
            })
    }
    const handleInsert = async (e) => {
        e.preventDefault();
        const input = document.querySelector('.transmission')
        const posttada = {
            idTransmission: 0,
            nomTransmission: input.value
        }
        try {
            const response = await fetch('https://voitureoccasion-production-baee.up.railway.app/transmission/insertTransmission', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(posttada),
            });
            if (response.ok) {
                await fetch('https://voitureoccasion-production-baee.up.railway.app/transmission/allTransmission')
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 200) {
                            setTransmission(data.data);
                        } else {
                            alert(data.message)
                        }
                    })
                    .catch(error => {
                        console.log("error : " + error)
                    });

            } else {
                alert('errorrr')
            }
        } catch (error) {
            console.error("Une erreur s'est produite :", error);
        }
    };

    return (
        <div>
            <div ref={spinnerContainerRef}>
                {
                    loading ? ('') : (
                        <div className="content-form-tab">
                            <div className='form'>
                                <form>
                                    <div className="cate">
                                        <label htmlFor="">Transmission : </label>
                                        <input className='transmission' type="text" name="" id="" />
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
                                            <th>Transmission</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    {
                                        Transmission.map((element) => (
                                            <tbody key={element.idTransmission} id={element.idTransmission}>
                                                <tr key={element.nomTransmission} className="tr">
                                                    <td>{element.nomTransmission}</td>
                                                    <td> <i onClick={() => modify(element.idTransmission)} className="fas fa-pen"></i></td>
                                                    <td><i onClick={() => deleting(element.idTransmission)} className="fas fa-trash-alt "></i></td>
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
export default Tabtransmission