import React from 'react';
const List=(props)=>
 {     
     return(<div>
         <ul className="list-group">
             {
                 props.items.map(i=>{
                     return(
                         <li className="list-group-item list-group-item-light" style={{color:"black"}} key={i.id}>{i.name}
                         <button className="btn btn-dark" style={{float:"right"}} onClick={()=>props.deltepost(i.id)}>Delete</button>
                         <button className="btn btn-dark" style={{float:"right" ,marginRight:"10px"}} onClick={()=>props.updatepost(i.id)}>Update</button>
                         </li>
                     )
                 })
             }
         </ul>
     </div>)
// return(<div key={props.items}>
// {props.items}</div>)
 }
 export default List;