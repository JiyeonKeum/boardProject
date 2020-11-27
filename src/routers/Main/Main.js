import React from 'react';
import './Main.css';
// import styled from 'styled-components';
import Login from './../../components/Login/Login';
import Board from './../../components/Board/Board';

const Main = () =>{
    return(
        <div>
            <div id="menu">
                <div id="menuInner">
                    <ul>
                        <li>menu</li>
                        <li>menu</li>
                        <li>menu</li>
                        <li>menu</li>
                        <li>menu</li>
                    </ul>
                </div>
            </div>
            <div id="header">
                <div id="headerInner">
                    <div id="loginContainer">
                        <Login/>
                    </div>
                </div>
            </div>
            <div id='main'>
                <div id="mainInner">
                    <Board/>
                </div>
            </div>
            <footer></footer>
        </div>
    );
}

export default Main;
