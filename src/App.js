import React,{useState} from "react"

const App=()=>{

  const[data,setdata]=useState(true)
  const clickhandler=()=>{
    setdata(!data)
  }
  return(
    <div style={{textAlign:"center",fontSize:"20px"}}>
      <button onClick={clickhandler}>{data?"hide":"show"}</button>
    {data&&<p>Here's an example of a paragraph: As the sun began to set over the horizon,<br></br>
       casting long shadows across the bustling streets of Bengaluru, a sense of <br/>
       tranquility washed over the city. The vibrant energy of the day gradually <br/>
        subsided, replaced by the soft glow of streetlights and the gentle hum of
         traffic. </p>}
    </div>
  )
}
export default App