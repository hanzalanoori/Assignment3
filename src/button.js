function Button(props){
    return <button className="btn btn-sm btn-primary" onClick={props.click}>{props.value}</button>
}

function Input(props){
    return <input placeholder="Enter Value" />
}

export {Button , Input}