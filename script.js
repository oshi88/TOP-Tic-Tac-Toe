'use strict';

const Player = (sign) => {
    this.sign = sign;
    const signGet = () =>{
        return sign;
    }
    return {signGet};
};

const gameBoard = (()=>{
    const gameBoardArr = ["","","","","","","","","",];

    const setSign = (index,sign) =>{
        if(index > gameBoardArr.length) return;
        gameBoardArr[index] = 'X';
    }

    const getSign = (index) =>{
        return gameBoard[index];
    }
return {setSign,getSign,gameBoardArr};

})();


const displayControl = (() => {
    const divTile = document.querySelectorAll(".tile");
    divTile.forEach((tile) =>
    tile.addEventListener("click", (e) =>{
        gameBoard.setSign(e.target.dataset.index);
        divTile[e.target.dataset.index].innerText = gameControl.currentPlayerSign();
    }))
return {divTile}
})();


const gameControl = (() => {

    const playerX = Player("X");
    const playerO = Player("O");
    let round = 1;
    const playRound = (tileIndex) =>{

    }
    const currentPlayerSign = () =>{
        var sign = round % 2 === 1? playerX.signGet() : playerO.signGet()
         round++
         return sign;
    }
    
        return{currentPlayerSign,round}
})();
