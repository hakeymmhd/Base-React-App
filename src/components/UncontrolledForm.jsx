import {useState,useRef} from 'react'

export default function UncontrolledForm(){
  const [login,setLogin]=useState({email:'',password:''})
  const inputEmailRef=useRef();
  const inputPasswordRef=useRef();

  console.log('login',login)
  const handleSubmit=()=>{
    setLogin({
      email:inputEmailRef.current.value,
      password:inputPasswordRef.current.value
    })

      console.log("uwu");
  }


  return( 
    <div>
      <input type='text' ref={inputEmailRef}/>
      <input type='password' ref={inputPasswordRef}/>
      <input type='submit' onClick={handleSubmit}/>
    </div>
  )
}                

