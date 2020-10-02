import React from 'react'
import { useParams } from 'react-router-dom'
import SaleItem from '../../components/data'
import ItemDetails from '../../context/item'
import './item.css'

const Item = (props) => {

    const handleClick = (props) => {
        props.history.push('/checkout')
      }

    const homeClick = (props) => {
        props.history.push('/home')
      }

    const itemSelect = ( id ) => {
        props.history.push(`./item/${id}`)
      }

    const ItemsList = [{image:"https://www.ikea.com/gb/en/images/products/smycka-artificial-flower-rose-red__0903311_PE596728_S5.JPG", name:"Red Rose", price: "£5.99", id:1},
      {image:"https://images.squarespace-cdn.com/content/v1/584154245016e1ca1b9b367f/1581948776537-58NN0HYE4LTB84TIACXX/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/AC2EC879-18E9-43B7-9761-BAA9FA81013A?format=2500w", name: "White Rose", price:"£5.99", id:2},
      {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSdKel-Oa0SuOCVU7hbx00nC6peKF_BDbPT6rj_v1xV46gTx8q6FWvQ-Hp0vd0UNN0c1FzN22z&usqp=CAc", name:"Tiger Lily", price:"£5.99", id:3},
      {image:"https://www.flower.style/assets/images/NoCrop_536/9538880294234e62b05b6636893d27a5.jpg", name:"Chrysanthemum", price:"£4.99", id:4},
      {image:"https://previews.123rf.com/images/sergeyit/sergeyit1102/sergeyit110200019/8879261-carnation-flower-closeup-isolated-on-white.jpg", name:"Carnation", price:"£4.99", id:5},
      {image:"https://us.123rf.com/450wm/bk2kz/bk2kz1908/bk2kz190800001/129311633-motley-dahlia-flower-isolated-on-a-white-background.jpg?ver=6", name:"Dahlia", price: "£4.99", id:6},
      {image:"https://thumbs.dreamstime.com/b/magnolia-flowers-white-background-32217534.jpg", name: "Magnolia", price:"£3.99", id:7},
      {image:"https://i.pinimg.com/736x/1c/81/d4/1c81d46dcb8b85e9a8f280550ed036ec.jpg", name: "Iris", price: "£3.99", id:8},
      {image:"https://t4.ftcdn.net/jpg/00/90/31/97/240_F_90319705_KOFtfQLVJRWyiXyZqNgHSlmbBIUP31BE.jpg", name:"Jasmine", price:"£3.99", id:9},
      {image:"https://envato-shoebox-0.imgix.net/a1ed/4aa3-96c5-4b85-9e82-3541c76782b2/DSC_0689a.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=fd796825bbfa47de64ae04087c6fff55", name: "Lavender", price:"£2.99", id:10},
      {image:"https://img.freepik.com/free-photo/pink-peony-isolated-white-background_14223-132.jpg?size=626&ext=jpg", name: "Peony", price:"£2.99", id:11},
      {image:"https://previews.123rf.com/images/dizolator/dizolator1707/dizolator170700116/82255105-bright-pink-and-white-petunia-flower-isolated-on-white-background.jpg", name:"Petunia", price: "2.99", id:12},
      {image:"https://previews.123rf.com/images/belchonock/belchonock1803/belchonock180360738/97828079-beautiful-freesia-flowers-on-white-background.jpg", name:"Freesia", price: "£1.99", id:13},
      {image:"https://as1.ftcdn.net/jpg/01/89/35/42/220_F_189354246_R3rJUguQqt7KnUoWgmjog9rpVYuppxI6.jpg", name: "Daisy Gerbera", price: "£1.99", id:14},
      {image:"https://media.istockphoto.com/photos/bluebell-on-white-background-picture-id488833695", name: "Bluebell", price: "£1.99", id:15}
]

    const _ = require('lodash')
    const random = _.sampleSize(ItemsList, 6)
    console.log(random)

    const randomMap = () => {
        return(
            random.map((random) => {
                return <randomItem image={ItemsList.image} select={itemSelect}
                name={ItemsList.name} price={ItemsList.price} 
                id={ItemsList.id} />
            })
        )
    }

    const { id } = useParams();
    console.log(useParams(id))
    const specific = _.find(ItemsList, {id:id})

    return (
        <div className="container2">
                <button className="checkout" onClick={handleClick}>Check Out</button>
                <button className="home" onClick={homeClick}>Home Page</button>
            <br />
            <br />

            <div className="box2">
                <ItemDetails>{specific}</ItemDetails>
                <br />
                <button className="add">Add To Basket</button>
            </div>

        {randomMap()}
            

        </div>
        

        
    )
}

export default Item