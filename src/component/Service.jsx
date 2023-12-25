import React from "react";
import './style.css'
import { useState } from "react";

function Service() {

    const data = [
        {
            icon: <i class="fa-regular fa-futbol"></i>,
            title: "Lorem Ipsum",
            p: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
        },
        {
            icon: <i class="fa-solid fa-file"></i>,
            title: "Sed ut perspiciatis",
            p: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        },
        {
            icon: <i class="fa-solid fa-gauge-simple-high"></i>,
            title: "Magni Dolores",
            p: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
        },
        {
            icon: <i class="fa-solid fa-earth-americas"></i>,
            title: "Nemo Enim",
            p: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
        },
        {
            icon: <i class="fa-brands fa-youtube"></i>,
            title: "Dele cardo",
            p: "Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur",
        },
        {
            icon: <i class="fa-solid fa-receipt"></i>,
            title: "Divera don",
            p: "Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur",
        }
    ]



    const [product, setProduct] = useState(data)



    return (
        <>
            <div className="container mt-5">

                <h5 className="text-secondary">SERVICES <span className="text-warning">_______________</span></h5>
                <h2>CHECK OUR SERVICES</h2>

                <div className="row">
                    {
                        product.map((element) => {

                            return (
                                <>

                                    <div className=" col-4  p-3 ">
                                        <div className="text-center border border-1 p-1">
                                            <div className="d-flex justify-content-center mb-2">
                                        <div className="fs-3 text-dark bg-warning  mt-5 icon text-center">{element.icon}</div>
                                        </div>
                                        <p className="fs-4">{element.title}</p>
                                        <p className="fs-5 mt-4">{element.p}</p>
                                        </div>
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


export default Service;