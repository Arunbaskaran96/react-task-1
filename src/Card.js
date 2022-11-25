import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({card}){
    return(
        <div className="col-md-3 content">
            <p className={`plan ${card.highlight ? "font" : " "}`}>{card.plan}</p>
            <p className="cost"><span>{card.dollar}</span>/month</p>
            {card.present.map((list)=>{
                return(
                    <p className={`list ${list.highlight ? "font" : " "} ${list.weight ? "trans": " "}`} ><FontAwesomeIcon icon={list.weight ? faXmark : faCheck} /> {list.title}</p>
                )
            })}
            <div className="bn">
            <button className="bttn">BUTTON</button>
            </div>
        </div>
    )
}


export default Card;