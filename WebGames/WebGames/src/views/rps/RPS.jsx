import './RPS.css'
import { useState,useRef } from 'react'
import rock from "../../assets/imgs/rock.png"
import paper from "../../assets/imgs/paper.png"
import scissors from "../../assets/imgs/scissors.png"

export default function RPS(){ 
    const [score,setScore]=useState( {computer:0,user:0 });
    const computer_choice_p=useRef("");
    const result =useRef("Lets play")


    function generate_choice(){
        const choices = ["r","p","s"];
        const ran = Math.floor(Math.random()*3);
        return choices[ran];
    
    }
    function to_words (char){
        if (char === "r")
            return "Rock";
        if (char === "p")
            return "Paper";
        return "Scissors";
    
    }
    function win (user_choice, computer_choice){
        const newScore = { ...score };
        newScore["user"] += 1;
        setScore(newScore);
        
        result.current =`${to_words(user_choice)} beats ${to_words(computer_choice) }. You Win!!`;
    
    }
    function loose (user_choice, computer_choice){
        const newScore = { ...score };
        newScore["computer"] += 1;
        setScore(newScore);
       
        result.current =`${to_words(computer_choice)} beats ${to_words (user_choice)}. You loose!!`;
    
    
    }
    function draw (user_choice, computer_choice){
        const newScore = { ...score };
        setScore(newScore);
        result.current =`${to_words(computer_choice)} equals ${to_words (user_choice)}. its a draw !!`;
    }
    
    function rps_play(user_choice){
           const computer_choice = generate_choice();
           computer_choice_p.current= "computer choice: "+ to_words(computer_choice);
           switch(user_choice+computer_choice){
                case "rr":
                case "pp":
                case "ss":
                    draw(user_choice, computer_choice);
                    break;
    
                case "rs":
                case "pr":
                case "sp":
                    win(user_choice, computer_choice);
                    break;
    
                case "sr":
                case "rp":
                case "ps":
                    loose(user_choice, computer_choice);
                    break;
                default:
                    console.log("switch error");
           }
    
    
    }
    return(
        <>
        <header className="game_header">
            <h1>Rock Paper Scissors</h1>
        </header>
        <div className="rps_body">

                <div className="score_board">
                    <div className="badge" id="user_badge">user</div>
                    <div className="badge" id="computer_badge">comp</div>
                    <span id="user_score">{score.user}</span>:<span id="computer_score">{score.computer}</span>
                    </div>
                <div className="computer_choice">{computer_choice_p.current}</div>
            <div className="result">
                <p>{result.current}</p>
            </div>

            <div className="rps_choices">
                <div onClick={() => rps_play("r")} className="rps_choice" id="r">
                    <img className="rps_img" src={rock}/>

                </div>
                <div onClick={() => rps_play("p")}className="rps_choice" id="p">
                    <img className="rps_img" src={paper}/>

                </div>
                <div onClick={() => rps_play("s")} className="rps_choice" id="s">
                    <img className="rps_img" src={scissors}/>
                </div>

            </div>

            <p id="action_message">make a move</p>

        </div>
        </>
    )
}