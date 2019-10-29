import React from 'react';
const Dynamictext=(props)=>
 {
     const Funct=()=>{
        //  var text1=React.createElement("button",{id:"id1"},"click");
        //  document.getElementById("id1").appendChild(text1);
         var updatetext=prompt("enter value");
         document.write(updatetext);
        // document.getElementById("id1").innerHTML="click";
     }
     
     return(<div id="id1"><button onClick={Funct}>Create Textbox</button></div>)
 }
 export default Dynamictext;