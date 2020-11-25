import React, { Component } from 'react'
import axios from 'axios';
import "./styles.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
class App extends Component {
    constructor() {
        super()
        this.state = { nombre: "", comentario: "" };
        this.enviarinfo = this.enviarinfo.bind(this);
    }
    update = (name, e) => {
        this.setState({ [name]: e.target.value });
    };
    enviarinfo() {

        const httpInstance = axios.create({
            baseURL: "http://localhost:8080/",
            timeout: 1000,
            headers: { 'Content-Type': 'application/json' }
        });//
        httpInstance.interceptors.response.use(null, error => {
            const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
            if (!expectedError) {
                // Loggear mensaje de error a un servicio como Sentry
                // Mostrar error genérico al usuario
                return Promise.reject(error);
            }
        }
        );
        //------
        const { nombre, comentario } = this.state;
        httpInstance.post('cu', {
            nombre, comentario
        }).then(usuarios => {
            console.log(usuarios.data)
        }).catch(error => {
            console.error(error);
        })

    }

    render() {
        return (
            <div className="container-fluid p-5 d-flex justify-content-center o-form-container">
                <div className="m-5 rounded p-3 bg-secondary w-50 ">
                    <div className="d-flex justify-content-end">
                        <span onClick={() => { this.props.history.push("/prueba"); }} className="btn btn-lg  btn-link p-0"><AiOutlineCloseCircle className=" h1 o-btn-close m-0"/></span>
                    </div>
                    <div className="d-flex justify-content-center p-3">
                        <p className="h2 text-white text-center mr-5 ml-5 font-weight-bold">Deja tu comentario para todas las victimas del COVID-19</p>
                    </div>
                    <form className="mr-4 ml-4 mb-0 ">
                        <div className="form-group ">
                            <label htmlFor="NameInput" className="h3 font-weight-bold">Nombre:</label>
                            <input type="text" value={this.state.nombre} onChange={(e) => this.update("nombre", e)} id="NameInput"  className="form-control" placeholder="Nombre" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="commenttArea" className="h3 font-weight-bold">Comentario:</label>
                            <textarea value={this.state.comentario} onChange={(e) => this.update("comentario", e)} className="form-control" id="commenttArea" rows="5"></textarea>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn o-btn-send font-weight-bold text-white" onClick={this.enviarinfo}>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default App;

/*

                    <form>
                        nombre
                    <input
                            name='nombre'
                            type='text'
                            value={this.state.nombre}
                            onChange={(e) => this.update("nombre", e)}
                        />

                    comentario
                    <input
                            name='comentario'
                            type='text'
                            value={this.state.comentario}
                            onChange={(e) => this.update("comentario", e)}
                        />
                        <button

                            onClick={this.enviarinfo}
                        >
                            enviar
                    </button>
                    </form>
*/