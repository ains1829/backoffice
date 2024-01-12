import CheckCategorie from "./formulaire/CheckCategorie";
import '../assets/scss/modele.css'
import CheckTransmission from "./formulaire/CheckTransmission";
function Modele(){
    return(
        <div className="generate-modele">
            <div>
                <label htmlFor="">Nom Modele</label>
                <input type="text" name="modele" />
            </div>
            <div>
                <label htmlFor="">Marque</label>
                <select name="">
                    <option value="0">Mercedes</option>
                    <option value="">Ferrarie</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Categorie</label>
                <CheckCategorie />
            </div>
            <div>
            <div>
                <label htmlFor="">Vitesse</label>
                <input type="text" name="vitesse" />
            </div>
                <label htmlFor="">Transmission</label>
                <CheckTransmission />
            </div>
            <div>
                <label htmlFor="">Date sorti</label>
                <input type="date" name="date" />
            </div>
            <div>
                <input type="submit" value="Valider" />
            </div>
        </div>
    )
}
export default Modele