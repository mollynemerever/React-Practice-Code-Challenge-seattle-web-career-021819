import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  //console.log(props)
  return (
    <Fragment>
      <div className="belt">
      {props.sushis.map((sushi, index) => {
        return <Sushi key={index} sushiInstance={sushi} handleSushiClick={props.handleSushiClick} purchasedSushi={props.purchasedSushi}/>
      })
      }

         <MoreButton onClick={props.onClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
