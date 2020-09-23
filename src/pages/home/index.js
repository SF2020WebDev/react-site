import React from 'react'

const Home = (props) => {

  const handleClick = () => {
    props.history.push('/checkout')
  }



  return(
      <div style= {{
        backgroundColor:"grey", textAlign:"center", height: 1750, alignItems:"center", justifyContent:"center", display:"flex", flexDirection:"column"
    }}>
        <h3 style={{justifyContent:"flex-start", alignItems:"center", flex:1}}>Welcome to the store!</h3>
        <button onClick={handleClick} style={{
          backgroundColor:"gold",
          color:"blue",
          borderRadius:100,
          height:100,
          width: 100,
          border: "none",
          flexDirection:"row-reverse",
          position:"relative",
          justifyContent:"flex-end",
          alignSelf:"flex-end",
          marginRight:200,
      }}
        >Check Out</button>
      <div style={{display:"flex", flexDirection:"row"}}>
        <div style={{
                flex: 1,
                alignItems:"center",
                alignContent:"center",
                backgroundColor:"orange", 
                justifyContent:"center",
                alignSelf:"flex-start",
                margin:50,
                borderRadius:25,
                width:200,
                height:200}}>
                  <img style={{
                    height:100,
                    width:100,
                    paddingTop:5,
                  }} src={'https://www.ikea.com/gb/en/images/products/smycka-artificial-flower-rose-red__0903311_PE596728_S5.JPG'} />
                  <p>Red Rose</p>
                  <p>Price: £5.99</p>
        </div>

        <div style={{
                flex: 1,
                alignItems:"center",
                alignContent:"center",
                backgroundColor:"orange", 
                justifyContent:"center",
                alignSelf:"center",
                margin:50,
                borderRadius:25,
                width:200,
                height:200}}>
                  <img style={{
                    height:100,
                    width:100,
                    paddingTop:5,
                  }} src="https://images.squarespace-cdn.com/content/v1/584154245016e1ca1b9b367f/1581948776537-58NN0HYE4LTB84TIACXX/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/AC2EC879-18E9-43B7-9761-BAA9FA81013A?format=2500w"/>
                  <p>White Rose</p>
                  <p>Price £5.99</p>
        </div>

        <div style={{
                flex: 1,
                alignItems:"center",
                alignContent:"center",
                backgroundColor:"orange", 
                justifyContent:"center",
                alignSelf:"flex-end",
                margin:50,
                borderRadius:25,
                width:200,
                height:200}}>
                  <img style={{
                    height:100,
                    width:100,
                    paddingTop:5,
                  }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSdKel-Oa0SuOCVU7hbx00nC6peKF_BDbPT6rj_v1xV46gTx8q6FWvQ-Hp0vd0UNN0c1FzN22z&usqp=CAc" />
                  <p>Tiger Lily</p>
                  <p>Price: £5.99</p>
        </div>
        </div>
        <br/>

        <div style={{display:"flex", flexDirection:"row"}}>
        <div style={{
                flex: 1,
                alignItems:"center",
                alignContent:"center",
                backgroundColor:"orange", 
                justifyContent:"center",
                alignSelf:"flex-start",
                margin:50,
                borderRadius:25,
                width:200,
                height:200}}>
                  <img style={{
                    height:100,
                    width:100,
                    paddingTop:5,
                  }} src="https://www.flower.style/assets/images/NoCrop_536/9538880294234e62b05b6636893d27a5.jpg" />
                  <p>Chrysanthemum</p>
                  <p>Price: £4.99</p>

        </div>

        <div style={{
                flex: 1,
                alignItems:"center",
                alignContent:"center",
                backgroundColor:"orange", 
                justifyContent:"center",
                alignSelf:"center",
                margin:50,
                borderRadius:25,
                width:200,
                height:200}}>
                  <img style={{
                    height:100,
                    width:100,
                    paddingTop:5,
                  }} src="https://previews.123rf.com/images/sergeyit/sergeyit1102/sergeyit110200019/8879261-carnation-flower-closeup-isolated-on-white.jpg" />
                  <p>Carnation</p>
                  <p>Price: £4.99</p>

        </div>

        <div style={{
                flex: 1,
                alignItems:"center",
                alignContent:"center",
                backgroundColor:"orange", 
                justifyContent:"center",
                alignSelf:"flex-end",
                margin:50,
                borderRadius:25,
                width:200,
                height:200}}>
                  <img style={{
                    height:100,
                    width:100,
                    paddingTop:5,
                  }} src="https://us.123rf.com/450wm/bk2kz/bk2kz1908/bk2kz190800001/129311633-motley-dahlia-flower-isolated-on-a-white-background.jpg?ver=6" />
                  <p>Dahlia</p>
                  <p>Price: £4.99</p>
        </div>
        </div>
          <br />

        <div style={{display:"flex", flexDirection:"row"}}>
        <div style={{
                flex: 1,
                alignItems:"center",
                alignContent:"center",
                backgroundColor:"orange", 
                justifyContent:"center",
                alignSelf:"flex-start",
                margin:50,
                borderRadius:25,
                width:200,
                height:200}}>
                  <img style={{
                    height:100,
                    width:100,
                    paddingTop:5,
                  }} src="https://thumbs.dreamstime.com/b/magnolia-flowers-white-background-32217534.jpg" />
                  <p>Magnolia</p>
                  <p>Price: £3.99</p>

        </div>

        <div style={{
                flex: 1,
                alignItems:"center",
                alignContent:"center",
                backgroundColor:"orange", 
                justifyContent:"center",
                alignSelf:"center",
                margin:50,
                borderRadius:25,
                width:200,
                height:200}}>
                  <img style={{
                    height:100,
                    width:100,
                    paddingTop:5,
                  }} src="https://i.pinimg.com/736x/1c/81/d4/1c81d46dcb8b85e9a8f280550ed036ec.jpg" />
                  <p>Iris</p>
                  <p>Price: £3.99</p>

        </div>

        <div style={{
                flex: 1,
                alignItems:"center",
                alignContent:"center",
                backgroundColor:"orange", 
                justifyContent:"center",
                alignSelf:"flex-end",
                margin:50,
                borderRadius:25,
                width:200,
                height:200}}>
                  <img style={{
                    height:100,
                    width:100,
                    paddingTop:5,
                  }} src="https://t4.ftcdn.net/jpg/00/90/31/97/240_F_90319705_KOFtfQLVJRWyiXyZqNgHSlmbBIUP31BE.jpg" />
                  <p>Jasmine</p>
                  <p>Price: £3.99</p>
        </div>
        </div>
          <br />

        <div style={{display:"flex", flexDirection:"row"}}>  
        <div style={{
                flex: 1,
                alignItems:"center",
                alignContent:"center",
                backgroundColor:"orange", 
                justifyContent:"center",
                alignSelf:"flex-start",
                margin:50,
                borderRadius:25,
                width:200,
                height:200}}>
                  <img style={{
                    height:100,
                    width:100,
                    paddingTop:5,
                  }} src="https://envato-shoebox-0.imgix.net/a1ed/4aa3-96c5-4b85-9e82-3541c76782b2/DSC_0689a.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=fd796825bbfa47de64ae04087c6fff55" />
                  <p>Lavender</p>
                  <p>Price: £2.99</p>

        </div>

        <div style={{
                flex: 1,
                alignItems:"center",
                alignContent:"center",
                backgroundColor:"orange", 
                justifyContent:"center",
                alignSelf:"center",
                margin:50,
                borderRadius:25,
                width:200,
                height:200}}>
                  <img style={{
                    height:100,
                    width:100,
                    paddingTop:5,
                  }} src="https://img.freepik.com/free-photo/pink-peony-isolated-white-background_14223-132.jpg?size=626&ext=jpg" />
                  <p>Peony</p>
                  <p>Price: £2.99</p>


        </div>

        <div style={{
                flex: 1,
                alignItems:"center",
                alignContent:"center",
                backgroundColor:"orange", 
                justifyContent:"center",
                alignSelf:"flex-end",
                margin:50,
                borderRadius:25,
                width:200,
                height:200}}>
                  <img style={{
                    height:100,
                    width:100,
                    paddingTop:5,
                  }} src="https://previews.123rf.com/images/dizolator/dizolator1707/dizolator170700116/82255105-bright-pink-and-white-petunia-flower-isolated-on-white-background.jpg" />
                  <p>Petunia</p>
                  <p>Price: £2.99</p>
                  
        </div>
        </div>
        <br />

        <div style={{display:"flex", flexDirection:"row"}}>
        <div style={{
                flex: 1,
                alignItems:"center",
                alignContent:"center",
                backgroundColor:"orange", 
                justifyContent:"center",
                alignSelf:"flex-start",
                margin:50,
                borderRadius:25,
                width:200,
                height:200}}>
                  <img style={{
                    height:100,
                    width:100,
                    paddingTop:5,
                  }} src="https://previews.123rf.com/images/belchonock/belchonock1803/belchonock180360738/97828079-beautiful-freesia-flowers-on-white-background.jpg" />
                  <p>Freesia</p>
                  <p>Price: £1.99</p>

        </div>

        <div style={{
                flex: 1,
                alignItems:"center",
                alignContent:"center",
                backgroundColor:"orange", 
                justifyContent:"center",
                alignSelf:"center",
                margin:50,
                borderRadius:25,
                width:200,
                height:200}}>
                  <img style={{
                    height:100,
                    width:100,
                    paddingTop:5,
                  }} src="https://as1.ftcdn.net/jpg/01/89/35/42/220_F_189354246_R3rJUguQqt7KnUoWgmjog9rpVYuppxI6.jpg" />
                  <p>Daisy Gerbera</p>
                  <p>Price: £1.99</p>

        </div>

        <div style={{
                flex: 1,
                alignItems:"center",
                alignContent:"center",
                backgroundColor:"orange", 
                justifyContent:"center",
                alignSelf:"flex-end",
                margin:50,
                borderRadius:25,
                width:200,
                height:200}}>
                  <img style={{
                    height:100,
                    width:100,
                    paddingTop:5,
                  }} src="https://media.istockphoto.com/photos/bluebell-on-white-background-picture-id488833695" />
                  <p>Bluebell</p>
                  <p>Price: £1.99</p>
        </div>
        </div>

      </div>
  )
}

export default Home