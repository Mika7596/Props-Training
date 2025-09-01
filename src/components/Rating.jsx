import React from 'react'

function Rating(props) {
    let filledStars = Math.floor(Number(props.children));
    let emptyStars = 5 - filledStars
  return (
    <div style={{margin: "10px 25px"}}>{"★".repeat(filledStars)}{"☆".repeat(emptyStars)}</div>
  )
}

export default Rating