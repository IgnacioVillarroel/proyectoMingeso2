import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import NavbarComponent from "./NavbarComponent";

export default function Home() {

    return (
        <div>
            <GlobalStyle />
            <NavbarComponent />
            <HomeStyle>
                    {/* <header className="header">
                        <div className="logo">
                            <h1 align="center" style={{ color: "white" }}>
                                {" "}
                                <b1>MilkStgo</b1>
                            </h1>
                        </div>
                    </header> */}
                    <div align="center">
                        <a className="btn" href="/listar">
                            <button>Ver proveedores</button>
                        </a>
                        <a className="btn-2" href="/fileUpload">
                            <button>Cargar archivo de Acopio Leche</button>
                        </a>
                        <a className="btn-3" href="/fileUpload_grasa">
                            <button>Cargar archivo de Grasa y Solidos</button>
                        </a>
                        <a className="btn-4" href="/calcular">
                            <button>Calculo de pagos</button>
                        </a>
                    </div>
            </HomeStyle>
        </div>
    );
}

const GlobalStyle = createGlobalStyle`
`
const HomeStyle = styled.nav`
`