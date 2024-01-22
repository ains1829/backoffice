import '../assets/scss/style.css'
import logo from '../assets/image/1-removebg-preview.png'
function Header(){
    
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    return(
        <header>
            <div className="title">
                <span><img src={logo} alt="..." /></span>
            </div>
            <div className='nav-rigth'>
                <div>
                    <span>
                        <div id="main">
                            <button className="openbtn" onClick={openNav}>☰ </button>  
                        </div>
                    </span>
                </div>
                <div className="other-nav">
                    <span>Administrateur</span>
                </div>
            </div>
        </header>
    )
}
export default Header