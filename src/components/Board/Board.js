import React from 'react';
import './Board.css';

const Board = () =>{
    return(
        <div>
            <div id="boardHeader">
                <div>제목</div>
                <div>작성자</div>
                <div>작성일</div>
            </div>
            <div id="mainSection"></div>
        </div>
    );
}

export default Board;