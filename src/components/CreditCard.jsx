import "./CreditCard.css";
import Visa from "../assets/images/visa.png";
import Master from "../assets/images/master-card.svg";
import dice1 from '../assets/images/dice1.png';
import diceEmpty from '../assets/images/dice-empty.png'

function CreditCard(props) {
    let month;
    if (props.expirationMonth.toString().length === 1){
        month = "0" + props.expirationMonth
    } else{
        month = props.expirationMonth
    }
    let cardNum = props.number.slice(12, 17)
    const filteredPart = (
      <div><img src={dice1} alt="" style={{maxWidth: "15px"}}/><img src={dice1} alt="" style={{maxWidth: "15px"}}/><img src={dice1} alt="" style={{maxWidth: "15px"}}/><img src={dice1} alt="" style={{maxWidth: "15px"}}/><img src={diceEmpty} alt="" style={{maxWidth: "15px"}}/></div>
    )

  return (
    <div
      className="credit-card-container"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className="credit-img-container">
        <div><img src={props.type === "Visa" ? Visa : Master} alt="" /></div>
        
      </div>
      <h3 style={{display: "flex"}}>{filteredPart}{filteredPart}{filteredPart}{cardNum}</h3>
      <p style={{display: "flex"}}><span>Expires  {month}/{props.expirationYear}</span> <p style={{width: "30px"}}></p><span>{props.bank}</span></p>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
