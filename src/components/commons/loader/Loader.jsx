import React from "react";
import './Loader.scss';
import { ProgressSpinner } from "primereact/progressspinner";

const Loader = ({fullPage = false}) => {
    return (
        <div id="Loader" style={fullPage ? { height: '85vh'} : null} className="row">
            <div className="col-12 col-md-6 my-3 mx-auto d-flex flex-column justify-content-center align-items-center">
                <ProgressSpinner 
                    style={!fullPage ? {width: '40px', height: '40px'} : null}
                    animationDuration=".5s"
                />
                { fullPage ? <h5>Loading...</h5> : <small>Loading...</small>}
            </div>
        </div>
    )
}

export default Loader;
