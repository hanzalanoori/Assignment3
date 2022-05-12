import { Button } from "./button";
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props){
 
    return <>
    <div className="col-3">
    <div className="card">
     <div className="card-body">
        <img className="img" src={props.src}/>
        <h3>{props.title}</h3>
        <p>PKR : <b>{props.price}</b></p>
        <p>Quantity : <b>{props.quantity}</b></p>
        <p>{props.shortDesc}</p>
        <Button  value="Add to cart" click={props.action} /> 
     </div>
    </div>
   </div>
    </>

}


export default Card;