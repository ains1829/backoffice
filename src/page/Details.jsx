import { useParams } from "react-router-dom"
import Detailscomponent from "../component/Detailscomponent"
import Menu from "../component/Menu"
import '../assets/scss/details.css'
import Header from "../component/Header"
function Details() {
    const { id } = useParams()
    return (
        <div>
            <Header />
            <div className="menu">
                <Menu />
            </div>
            <div className="content-details">
                <Detailscomponent id={id} />
            </div>
        </div>
    )
}
export default Details