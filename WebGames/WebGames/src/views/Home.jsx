import gaming4 from "../assets/imgs/gaming4.png"
import xo from "../assets/imgs/tic-tac-toe.png"
import rps from "../assets/imgs/rps.jpeg"
import quesitonMark from "../assets/imgs/questionMark2.png"
import { Link } from "react-router-dom"

function screentop(){
  window.scrollTo(0, 0);
}
export default function Home(){
    return(
        <div className="home">
            <header className="header">
    <div className="welcome">
        <div id="welcome-message"><h1>Welcome To WebGames  </h1>
            <p>
                Here you can have fun playing simple games alone or with a friend
            </p>


        </div>
        <img width="400" height="auto" alt="" src={gaming4}/>
    </div>

</header>

<div className="choices">
    <div className="page_choice">
      <img width="auto" height={90} alt="" src={xo} />
      <Link onClick={screentop}  to="/xo"> Tic-Tac-Toe</Link>
    </div>
    <div className="page_choice">
      <img width="auto" height={90} alt="" src={quesitonMark} />
      <Link onClick={screentop}  to="/matching"> Matching Game</Link>
    </div>
    <div className="page_choice">
      <img width="auto" height={90} alt="" src={rps} />
      <Link onClick={screentop}  to="/rps"> Rock Paper Scissors</Link>
    </div>
  </div>


        </div>
    )
}