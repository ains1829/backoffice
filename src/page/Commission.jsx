import Header from "../component/Header";
import Menu from "../component/Menu";
import '../assets/scss/style.css'
function Commission() {
    return (
        <div>
            <Header />
            <div className="menu">
                <Menu />
            </div>
            <div className="commission">
                <div>
                    <label>Commission</label>
                    <input type="text" placeholder="en pourcentage" required />
                </div>
                <div>
                    <input type="submit" value="Commision" />
                </div>
            </div>
        </div>
    )
}
export default Commission