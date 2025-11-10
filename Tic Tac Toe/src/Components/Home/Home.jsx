import React, { useEffect, useState } from 'react'
import Winner from '../Winner';
import DrawGame from '../DrawGame';

function Home() {
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [winner, setWinner] = useState(null);
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isDraw, setIsDraw] = useState(false);
    const [point, setPoint] = useState(Array(2).fill(0));
    const [name1, setName1] = useState("Player 1");
    const [name2, setName2] = useState("Player 2");


    const winningLine = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    const gameLogic = (board) => {
        for (let line of winningLine) {
            const [a, b, c] = line;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]; // "X" or "O"
            }
        }
        return null;
    }

    useEffect(() => {
        console.log("player 1 = ", name1, " player 2 = ", name2);
    }, [name1, name2, setName1, setName2]);

    const handelClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = [...board]
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const gameWinner = gameLogic(newBoard);
        if (gameWinner) {
            setWinner(gameWinner);
        } else if (!newBoard.includes(null)) {
            setIsDraw(true);
        } else {
            setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"))
        }

    }

    const resetGame = () => {
        setCurrentPlayer("X");
        setWinner(null);
        const resetBoard = Array(9).fill(null);
        setBoard(resetBoard);
        setIsDraw(false);
    }

    const resetPoint = () => {
        const reset = Array(2).fill(0);
        setPoint(reset);
        resetGame();
    }

    useEffect(() => {
        console.log(winner);
        if (winner === null) return;
        console.log(winner);
        if (winner === "x" || winner === "X") {
            const player = [...point];
            player[0]++;
            setPoint(player);
            console.log(winner);

        } else if (winner === "O" || winner === "o") {
            const player = [...point];
            player[1]++;
            setPoint(player);
            console.log(winner);

        }
    }, [winner])

    return (
        <div className='flex h-dvh sm:min-w-dvw items-center w-screen flex-col dark:bg-gray-900 bg-(--bg-light) transition-all ease-in transition-discrete duration-200'>
            <div className='h-12 my-10  w-screen text-white flex  items-center text-2xl '>
                <div className='w-secreen flex w-full justify-between items-center'>
                    <div className='mx-2.5 w-1/2 gap-1 text-xl lg:text-3xl lg:w-1/5 flex justify-center md:text-3xl items-center'>
                        <input type={"text"} className={`w-1/2 text-xl lg:text-3xl md:text-3xl text-center placeholder:text-white`} onChange={(e) => setName1(e.target.value)} placeholder='Player 1' />
                        : <p>{point[0]}</p>
                    </div>

                    <div className='w-1/2 lg:w-1/5 mx-2.5 gap-1 text-xl lg:text-3xl md:text-3xl flex justify-center items-center'>
                        <input type={"text"} className={`w-1/2 text-xl lg:text-3xl md:text-3xl text-center placeholder:text-white`} onChange={(e) => setName2(e.target.value)} placeholder='Player 2' />
                        : <p>{point[1]}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center flex-wrap md:my-auto text-2xl w-96 h-96 md:w-2xl md:h-2xl lg:h-96 lg:w-96  gap-5'>
                {board.map((value, index) => {
                    return (
                        <button
                            key={index}
                            className={`flex justify-center items-center w-22 h-22 sm:h-26 md:w-40 md:h-40 sm:w-20 lg:h-28 lg:w-28 dark:bg-gray-700  border-white bg-(--bg-box) ${value === "X" ? "text-red-600" : "dark:text-green-600 text-green-700"} border-2 rounded-lg lg:text-8xl md:text-9xl text-7xl flex justify-center items-center transition-[all_0.3_ease_in]`}
                            onClick={() => handelClick(index)}
                        >
                            {value != null && (value === "X" ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-o"></i>)}
                        </button>
                    )
                })}

            </div>
            <div className="mt-8 flex justify-evenly items-center w-full lg:w-1/3 h-fit md:h-1/3">
                <button className='relative border-2 border-white bg-blue-600 hover:bg-blue-800 text-white text-md z-0 rounded-md dark:bg-indigo-600 dark:hover:bg-indigo-900 px-5 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded dark:after:bg-indigo-800 after:transition-[all_0.3s_ease]  hover:after:w-full active:bg-gray-300 active:text-black hover:scale-105 active:scale-95'
                    onClick={resetGame}
                >Reset Game</button>

                <button className=' relative border-2 border-white bg-blue-600 hover:bg-blue-800 text-white text-md z-0 rounded-md dark:bg-indigo-600 dark:hover:bg-indigo-900 px-5 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded dark:after:bg-indigo-800 after:transition-[all_0.3s_ease]  hover:after:w-full active:bg-gray-300 active:text-black hover:scale-105 active:scale-95 '
                    onClick={resetPoint}
                ><i className="fa-solid fa-rotate-right"></i> Reset Points</button>



            </div>
            {winner ? <Winner onClick={resetGame} player={winner === "X" ? name1 : name2} /> : ""}
            {isDraw ? <DrawGame onClick={resetGame} /> : ""}
        </div>
    )
}

export default Home