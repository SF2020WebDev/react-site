import React from 'react'
import { useParams } from 'react-router-dom'
import SaleItem from '../../components/data'
import Basket from '../../context/basket'
import ReactDOM from 'react-dom'
import './item.css'

const Item = (props) => {

    const handleClick = () => {
        props.history.push('/checkout')
      }

    const homeClick = () => {
        props.history.push('/home')
      }

    const addToBasket = () => {
        function add () {
            ReactDOM.render (
                <Basket occupied={true}>
                {specific.id}
                {specific.name} 
                {specific.price}
                </Basket>
            )
        }
    }


    const ItemsList = [{image1:"https://www.ikea.com/gb/en/images/products/smycka-artificial-flower-rose-red__0903311_PE596728_S5.JPG", image2:"https://www.fiordalisa.ch/wp-content/uploads/2017/12/IMG_4605.jpg", image3:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTShThwef8LHLyXjpCKsuQjPGhnH17A0h5gpA&usqp=CAU", name:"Red Rose", color1: "Traditional Red", color2:"Deep Pink", color3:"Purple", price: "£5.99", id:1},
      {image1:"https://images.squarespace-cdn.com/content/v1/584154245016e1ca1b9b367f/1581948776537-58NN0HYE4LTB84TIACXX/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/AC2EC879-18E9-43B7-9761-BAA9FA81013A?format=2500w", image2:"https://images-na.ssl-images-amazon.com/images/I/91WCFjZlx7L._AC_SL1500_.jpg", image3:"https://images.immediate.co.uk/production/volatile/sites/10/2018/05/2048x1365-Yellow-roses-LI3130949-c7d988a.jpg?quality=45&resize=960,640", name: "White Rose", color1: "Traditional White", color2: "Light Pink", color3:"White and Yellow", price:"£5.99", id:2},
      {image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSdKel-Oa0SuOCVU7hbx00nC6peKF_BDbPT6rj_v1xV46gTx8q6FWvQ-Hp0vd0UNN0c1FzN22z&usqp=CAc", image2:"https://live.staticflickr.com/7595/16602514353_70ca564d03_z.jpg", image3:"https://www.withycombefair.co.uk/ekmps/shops/57fb22/images/small-white-tiger-lily-5386-179-p.jpg", name:"Tiger Lily", color1:"Traditional Orange", color2:"Purple", color3:"White", price:"£5.99", id:3},
      {image1:"https://www.flower.style/assets/images/NoCrop_536/9538880294234e62b05b6636893d27a5.jpg", image2:"https://upload.wikimedia.org/wikipedia/commons/c/c5/Chrysanthemum_November_2007_Osaka_Japan.jpg", image3:"https://i.pinimg.com/originals/78/57/a6/7857a618520f74536b994f5ec5e6d453.png", name:"Chrysanthemum", color1:"Pink", color2:"Yellow", color3:"red", price:"£4.99", id:4},
      {image1:"https://previews.123rf.com/images/sergeyit/sergeyit1102/sergeyit110200019/8879261-carnation-flower-closeup-isolated-on-white.jpg", image2:"https://i.pinimg.com/originals/2e/d1/66/2ed16690fd553f2b93b326b517297f40.jpg", image3:"https://www.barnflorist.co.uk/wp-content/uploads/2018/12/carnation_bloom_darkred_close2.jpg", name:"Carnation", color1:"Red and White", color2:"Pink", color3:"Red", price:"£4.99", id:5},
      {image1:"https://us.123rf.com/450wm/bk2kz/bk2kz1908/bk2kz190800001/129311633-motley-dahlia-flower-isolated-on-a-white-background.jpg?ver=6", image2:"https://images-na.ssl-images-amazon.com/images/I/51jV8e%2BXF2L._AC_.jpg", image3:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcX4FhtU_IEuO-NrlSIUNy8e5OgZ6awwn9mXCsJutQYga1XQf29LpRbbTMY6A&usqp=CAc", name:"Dahlia", color1:"Red", color2:"Purple", color3:"White", price: "£4.99", id:6},
      {image1:"https://thumbs.dreamstime.com/b/magnolia-flowers-white-background-32217534.jpg", image2:"https://lh3.googleusercontent.com/proxy/9HBUkZPAAwtnKwQ5jbHKPK9DZGjVdWddy6RgwaoTUCiFmIqxWIpGjcOko9ik3noal-QtEMXAYoZr-vy1dxuSSM5PR7vG6jerOyuERaopHiGs7LlqXA2yz3SulgmGVMsTUpfb0PU0_Ewk5Xumpro", image3:"https://i.pinimg.com/originals/3f/97/98/3f9798ca59ee6b1b531ab7aec69105c0.jpg", name: "Magnolia", color1:"Pink", color2:"Red", color3:"White", price:"£3.99", id:7},
      {image1:"https://i.pinimg.com/736x/1c/81/d4/1c81d46dcb8b85e9a8f280550ed036ec.jpg", image2:"https://img.crocdn.co.uk/images/products2/pl/00/00/00/30/pl0000003081_card3_lg.jpg", image3:"https://cdn.shopify.com/s/files/1/1419/7120/products/Siberian_Iris_Butter_Sugar_DeG_jpg.jpg?v=1571439570", name: "Iris", color1:"Purple", color2:"White", color3:"Yellow", price: "£3.99", id:8},
      {image1:"https://t4.ftcdn.net/jpg/00/90/31/97/240_F_90319705_KOFtfQLVJRWyiXyZqNgHSlmbBIUP31BE.jpg", image2:"https://cdn.shopify.com/s/files/1/0557/0657/products/Jasmine-nudiflorum.jpg?v=1553043151", image3:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhubxCZtGJCtK5or5fcTRt6AotXxVU3ASvzg&usqp=CAU", name:"Jasmine", color1:"White", color2:"Yellow", color3:"Pink", price:"£3.99", id:9},
      {image1:"https://envato-shoebox-0.imgix.net/a1ed/4aa3-96c5-4b85-9e82-3541c76782b2/DSC_0689a.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=fd796825bbfa47de64ae04087c6fff55", image2:"https://i.pinimg.com/236x/8c/d9/0b/8cd90b0b0c190944602d52dbfa563189--lavender-fields-flower-power.jpg", image3:"https://www.gardenia.net/storage/app/public/uploads/images/31126.jpg", name: "Lavender", color1:"Purple", color2:"Blue", color3:"White", price:"£2.99", id:10},
      {image1:"https://img.freepik.com/free-photo/pink-peony-isolated-white-background_14223-132.jpg?size=626&ext=jpg", image2:"https://www.gardenia.net/storage/app/public/uploads/images/detail/PL100585Optimized.jpg", image3:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsGjIbHlJC2ru5a1YEDaxs3RQrKTIOc5Ok9g&usqp=CAU", name: "Peony", color1:"Pink", color2:"Red", color3:"White", price:"£2.99", id:11},
      {image1:"https://previews.123rf.com/images/dizolator/dizolator1707/dizolator170700116/82255105-bright-pink-and-white-petunia-flower-isolated-on-white-background.jpg", image2:"https://lh3.googleusercontent.com/proxy/g4GJT3dYPsIGoN_cfKIuYVIvBClYFIfzodj9s-jHSXclLOfl5epw9MBvRxnUarvUv6J1CZk2D4cVbh6BY4w9kuSP4o1ubc99LZ5_MmMyT1Q2hqhA_sM", image3:"https://i.redd.it/velvorv7kot21.jpg", name:"Petunia", color1:"White and Red", color2:"Blue", color3:"Galaxy", price: "2.99", id:12},
      {image1:"https://previews.123rf.com/images/belchonock/belchonock1803/belchonock180360738/97828079-beautiful-freesia-flowers-on-white-background.jpg", image2:"https://www.gardenia.net/storage/app/public/uploads/images/detail/OYrG8Cmg4dXqclG386tBl1nKd86IT73dsWlyobDa.jpeg", image3:"https://image.freepik.com/free-photo/white-freesia-flower-blue-background_90258-84.jpg", name:"Freesia", color1:"Yellow", color2:"Purple", color3:"White", price: "£1.99", id:13},
      {image1:"https://as1.ftcdn.net/jpg/01/89/35/42/220_F_189354246_R3rJUguQqt7KnUoWgmjog9rpVYuppxI6.jpg", image2:"https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/271ad621b6c026fb7f8127a90b4bc6ab/2/5/2526_gerbera_daisy.sunshine.cut_grb_nul_yel_prd_001.jpg", image3:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7pX-xFXHhqExlBPFIm_bN76L5IzDsK2K_rg&usqp=CAU", name: "Daisy Gerbera", color1:"Red", color2:"Yellow", color3:"Purple", price: "£1.99", id:14},
      {image1:"https://media.istockphoto.com/photos/bluebell-on-white-background-picture-id488833695", image2:"https://imgs.photo4me.com/ipapi.ashx?product=canvas&ownerid=4819&PictureID=87754&edge=cloned", image3:"https://www.first-nature.com/flowers/images/hyacinthoides-non-scripta2.jpg", name: "Bluebell", color1:"Blue", color2:"Pink", color3:"White", price: "£1.99", id:15}
]

    const _ = require('lodash')
    const random = _.sampleSize(ItemsList, 6)
    console.log('sampleSize()', random)

    const randomMap = () => {
        return(
            random.map((random) => {
                return <SaleItem image1={random.image1}
                name={random.name} price={random.price} 
                id={random.id} />
            })
        )
    }

    const { id } = useParams();
    console.log(useParams(id))
    const specific = _.find(ItemsList, {id:parseInt(id)})

    return (
        <div className="container2">
                <button className="checkout" onClick={handleClick}>Check Out</button>
                <button className="home" onClick={homeClick}>Home Page</button>
            <br />
            <br />

            <div className="box2">
                <image id="theImage" src={specific.image1}/>
                <script>
                    const colourSelect = document.getElementById("colour-select");
                    const imageChoice = document.getElementById("theImage");

                    colourSelect.addEventListener('input',() => theImage.src = imageChoice.value);
                </script>
                
                <SaleItem className="item" id={specific.id} name={specific.name} price={specific.price}/>
                <form >
                    <label>
                          <select id="colour-select" className="options" onChange={(e) => e.target.value}>
                              <option value={specific.image1}>{specific.color1}</option>
                              <option value={specific.image2}>{specific.color2}</option>
                              <option value={specific.image3}>{specific.color3}</option>
                          </select>
                    </label>
                </form>
                <button className="add" onClick={addToBasket}>Add To Basket</button>
                <br />
            </div>

        {randomMap}
            

        </div>
        
    )
}


export default Item