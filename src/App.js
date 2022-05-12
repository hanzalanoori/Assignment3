import logo from './logo.svg';
import './App.css';
import {Button , Input } from './button';
import Card from './card';
import { useState } from 'react';

function App() {
  
  const [arr,setArray] = useState([
   
    {
      id: "hdmdu0t80yjkfqselfc",
      title: "shoes",
      price: 399.99,
      quantity: 10,
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description: "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      id: "3dc7fiyzlfmkfqseqam",
      title: "bags",
      price: 299.99,
      quantity: 10,
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description: "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
      image: 'https://cdn.pixabay.com/photo/2016/11/23/18/12/bag-1854148_960_720.jpg',
    },
    {
      id: "aoe8wvdxvrkfqsew67",
      title: "shirts",
      price: 149.99,
      quantity: 10,
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description: "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
      image: 'https://media.istockphoto.com/photos/white-tshirt-on-black-picture-id638736262?k=20&m=638736262&s=612x612&w=0&h=CyWd62LG9Xvl7e29JXhbIng2C3_cevKrjwxpEOGdfkQ=',
    },
    {
      id: "bmfrurdkswtkfqsf15j",
      title: "shorts",
      price: 109.99,
      quantity: 10,
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description: "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
      image: 'https://t4.ftcdn.net/jpg/03/11/32/97/360_F_311329748_nBegJ0tVJHABKn1Nr8RmdHXVZczD83Km.jpg',
    },
  ])

  let addToCart = (xyz) =>{
   alert(`
    Title : ${xyz.title} 
    Price : ${xyz.price} 
    Quantity: ${xyz.quantity} 
    ShortDesc : ${xyz.shortDesc}
    Description :  ${xyz.description} 
    `)
  } 

  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
  <div className="row">
   

    {arr.map((xyz) => (<Card title={xyz.title} price={xyz.price}  quantity={xyz.quantity} shortDesc={xyz.shortDesc} description={xyz.description} action={() => addToCart(xyz)} src={xyz.image} />))}
    </div> </div> 
      </header>
    </div>
  );
}

export default App;
