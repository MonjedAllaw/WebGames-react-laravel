import MatchingCard from "./MatchingCard"

export default function MatchingBoard({cards,handleClick }){

    
    return(
        <>
         <div id="grid" >
            { cards.map((card,i)=>{return <MatchingCard card={card} key={i} handleClick={() => handleClick(i)}></MatchingCard>})}
         </div>
        </>
    )
}