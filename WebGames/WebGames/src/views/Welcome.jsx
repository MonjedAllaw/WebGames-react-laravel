import gaming4 from "../assets/imgs/gaming4.png"
import xo from "../assets/imgs/tic-tac-toe.png"
import rps from "../assets/imgs/rps.jpeg"
import quesitonMark from "../assets/imgs/questionMark2.png"
import monopoly from "../assets/imgs/monopoly1.png"
import flappy from "../assets/imgs/flappy-dunk1.png"
import { Link } from "react-router-dom"

function screentop(){
    window.scrollTo(0, 0);
  }
export default function Welcome(){
    return(
        <>
        <header className="header">
    <div className="welcome">
        <div id="welcome-message" >
            <h1>Welcome To WebGames  </h1>
            <p>

            <br />
            As a member of WebGames, you'll have access to all our games,be able to save your high scores and compete with other gamers around the world and other features and benefits, including game recommendations, customized gaming experiences, and more.
        <br /> <br />
So what are you waiting for? Sign up or log in now and start playing our amazing games!
            </p>


        </div>
        <img width="500" height="auto" alt="" src={gaming4}/>
    </div>
    

</header>
<div className="choices">
    <div className="page_choice active">
      <img width="auto" height={90} alt="" src={xo} />
      <Link onClick={screentop}  to="/signup"> Tic-Tac-Toe</Link>
    </div>
    <div className="page_choice active">
      <img width="auto" height={90} alt="" src={quesitonMark} />
      <Link onClick={screentop}  to="/signup"> Matching Game</Link>
    </div>
    <div className="page_choice active">
      <img width="auto" height={90} alt="" src={rps} />
      <Link onClick={screentop}  to="/signup"> Rock Paper Scissors</Link>
    </div>
    <div className="page_choice ">
      <img width="auto" height={90} alt="" src={monopoly} />
      <a>Coming Soon: Monopoly</a>
    </div>
    <div className="page_choice ">
      <img width="auto" height={90} alt="" src={flappy} />
      <a>Coming Soon: Flappy Dunk</a>
    </div>
  </div></>
    )
}