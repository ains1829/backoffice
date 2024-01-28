import { Link } from 'react-router-dom'
import '../assets/scss/style.css'
function Tab({ data }) {
    return (
        <div className="bloc-annonce">
            <div className="content-img">
                <img src={data.photos[0]} alt="..." />
            </div>
            <div className="some-details">
                <span>{data.descriptions}</span>
                <span>Kilometrage : {data.kilometrage} km , vitesse : {data.vitesse} km</span>
                <span>Transmission : {data.nomtransmission}</span>
                <span className='price'>Prix : {data.prixvente} ar</span>
                <div className='details'>
                    <span className='annonce'>Annonce le : {data.dateannonce}</span>
                    <div className='content-choix'>
                        <Link to={`/details/${data.idannonce}`} className='details' > <span>Plus details</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tab