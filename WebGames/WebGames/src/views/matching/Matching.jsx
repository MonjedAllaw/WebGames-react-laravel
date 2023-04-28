


import MatchingBoard from './MatchingBoard'
import { useRef } from 'react';
import './Matching.css'
import { useState } from "react"
import cheese from "../../assets/imgs/cheese.png"
import cherry from "../../assets/imgs/cherry.png"
import fries from "../../assets/imgs/fries.png"
import hamburger from "../../assets/imgs/hamburger.png"
import pizza from "../../assets/imgs/pizza.png"
import strawberry from "../../assets/imgs/strawberry.png"
import questionMark from "../../assets/imgs/questionMark1.png"
import white from "../../assets/imgs/white.jpg"
import fireworks from "../../assets/imgs/fireworks3.png"




const cardArray=[
    {
    name: 'cheese',
    img: cheese
    },
    {
    name: 'cherry',
    img: cherry
    },
    {
    name: 'fries',
    img: fries
    },
    {
    name: 'hamburger',
    img: hamburger
    },
    {
    name: 'pizza',
    img: pizza
    },
    {
    name: 'strawberry',
    img: strawberry
    },
    {
    name: 'cheese',
    img: cheese
    },
    {
    name: 'cherry',
    img: cherry
    },
    {
    name: 'fries',
    img: fries
    },
    {
    name: 'hamburger',
    img: hamburger
    },
    {
    name: 'pizza',
    img: pizza
    },
    {
    name: 'strawberry',
    img: strawberry
    },
]

cardArray.sort(()=>0.5-Math.random())


let id_chosen=[];

export default function Matching(){

    let flips=useRef(0);
    let found=useRef(0);
    let message = useRef("click two cards to match")
    const [cards,setCards]= useState(Array(12).fill({name: 'questionMark',
    img: questionMark
    }));


    function check_match (cards){
        const nextCards = cards.slice() 
        let card1= cards[id_chosen[0]];
        let card2= cards[id_chosen[1]];
       
        console.log(card1)
        console.log(card2)
 
        if(card1.img == card2.img){
            nextCards[id_chosen[0]]= {name: 'white',
            img: white
            };
            nextCards[id_chosen[1]]= {name: 'white',
            img: white
            };
             console.log(nextCards)
            setCards(nextCards)
            found.current += 1;
        }else{
            nextCards[id_chosen[0]]= {name: 'questionMark',
            img: questionMark
            };
            nextCards[id_chosen[1]]= {name: 'questionMark',
            img: questionMark
            };
           
            setCards(nextCards)
        }
        id_chosen=[];
        if(found.current == 6){
            for(let i=0; i<12;i++){

                nextCards[i]= {name: 'fireworks',
                img: fireworks
                };
        
        
            }
            message.current = "Congratulation you found them all"
        }
        
    }

    
    function handleClick(i){
        if (id_chosen.includes(i) || cards[i].img== white || cards[i].img== fireworks) {
            return;
        }
        
        flips.current = flips.current+1;
        id_chosen.push(i)
        const nextCards = cards.slice() 
        
        nextCards[i]= cardArray[i];
        setCards(nextCards)
      
        if(id_chosen.length === 2){
            setTimeout(() => check_match(nextCards), 500)
        }



    }
    
    return(
        <>
            
            <header className="game_header">
                <h1>Find The matching icon</h1>
            </header>
            <div className="matching_body">
                <div className="flips">flips: <span id="flips_nb">{flips.current}</span></div>
                <div  className="found">matched : <span id="found_nb">{found.current}</span> /6</div>

               <MatchingBoard cards={cards} handleClick={handleClick}></MatchingBoard>



                <div><p className="action_message">{message.current}</p></div>
            </div>
        </>
    )
}