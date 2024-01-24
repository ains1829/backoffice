import { Link } from 'react-router-dom'
import '../assets/scss/style.css'
import image_test from '../assets/image/occasion.jpg'
function Tab() {
    return (
        <div className="bloc-annonce">
            <div className="content-img">
                <img src={image_test} alt="..." />
            </div>
            <div className="some-details">
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium</span>
                <span>Kilometrage : 45000 km , vitesse : 50454 km</span>
                <span>Transmission automatique</span>
                <span className='price'>Prix : 15000 ar</span>
                <div className='details'>
                    <span className='annonce'>Annonce le : 2023-05-05</span>
                    <div className='content-choix'>
                        <Link to="/details/1" className='details' > <span>Plus details</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tab