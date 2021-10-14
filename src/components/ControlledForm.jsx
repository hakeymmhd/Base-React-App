// import {useState,useRef} from 'react'

// export default function ControlledForm(){
//   const [login,setLogin]=useState({email:'',password:''})


//   const handleSubmit=()=>{

//   }

//   const handleChange=(event)=>{
//     console.log(event.target.name)
//     setLogin({
//       ...login,
//       [event.target.name]: event.target.value
//     })
//   }


//   return( 
//     <div>
//       <h1>Controlled Form</h1>     {/* onChange is triggered whenever there is a new character */}
//       <input name="email" value={login.email} type='text' onChange={handleChange} />   {/* can use onkeyeup here to check for invalid characters */}
//       <input name='password' value={login.password} type='password' onChange={handleChange}/>
//       <input type='submit' onClick={handleSubmit}/>
//     </div>
//   )
// }                

import {useState} from 'react'

function validateEmail(email) {     // can be put inside the export function but better performance if outside
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function ControlledForm(){
    const [login,setLogin]=useState({email:'',password:''})
    const [isEmailValid, setIsEmailValid]=useState(true)
    const [isPassWordValid, setIsPasswordValid]=useState(true)
    const [hasErrors, setHasErrors] = useState(false)

  console.log('login',login)
  const handleSubmit=()=>{

  }

  const handleEmailChange=(event)=>{
    setLogin({
      ...login,
      email: event.target.value
    })
  }

  const handlePasswordChange=(event)=>{
    setLogin({
      ...login,
      password:event.target.value
    })
  }

  const onEmailBlur=()=>{
      const isEmailValid=validateEmail(login.email)
      setIsEmailValid(isEmailValid)
  }


  return( 
    <div>    {/* event handlers can only have 1 function, but in that function can declare another function */}
      <h1>Controlled Form</h1>   {/* onBlur is triggered everytime click out */}
      <input name="email" value={login.email} type='text' onChange={handleEmailChange} onBlur={onEmailBlur}/>
      {isEmailValid?'':<p>Invalid Email</p>}
      <input name='password' value={login.password} type='password' onChange={handlePasswordChange}/>
      <input type='submit' onClick={handleSubmit} disabled={hasErrors}/>
     
    </div>
  )
}                
