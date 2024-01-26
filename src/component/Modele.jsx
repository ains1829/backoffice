import '../assets/scss/modele.css'
import axios from 'axios';
import { useEffect, useState } from "react";
function Modele() {
    const [Transmission, setTransmission] = useState([])
    useEffect(() => {
        setTransmission([{ idtransmission: 1, nomTransmission: 'Automatique' }, { idtransmission: 2, nomTransmission: 'Manuelle' }]);
    }, [])
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
    const [marques, setMarques] = useState([])
    useEffect(() => {
        fetch('http://192.168.43.79:1000/marque/allMarque')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMarques(data);
            })
            .catch(error => {
                console.log("errorr")
            });
    }, []);
    const [nameModele, setNomModele] = useState('');
    const hanldeName_model = (e) => {
        setNomModele(e.target.value)
    }
    const [marque, setMarque] = useState(1);
    const handleMarque = (e) => {
        setMarque(e.target.value)
    }
    const handleCheckBoxchange = (event, name_check) => {
        const update = categorie.map((check, item) =>
            `check${item}` === name_check
                ? { ...check, isChecked: event.target.checked }
                : check
        );
        setCategorie(update);
        console.log(update)
    }
    const [vitesse, setVitesse] = useState('');
    const handlevitesse = (e) => {
        setVitesse(e.target.value)
    }
    const [transmission_data, setTrans] = useState(1);
    const handletrans = (e) => {
        setTrans(e.target.value);
    }
    const [date_modele, setdate] = useState('');
    const hanlde_date = (e) => {
        setdate(e.target.value)
    }
    const [carburant, setCarburant] = useState('');
    const hanlde_carburant = (e) => {
        setCarburant(e.target.value)
    }
    const hanlde_submit = async (e) => {
        e.preventDefault();
        const bigdata = {
            nomModel: nameModele,
            marque: marque,
            check_categorie: categorie,
            vitesse: vitesse,
            transmission: transmission_data,
            carburant: carburant,
            dateSortie: date_modele,
        }
        console.log(bigdata)
        try {
            const response = await axios.post('http://192.168.43.79:1000/model/insertModel', bigdata, {
            })
            alert(response.data)
        } catch (error) {
            console.error();
        }

    }
    return (
        <div className="generate-modele">
            <div>
                <label>Nom Modele</label>
                <input type="text" name="modele" onChange={hanldeName_model} required />
            </div>
            <div>
                <label>Marque</label>
                <select onChange={handleMarque}>
                    {
                        marques.map((element, item) => (
                            <option key={item} value={element.idMarque}>{element.nomMarque}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label>Categorie</label>
                <div className="input-checkbox">
                    {
                        categorie.map((element, item) => (
                            <div key={element.idCategorie} className="content-child">
                                <label> {element.nomCategorie}  </label>
                                <input type="checkbox" id={`check${item}`} name={`check${item}`} onChange={(event) => handleCheckBoxchange(event, 'check' + item)} />
                                <label for={`check${item}`}>
                                    <span></span>
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <div>
                    <label>Vitesse</label>
                    <input type="text" name="vitesse" onChange={handlevitesse} required />
                </div>
                <label>Transmission</label>
                <select onChange={handletrans}>
                    {
                        Transmission.map((element) => (
                            <option key={element.idtransmission} value={element.idtransmission}>{element.nomTransmission}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label>Carburant</label>
                <select onChange={hanlde_carburant}>
                    <option value="1">Gasoil</option>
                    <option value="2">Essence</option>
                </select>
            </div>
            <div>
                <label>Date sorti</label>
                <input type="date" name="date" required onChange={hanlde_date} />
            </div>
            <div>
                <input onClick={hanlde_submit} type="submit" value="Valider" />
            </div>
        </div>
    )
}
export default Modele