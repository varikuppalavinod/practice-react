import "./App.css"
import React,{useState} from "react"

const App=()=>{
  let arr=[{id:1,name:"vinod",village:"chinthakuntla",city:"kmp"},
    {id:2,name:"ram",village:"chinthak",city:"kmp"},
    {id:3,name:"ravi",village:"ap",city:"kmp"},
    {id:4,name:"arun",village:"ts",city:"dvk"},
    {id:5,name:"raju",village:"dvk",city:"nlg"},
    {id:6,name:"anil",village:"ngm",city:"rmp"},
    {id:7,name:"harish",village:"chk",city:"rmp"},
    {id:8,name:"akul",village:"pervala",city:"kmp"},
    {id:9,name:"ajay",village:"chinthakuntla",city:"kkk"}]

    const[data,setdata]=useState(arr)

    const deletehandler=(comingid)=>{
      console.log(comingid)
      const filterdata=data.filter((eachitem)=>{
        return eachitem.id!==comingid
      })
      setdata(filterdata)
    }
return(
  <div>
  <div>welcome to react</div>
  <ul className="container">
    {data.map((eachitem)=>{
      const{id,name,village,city}=eachitem
      return<li key={id} className="libox">
        <div>My name is :{name}</div>
        <div>My village name is:{village}</div>
        <div>My city name is :{city}</div>
        <button onClick={(()=>deletehandler(id))}>Delete</button>
      </li>
    })}
  </ul>

  </div>
)
}
export default App