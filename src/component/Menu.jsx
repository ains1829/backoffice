import { Link } from 'react-router-dom';
import '../assets/scss/menu.css'
function Menu(){
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        document.querySelector(".openbtn").style.display = "block";
    }
    return(
        <div className="content-menu">
            <div id="mySidebar" className="sidebar">
                <Link className="closebtn" onClick={closeNav}>×</Link>
                <Link to="/firstpage">Annonce</Link>
                <Link to="/stat">Statistique</Link>
                <Link href="#">Service</Link>
                <Link href="#">Log Out</Link>
            </div>
        </div>
    )
}
export default Menu