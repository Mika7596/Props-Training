import './DriverCard.css'

function DriverCard(props) {
  let filledStars = Math.round(Number(props.rating));
  let emptyStars = 5 - filledStars;

  return (
    <div className="driver-card-container">
      <div className="driver-img-container" style={{backgroundImage: `url(${props.img})`, backgroundSize: "135px 130px", backgroundPosition: "center"}}>
        {/* <img src={props.img} alt="" /> */}
      </div>
      <div>
        <h3>{props.name}</h3>
        <h2>{"★".repeat(filledStars)}{"☆".repeat(emptyStars)}</h2>
        <p>{props.car.model} - {props.car.licensePlate}</p>
      </div>
    </div>
  );
} 

export default DriverCard;
