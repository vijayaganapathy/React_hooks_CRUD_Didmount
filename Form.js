import React,{useState} from 'react';

function Form(props)
 {
   
const handletitle=(event)=>{
settitle(event.target.value)
}
const Submit=(e)=>{
    props.additem(title);
    settitle("");
    //console.log(title);
}
 
const[title,settitle]=useState("");
return(<div style={{margin:"10px"}}><span></span><input type="textarea" className="form-control form-control-lg" value={title} placeholder="type here.." onChange={handletitle}/>
<button  className="btn btn-warning btn-lg btn-block"  onClick={Submit} style={{marginTop:"10px"}}>Post</button>
</div>)

}


export default Form;
