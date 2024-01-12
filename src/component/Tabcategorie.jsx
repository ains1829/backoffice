import Categorie from "./formulaire/Categorie";
function Tabcategorie(){
    return(
        <div className="content-form-tab">
            <Categorie />
            <div className="tab">
                <table>
                    <tr>
                        <th>Categorie</th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr className="tr">
                        <td>Famille</td>
                        <td>modifier</td>
                        <td>delete</td>
                    </tr>
                    <tr className="tr">
                        <td>Sport</td>
                        <td>modifier</td>
                        <td>delete</td>
                    </tr>
                    <tr className="tr">
                        <td>Course</td>
                        <td>modifier</td>
                        <td>delete</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Tabcategorie