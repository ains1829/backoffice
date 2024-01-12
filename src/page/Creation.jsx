import Header from "../component/Header"
import Menu from "../component/Menu"
import Tab_categorie from "../component/Tab_categorie"
import '../assets/scss/Form_tab.css';
import '../assets/scss/modele.css'
import { useState } from "react";
import Tab_marque from "../component/Tab_marque";
import Modele from "../component/Modele";
import Tab_modele from "../component/Tab_modele";
function Creation(){
    const [component , setComponenet] = useState("0")
    const handleselect =  (event) =>{
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
                    </select>
                </div>
                {
                    component === "0" ? 
                    <Tab_categorie /> : null
                }
                {
                    component === "1" ? 
                    <Tab_marque /> : null
                }
                {
                    component === "2" ? 
                    <div className="modele">
                        <Modele />
                        <Tab_modele />
                    </div> : null
                }
            </div>
        </div>
    )
}
export default Creation