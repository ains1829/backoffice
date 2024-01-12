function CheckTransmission(){
    return(
        <div className="input-checkbox">
            <div className="content-child">
                <label> Manuelle  </label>
                <input type="checkbox" id="check4" name="check4"/>
                <label for="check4">
                    <span></span>
                </label>
            </div>
            <div className="content-child">
                <label> Automatique  </label>
                <input type="checkbox" id="check5" name="check5"/>
                <label for="check5">
                    <span></span>
                </label>
            </div>
        </div>
    )
}
export default CheckTransmission