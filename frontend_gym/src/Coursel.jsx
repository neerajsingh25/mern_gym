import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Coursel = () => {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../images/gym1.jpg" className="d-block w-100" alt="..." style={{ height: 900 }} />
                    </div>
                    <div className="carousel-item">
                        <img src="../images/gym2.jpg" className="d-block w-100" alt="..." style={{ height: 900 }} />
                    </div>
                    <div className="carousel-item">
                        <img src="../images/gym3.jpg" className="d-block w-100" alt="..." style={{ height: 900 }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Coursel