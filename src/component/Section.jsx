import React from "react";
import './style.css'
import { useState } from "react";

function Section() {

    const data = [
        {
            title: "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
            l1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            l2: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            l3: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
            p: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
            image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/about.jpg'
        }
    ]



    const [product, setProduct] = useState(data)



    return (
        <>
            <div className="container">

                <div className="row">
                    {
                        product.map((element) => {

                            return (
                                <>
                                    <div className="col-6 text-center">

                                        <h2 class="mt-5">{element.title}</h2>
                                        <p class="fs-5 pt-3">{element.l1}</p>
                                        <p class="fs-5 "><i class="fa-solid fa-check-double text-warning me-3"></i>{element.l2}</p>
                                        <p class=" fs-5"><i class="fa-solid fa-check-double  text-warning me-3 "></i>{element.l3}</p>
                                        <p class="fs-5 ">{element.p}</p>

                                    </div>

                                    <div className="col-4 p-5">
                                        <img src={element.image} width="700px" height="" alt="" />
                                    </div>
                                </>


                            )
                        })
                    }



                </div>

            </div>
        </>
    )
};


export default Section;














