import Board from './Board';
import Hard from './Hard'
import { Link } from 'react-router-dom';

function Home() {
  
    return (
        <div className='mainPage'>
            <h1 id='title'>Welcome to MineSweeper!</h1>
            <div className='difficultButtons'>
                <Link to="/Board">
                   <button type='button' id='easy' >EASY</button> 
                </Link>
                <Link to="/Hard">
                   <button type='button' id='hard' >HARD</button> 
                </Link>
            </div>
        </div>

    )
}

export default Home;