import React from 'react'
import "../components/styles.css";
import foto from "../assets/art.jpg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const honorPage = () => {
    return (
        <div className="container-fluid p-5  o-form-container">
            <div className="row d-flex justify-content-center">
                <div className="mb-5 mt-5 mr-0 ml-0 rounded p-3 o-cont-arnold w-50 ">
                    <div className="d-flex justify-content-end">
                        <a href="/cu" className="btn btn-lg  btn-link p-0"><AiOutlineCloseCircle className=" h1 o-btn-close m-0" /></a>
                    </div>
                    <div className="d-flex justify-content-start ml-5 mt-4">
                        <p className="h3 text-light font-weight-bold ml-5">En memoria de...</p>
                    </div>
                    <div className="d-flex justify-content-center ml-5 mt-4">
                        <img className="w-50" alt="foto" src={foto} />
                    </div>
                    <div className="d-flex justify-content-end mr-5 mt-4">
                        <p className="h3 text-light font-weight-bold ml-5">Blanca Rosa Sánchez </p>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-end">
                <a href="/cu" className="btn btn-lg  btn-link p-0"><FaRegArrowAltCircleRight className=" display-3 o-btn-close mr-5" /></a>
            </div>

        </div>
    )
}


export default honorPage;