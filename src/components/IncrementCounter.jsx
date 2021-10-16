import { useEffect,useState } from "react"

export default function IncrementCounter(props){
  console.log('function called')
  const [countOne,setCountOne]=useState(0)
  const [countTwo,setCountTwo]=useState(0)
  useEffect(()=>{
    console.log('useEffect triggered')
  },[])
  return(
    <div>
    <input type='button' value='Increment CountOne' onClick={()=>setCountOne(countOne+1)}/>
    <div>{'countOne: ' + countOne }</div>
    <input type='button' value='Increment CountTwo' onClick={()=>setCountTwo(countTwo+1)}/>
    <div>{'countTwo: ' + countTwo }</div>
    </div>
  )
}