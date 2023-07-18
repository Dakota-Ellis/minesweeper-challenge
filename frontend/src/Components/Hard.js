import React, { useState, useEffect } from "react";
import CreateBoard from '../utils/CreateBoard';
import Revealed from '../utils/Revealed';
import Cell from './Cell'
import Timer from '../utils/Timer'

function Board() {
    const [grid, setGrid] = useState([]);
    const [nonMinecount, setNonMinecount] = useState(0);
    const [mineLocation, setMineLocation] = useState([]);

    const style = {
        display : 'flex',
        flexDirection : 'row',
    }

    useEffect(() => {
    function freshBoard() {
        const newBoard = CreateBoard(20, 20, 40);
        setNonMinecount(10 * 10 - 20);
        setMineLocation(newBoard.mineLocation);
        setGrid(newBoard.board);
    }
    freshBoard();
},[]);

const updateFlag = (e, x, y) => {
    e.preventDefault();

    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].flagged = true;
    console.log(newGrid[x][y]);
    setGrid(newGrid);
}

const revealcell = (x, y) => {
    let newGrid = JSON.parse(JSON.stringify(grid));
    if(newGrid[x][y].value === "X") {
        alert("clicked on mine");
        for(let i = 0; i < mineLocation.length; i++) {
            newGrid[mineLocation[i][0]][mineLocation[i][1]].Revealed = true
        }
        setGrid(newGrid);
    }
    else {
        let revealedboard = Revealed(newGrid, x, y, nonMinecount);
        setGrid(revealedboard.arr);
        setNonMinecount(revealedboard.newNonMines)
        // newGrid[x][y].revealed = true;
        // setGrid(newGrid);
    }
}

return (
    <div className="parent">
        <div style={{color:"white",textAlign:"center",fontSize:"35px"}}>Non-Mines : {nonMinecount}</div>
        {<Timer />}
        <div>

        {grid.map((singlerow, index1) => {
            return (
                <div style={style} key={index1}>
                    {singlerow.map((singlecol, index2) => {
                        return <Cell details ={singlecol} key={index2} updateFlag = {updateFlag} revealcell={revealcell}/>
                    })}
                    </div>
            )
        })}
    </div>

</div>
)


}

export default Board; 