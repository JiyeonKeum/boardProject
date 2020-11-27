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
                        <li>소개</li>
                        <li>제휴</li>
                        <li>예약</li>
                        <li>커뮤니티</li>
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
                    <div id="boardContainer">
                        <Board/>
                    </div>
                </div>
            </div>
            <footer></footer>
        </div>
    );
}

export default Main;
