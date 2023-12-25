import React from "react";
import './style.css'
import { useState } from "react";

function Expert() {

    const data = [
        {
            image:"https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-1.jpg",
            title: "Walter White",
            p: "Chief Executive Officer",
        },
        {
            image: "https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-2.jpg",
            title: "Sarah Jhonson",
            p: "Product Manager",
        },
        {
            image:"https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-3.jpg",
            title: "William Anderson",
            p: "CTO",
        },
        {
           image:"https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-4.jpg",
            title: "Alex hales",
            p: "Designer",
        }
        // {
        //     image:"https://media.istockphoto.com/id/665481590/photo/logistics-manager-warehouse-portrait.jpg?s=612x612&w=0&k=20&c=D-fZ8d-q64HFNUYI1YBgt5f8Lazo_I4dv7hwYf5YReY=",
        //      title: "David warner",
        //      p: "senior engineer",
        //  },
        //  {
        //     image:"https://media.istockphoto.com/id/536051931/photo/happy-young-businessman-with-digital-tablet-in-warehouse.jpg?s=612x612&w=0&k=20&c=tTVP-NfN4vWWxfU0uub1BLjaWhGJUcyB4YvUvM3zEZw=",
        //      title: "Joss butller",
        //      p: "MD",
        //  },
    ]



    const [product, setProduct] = useState(data)



    return (
        <>
            <div className="container mt-5">

                <h5 className="text-secondary">TEAM <span className="text-warning">____________</span></h5>
                <h2>CHECK OUR TEAM</h2>

                <div className="row mt-4">
                    {
                        product.map((element) => {

                            return (
                                <>

                                    <div className=" col-3 text-start p-2">
                                        <div className=" shadow p-3 rounded ">
                                        <img src={element.image} width="100%" alt="" />
                                        <h1 className="fs-3 mt-2 fs-4">{element.title}</h1>
                                        <p className=" mb-2 ">{element.p}</p>
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


export default Expert;