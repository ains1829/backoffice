import { useParams } from "react-router-dom"
import Details_component from "../component/Details_component"
import Menu from "../component/Menu"
import '../assets/scss/details.css'
import Header from "../component/Header"
import Vendeur from "../component/Vendeur"
function Details(){
    const {id} = useParams()
    return(
        <div>
            <Header/>
            <div className="menu">
                <Menu />
            </div>
            <div className="content-details">
                <Details_component id={id} />
                <Vendeur id={id} />
            </div>
        </div>
    )
}
export default Details