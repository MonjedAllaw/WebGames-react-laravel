
export default function MatchingCard({card,handleClick}){
    return(
        <img src={card.img} onClick={handleClick} alt={card.name}></img>
    )

    
}