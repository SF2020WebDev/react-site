import React from 'react'
import './index.css'
import List from '../../components/data'

const Home = (props) => {

  const handleClick = () => {
    props.history.push('/checkout')
  }

  return(
      <div className="container">
        <h3 className="title">Welcome to the store!</h3>
        <button className="button" onClick={handleClick}>Check Out</button>
      <br />
      <br />
      <div className="row">
        <div className="box">
                  {List()}
        </div>

      </div>
        <br/>

      </div>
  )
}

export default Home