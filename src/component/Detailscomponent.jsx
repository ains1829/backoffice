import Photo from "./Photo"
import '../assets/scss/details.css'
import { Link } from "react-router-dom"
function Detailscomponent({id}){
    return (
        <div className="details">
            <div className="about-car">
                <div>
                    <span className="label">Nom voiture : </span><span className="of">Tiguan wolsvagen</span>
                </div>
                <div>
                    <span className="label">Date d'annonce : </span><span className="simple-label">2023-05-04</span>
                </div>
                <div>
                    <span className="label">Model : </span><span className="simple-label">Gorolla</span>
                </div>
                <div>
                    <span className="label">Carburant :</span><span className="simple-label">Essence</span>
                </div>
                <div>
                    <span className="label">Vitesse : </span><span className="simple-label">205km/h</span>
                </div>
                <div>
                    <span className="label">Kilomatrage :</span> <span className="simple-label"> 4500 km</span>
                </div>
                <div>
                    <span className="label">Categorie : </span> <span className="simple-label">Famille , Sportif</span>
                </div>
                <div>
                    <span className="label">Transmission : </span><span className="simple-label">Automatique</span>
                </div>
                <div>
                    <span className="price">Prix : 205000 ar</span>
                </div>
                <div>
                    <span className="label">Annee : 2021</span>
                </div>
                <div>
                    <span className="simple-label">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel minus corporis my name Is Ains </span>
                </div>
            </div>
            <div className="photo-car">
                <Photo />
                <div className="accpter-no">
                    <Link className="refuser">
                        <span>Refuser</span>
                    </Link>
                    <Link className="accepter">
                        <span>Accepter</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Detailscomponent 