import React from 'react'
import './data.css'


const SaleItem = (props) => {

    return (
        <div className="Box" onClick={() => {props.select(props.id)}} id={props.id}>
                <img className="Picture"src={props.image}/>
                <p>{props.name}</p>
                <p>{props.price}</p>
        </div>
    )
}


export default SaleItem
