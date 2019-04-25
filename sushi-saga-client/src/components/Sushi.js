import React, { Fragment } from 'react'

const Sushi = (props) => {
   //console.log(props)
  return (
    <div className="sushi">
      <div className="plate"  onClick={() => props.handleSushiClick(props.sushiInstance)}>
        { props.purchasedSushi.includes(props.sushiInstance) ? null : <img src={props.sushiInstance.img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {props.sushiInstance.name} - ${props.sushiInstance.price}
      </h4>
    </div>
  )
}

export default Sushi
