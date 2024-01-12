import { useState } from "react"
import Modelelist from "./formulaire/ModeleList"

function Tab_modele(){
    const [select_marque , setSelectMarque] = useState("0") 
    const handleselect = (event) =>{
        setSelectMarque(event.target.value)
    }
    return(
        <div className="modele-dispo">
            <div className="choix-marque">
                <label htmlFor="">Marque</label>
                <select onChange={handleselect}>
                    <option value="0">Mercedes</option>
                    <option value="1">Ferrari</option>
                </select>
            </div>
            <div className="modele-list">
                <Modelelist id={select_marque} />
            </div>
        </div>
    )
}
export default Tab_modele