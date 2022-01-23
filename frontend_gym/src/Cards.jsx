import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Cards = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto my-5">
                        <p className="h2 text-center">Why to join our gym</p>
                        <div className="card-group" >
                            <div className="card mx-2">
                                <img src="../images/gym4.jpg" className="card-img-top" alt="..." height="500" />
                                <div className="card-body">
                                    <h5 className="card-title">Qualified Trainers</h5>
                                    <p className="card-text ">We have qualified  and experienced traines both men and women.</p>
                                </div>
                            </div>
                            <div className="card mx-2">
                                <img src="../images/gym5.jpg" className="card-img-top" alt="..." height="500" />
                                <div className="card-body">
                                    <h5 className="card-title">Gym Place</h5>
                                    <p className="card-text ">Our gym is most spacious and cleaned gym in the city.</p>
                                </div>
                            </div>
                            <div className="card mx-2">
                                <img src="../images/gym6.jpg" className="card-img-top" alt="..." height="500" />
                                <div className="card-body">
                                    <h5 className="card-title">Equipments</h5>
                                    <p className="card-text">We have latest gym equipments and machines for almost all exercises.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Cards;