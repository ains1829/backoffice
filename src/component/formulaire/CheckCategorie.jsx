function CheckCategorie(){
    return(
        <div className="input-checkbox">
            <div className="content-child">
                <label> Familiale  </label>
                <input type="checkbox" id="check0" name="check0"/>
                <label for="check0">
                    <span></span>
                </label>
            </div>
            <div className="content-child">
                <label> Sport  </label>
                <input type="checkbox" id="check1" name="check1"/>
                <label for="check1">
                    <span></span>
                </label>
            </div>
            <div className="content-child">
                <label> Citadin  </label>
                <input type="checkbox" id="check2" name="check2"/>
                <label for="check2">
                    <span></span>
                </label>
            </div>
        </div>
    )
}
export default CheckCategorie 