import React, { Component } from "react";
import NavbarComponent5 from "./NavbarComponent5";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

class AcopioInformationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/acopios")
            .then((response) => response.json())
            .then((data) => this.setState({ data: data }));
    }

    render() {
        return (
            <div>
                <GlobalStyle />
                <NavbarComponent5 />
                <Styles>
                    <div align="center" className="container my-2">
                        <h1>
                            <b> Lista de Acopios</b>
                        </h1>
                        <table border={3} className="table">
                            <thead className="table-dark">
                                <tr>
                                    <th>Fecha</th>
                                    <th>Turno</th>
                                    <th>Proveedor</th>
                                    <th>KLS Leche</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((acopio) => (
                                    <tr>
                                        <td>{acopio.fecha}</td>
                                        <td>{acopio.turno}</td>
                                        <td>{acopio.proveedor}</td>
                                        <td>{acopio.kls_leche}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Styles>
            </div>

        );
    }
}

export default AcopioInformationComponent;

const GlobalStyle = createGlobalStyle`
`
const Styles = styled.div`
`