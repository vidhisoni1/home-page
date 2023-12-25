import Image from 'react-bootstrap/Image';
import React from 'react';

function FluidExample() {
    return <>
        <div className="container">
            <h5 className='fs-4 text-secondary mt-5'>PORTFOLIO <span className='text-warning'>_______________</span></h5>
            <h2 className='fs-2 fw-bold'>CHECK OUR PORTFOLIO</h2>

            <div className="row mt-5 mb-5 justify-content-center">
                <div className="col-1 button">
                    <button className='bg-warning text-dark fs-5 '>ALL</button>
                </div>

                <div className="col-1 button">
                    <button className='fs-5 border-0 '>APP</button>
                </div>
                <div className="col-1 button">
                    <button className='fs-5 border-0 '>CARD</button>
                </div>
                <div className="col-1 button">
                    <button className='fs-5 border-0  shadow-sm shadow bg-light'>WEB</button>
                </div>
            </div>

            <div className="row">
                <div className="col-4 my-3 mx-0">
                    <Image src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-1.jpg" width="400px" height="400px" />
                </div>
                <div className="col-4 my-3 mx-0">
                    <Image src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-2.jpg" width="400px" height="400px" />
                </div>
                <div className="col-4 my-3 mx-0">
                    <Image src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-5.jpg" width="400px" height="400px" />
                </div>
                <div className="col-4 my-3 mx-0">
                    <Image src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-9.jpg" width="400px" height="400px" />
                </div>
                <div className="col-4 my-3 mx-0">
                    <Image src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-6.jpg" width="400px" height="400px" />
                </div>
                <div className="col-4 my-3 mx-0">
                    <Image src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-3.jpg" width="400px" height="400px" />
                </div>
            </div>
        </div>
    </>
}

export default FluidExample;
