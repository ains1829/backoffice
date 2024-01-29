import Header from "../component/Header"
import Menu from "../component/Menu"
import Tabcategorie from "../component/Tabcategorie"
import '../assets/scss/Form_tab.css';
import '../assets/scss/modele.css'
import { useState } from "react";
import Tabmarque from "../component/Tabmarque";
import Modele from "../component/Modele";
import Tabtransmission from "../component/Tabtransmission";
function Creation() {
    const [component, setComponenet] = useState("0")
    const handleselect = (event) => {
        setComponenet(event.target.value)
    }
    return (
        <div>
            <Header />
            <div className="menu">
                <Menu />
            </div>
            <div className="content-choix-form">
                <div className="choix">
                    <select name="choix-creation" id="" onChange={handleselect}>
                        <option value="0">Creation Categorie</option>
                        <option value="1"> Creation Marque </option>
                        <option value="2"> Creation Modele </option>
                        <option value="3"> Creation Transmission </option>
                    </select>
                </div>
                {
                    component === "0" ?
                        <Tabcategorie /> : null
                }
                {
                    component === "1" ?
                        <Tabmarque /> : null
                }
                {
                    component === "2" ?
                        <div className="modele">
                            <Modele />
                        </div> : null
                }{
                    component === "3" ?
                        <Tabtransmission /> : null
                }
            </div>
        </div>
    )
}
export default Creation