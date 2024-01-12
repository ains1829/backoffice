import '../assets/scss/Form_tab.css';
import Marque from "./formulaire/Marque";
function Tab_marque(){
    return(
        <div className="content-form-tab">
            <Marque />
            <div className="tab">
                <table>
                    <tr>
                        <th>Marque</th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr className="tr">
                        <td>Mercedes</td>
                        <td>modifier</td>
                        <td>delete</td>
                    </tr>
                    <tr className="tr">
                        <td>Ferrari</td>
                        <td>modifier</td>
                        <td>delete</td>
                    </tr>
                    <tr className="tr">
                        <td>Tesla</td>
                        <td>modifier</td>
                        <td>delete</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Tab_marque