import '../assets/scss/Form_tab.css';
import '../assets/fontawesome-5/css/all.min.css'
import Marque from "./formulaire/Marque";
function Tabmarque(){
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
                        <td><i className="fas fa-pen"></i></td>
                       <td><i className="fas fa-trash-alt "></i></td>
                    </tr>
                    <tr className="tr">
                        <td>Ferrari</td>
                        <td><i className="fas fa-pen"></i></td>
                       <td><i className="fas fa-trash-alt "></i></td>
                    </tr>
                    <tr className="tr">
                        <td>Tesla</td>
                        <td><i className="fas fa-pen"></i></td>
                       <td><i className="fas fa-trash-alt "></i></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Tabmarque