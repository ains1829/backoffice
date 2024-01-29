import Photo from "./Photo"
import '../assets/scss/details.css'
import { useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { Spinner } from "spin.js"
function Detailscomponent({ id }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const spinnerContainerRef = useRef(null)
    console.log(id)
    const [detail_annonce, setdetails_annonce] = useState({});
    useEffect(() => {
        const spinner = new Spinner().spin(spinnerContainerRef.current);
        setLoading(true);
        fetch(`https://voitureoccasion-production-baee.up.railway.app/api/adminmir/getDetailAnnonce?iduser=0&idannonce=${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setdetails_annonce(data.data);
                    console.log(data.data)
                    setLoading(false)
                    spinner.stop();
                } else {
                    alert(data.message + "  status : " + data.status)
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
    }, [id])
    function validation() {
        axios
            .post(`https://voitureoccasion-production-baee.up.railway.app/api/adminmir/validerAnnonce?idadmin=1&idannonce=${id}`)
            .then((response) => {
                if (response.data.status === 200) {
                    navigate("/firstpage");
                } else {
                    alert('Error: ' + response.data.status)
                }
            })
    }
    function refuser() {
        axios
            .get(`https://voitureoccasion-production-baee.up.railway.app/api/adminmir/refuserAnnonce?idadmin=1&idannonce=${id}`)
            .then((response) => {
                if (response.data.status === 200) {
                    navigate("/firstpage");
                } else {
                    alert('Error: ' + response.data.status)
                }
            })
    }
    function Categorie(Tab_categorie) {
        var categorie = ""
        for (let index = 0; index < Tab_categorie.length; index++) {
            if (index === Tab_categorie.length - 1) {
                categorie += " " + Tab_categorie[index].nomcategorie
            } else {
                categorie += " " + Tab_categorie[index].nomcategorie + " ,"
            }
        }
        return categorie
    }
    return (
        <div>
            <div ref={spinnerContainerRef}>
                {
                    loading ? ('') : (
                        <div className="details">
                            <div className="about-car">
                                <div>
                                    <span className="label">Nom voiture : </span><span className="of">{detail_annonce.nomvoiture}</span>
                                </div>
                                <div>
                                    <span className="label">Date d'annonce : </span><span className="simple-label">{detail_annonce.dateannonce}</span>
                                </div>
                                <div>
                                    <span className="label">Model : </span><span className="simple-label">{detail_annonce.nommodel}</span>
                                </div>
                                <div>
                                    <span className="label">Carburant :</span><span className="simple-label">{detail_annonce.nomcarburant}</span>
                                </div>
                                <div>
                                    <span className="label">Vitesse : </span><span className="simple-label"> {detail_annonce.vitesse} km/h</span>
                                </div>
                                <div>
                                    <span className="label">Kilomatrage :</span> <span className="simple-label"> {detail_annonce.kilometrage} km</span>
                                </div>
                                <div>
                                    <span className="label">Categorie : </span> <span className="simple-label">
                                        {
                                            detail_annonce.categories &&
                                            <>
                                                {Categorie(detail_annonce.categories)}
                                            </>
                                        }
                                    </span>
                                </div>
                                <div>
                                    <span className="label">Transmission : </span><span className="simple-label">{detail_annonce.nomtransmission}</span>
                                </div>
                                <div>
                                    <span className="label">Nombre place : {detail_annonce.nombreplace}</span>
                                </div>
                                <div>
                                    <span className="price">Prix : {detail_annonce.prixvente} ar</span>
                                </div>
                                <div>
                                    <span className="label">Annee : {detail_annonce.anneefab}</span>
                                </div>
                                <div>
                                    <span className="Desc">{detail_annonce.descriptions} </span>
                                </div>
                            </div>
                            <div className="photo-car">
                                {
                                    detail_annonce.photos && (
                                        <>
                                            <Photo photo={detail_annonce.photos} />
                                        </>
                                    )
                                }
                                <div className="details-annonceur">
                                    <div className="description">
                                        <label htmlFor="">A propos du vendeur</label>
                                        <div>
                                            <span>Nom  : {detail_annonce.nomuser} {detail_annonce.prenomuser}</span>
                                            <span> Localisation : {detail_annonce.nomlieu} </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="accpter-no">
                                    <span onClick={refuser} className="refuser">Refuser</span>
                                    <span className="accepter" onClick={validation}>Accepter</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Detailscomponent 