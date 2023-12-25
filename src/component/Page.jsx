import React, { Component } from "react";
import './style.css'
import { useState } from "react";


function Page() {

    const data = [
        {
            title: "Est labore ad",
            p: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",

            title: "Harum esse qui",
            p: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",

            title: "Aut occaecati",
            p: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",

            title: "Beatae veritatis",
            p: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta",

            image: 'https://bootstrapmade.com/demo/templates/Gp/assets/img/features.jpg'
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

                                    <div className="col-6 ">
                                        <img src={element.image} className="mt-5" alt="" width="100%"/>
                                    </div>

                                    <div className="col-6">

                                       <h2 className="fs-5 mt-5"><i class="fa-solid fa-book me-3 text-warning fs-3"></i>{element.title}</h2>
                                       <p className="fs-5">{element.p}</p>
                                       <h2 className="fs-5 mt-4"><i class="fa-solid fa-cube me-3 text-warning fs-3"></i>{element.title}</h2>
                                       <p className="fs-5">{element.p}</p>
                                       <h2 className="fs-5 mt-4"><i class="fa-solid fa-mountain me-3 text-warning fs-3"></i>{element.title}</h2>
                                       <p className="fs-5">{element.p}</p>
                                       <h2 className="fs-5 mt-4"><i class="fa-solid fa-shield-halved fs-2 me-3 text-orange"></i>{element.title}</h2>
                                       <p className="fs-5">{element.p}</p>

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


export default Page;














