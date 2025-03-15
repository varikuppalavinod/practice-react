import React,{useState} from "react"

const App=()=>{
const[name,setname]=useState("")
const[email,setmail]=useState("")
const[password,setpassword]=useState("")
 
  const namechangehandler=(e)=>{
    setname(e.target.value)
  }
  const mailchangehandler=(e)=>{
    setmail(e.target.value)
  }
  const passwordchangehandler=(e)=>{
      setpassword(e.target.value)
  }
  const submithandler=(e)=>{
    e.preventDefault()
   
    const obj={
      name:name,
      email:email,
      password:password
    }
    console.log(obj)

  }
  return(
    <div style={{textAlign:"center",marginTop:"5rem"}}>
      <form onSubmit={submithandler}>
        <div>
        <input type="text" name="name" id="name" placeholder="enter a name"value={name}
        onChange={namechangehandler}></input>
        </div>
        <div>
        <input type="email" name="email" id="email" placeholder="enter email" value={email}
        onChange={mailchangehandler}></input>
        </div>
        <div>
        <input type="password" name="password" id="password" placeholder="enter a password"
        value={password}  onChange={passwordchangehandler}></input>
        </div>
        <button>submit</button>
      </form>
    </div>
  )
}
export default App 



/*
import React,{useState} from "react"

const App=()=>{
  const obj={name:"",email:"",password:""}
const[formdata,setformdata]=useState(obj)


const changehandler=(e)=>{
  setformdata({...formdata,[e.target.name]:e.target.value})
}

  const submithandler=(e)=>{
    e.preventDefault()
    console.log(formdata)
   
    

  }
  return(
    <div style={{textAlign:"center",marginTop:"5rem"}}>
      <form onSubmit={submithandler}>
        <div>
        <input type="text" name="name" id="name" placeholder="enter a name"value={formdata.name}
        onChange={changehandler}></input>
        </div>
        <div>
        <input type="email" name="email" id="email" placeholder="enter email" value={formdata.email}
        onChange={changehandler}></input>
        </div>
        <div>
        <input type="password" name="password" id="password" placeholder="enter a password"
        value={formdata.password}  onChange={changehandler}></input>
        </div>
        <button>submit</button>
      </form>
    </div>
  )
}
export default App
*/