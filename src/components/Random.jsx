import './Random.css'

function Random(props) {
    let randomNum = Math.floor(Math.random()* (props.max - props.min) + props.min) 
  return (
    <div className="random-container">
        <h4>Random value between {props.min} and {props.max} ={'>'} {randomNum}</h4>
    </div>
  )
}

export default Random