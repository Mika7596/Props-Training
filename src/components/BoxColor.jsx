import React from 'react'

function BoxColor(props) {
  return (
    <div style={{padding: "50px 80px", textAlign: "center", fontFamily: "Arial", backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`, width: "50%", marginBottom: "20px"}}>rgb({props.r},{props.g},{props.b})</div>
  )
}

export default BoxColor