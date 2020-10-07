import React from 'react'
import './data.css'

const SaleItem = (props) => {

    return (
        <div className="Box" onClick={() => {props.select(props.id)}} id={props.id} 
        color1={props.color1} image1={props.image1} 
        color2={props.color2} image2={props.image2}
        color3={props.color3} image3={props.image3}>
                <img className="Picture" src = {props.image}/>
                <p>{props.name}</p>
                <p>{props.price}</p>
        </div>
    )
}

export default SaleItem


