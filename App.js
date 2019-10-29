import React,{useState,useEffect} from 'react';
import Form from './Form';
import List from './List';
import axios from 'axios'
import logo from './img1.png';


const App=()=>{
  const[title,settitle]=useState([]);
  const getmethod=()=>{
    axios.get("http://localhost:8000/fbpost")
    .then(result=>{
      // console.log(result)
      settitle(result.data)
      console.log("hi")
    })
  }
  useEffect(()=>{
    getmethod()
},[])
  const additem=element=>{
    if(element.length===0){
      alert("Type somthing..")
    }else{
      axios.post("http://localhost:8000/fbpost",{name:element}).then(success=>{
        //console.log(success)
        settitle([...title,success.data])

      })
    }
  }
//   const deltepost=(deleteitems)=>{
//     axios.delete("http://localhost:8000/fbpost/"+deleteitems)
// }
  const deltepost=(deleteitems)=>{
         axios.delete("http://localhost:8000/fbpost/"+deleteitems).then(success=>{
           if(success.status===200 && success.statusText==="OK"){
            //  settitle([title.filter(i=>i.id===deleteitems? false: true)])
            settitle(title.filter(i=>i.id!==deleteitems))
           }
         })  
     }
     const updatepost=(updateid)=>{  
       
      
      var updatetext=prompt("enter your rename");
       axios.put("http://localhost:8000/fbpost/"+updateid,{name:updatetext})
       .then(success=>{
         
        //  debugger
        if(success.status===200 && success.statusText==="OK"){
          // const a = 
          // console.log('dfghjk', a)
          settitle(title.map(i=> i.id === updateid ? {...i, name: updatetext} : i ))
        }
      }) 
      //  console.log(title)
     }
     
  return(
    <div style={{background:"lightgrey",margin:"30px"}}>
      <div style={{background:"blue"}}><img src={logo} alt="Fb-logo" width="150" height="150"/>
      <span className="float-right btn" style={{fontSize:"50px",color:"white",marginTop:"20px"}}><b>Facebook</b></span></div>
      <Form additem={additem}/>
      <List items={title} deltepost={deltepost} updatepost={updatepost}/>
      </div>
  );
}
export default App;
