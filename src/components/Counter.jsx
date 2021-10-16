// import { useEffect, useState } from 'react'

// export default function Counter() {
//   const [counter, setCounter] = useState(0);
//   let interval = null;  // every time app re-renders, interval gets set to NULL
//   console.log('Counter function called: ', counter)

//   const startTimer = () => {
//     console.log("startTimer");
//     interval = setInterval(() => {
//       console.log("setInterval: ", counter);
//       setCounter((prevState)=>{
//         return prevState+1
//       });
//     }, 2000);
//     console.log('interval - startTimer', interval)
//   };
  
//   const pauseTimer = (event) => {
//     console.log('interval - startTimer', interval);
//     clearInterval(interval);
//   };

//   useEffect(()=>{
//     console.log('useEffect triggered')
//     startTimer();
//     return () => {
//       console.log("cleaning up") // runs right after next render
//       clearInterval(interval)
//     }
//   })
//   console.log('Counter: ', counter)
//   return (
//     <>
//       <div>Counter: {counter}</div>

//       <button onClick={startTimer}>Start Timer</button>
//       <button onClick={pauseTimer}>Pause Timer</button>
//     </>
//   );

// }



// ---------
// import { useEffect, useState } from 'react'

// export default function Counter() {

//   const [counter, setCounter] = useState(0);
//   const [toggle, setToggle] = useState(false);
//   let interval = null;

//   const startTimer = () => {
//     clearInterval(interval);
//     interval = setInterval(()=>{
//       setCounter((prevState)=>{
//         return prevState+1
//       });
//     }, 2000);
//     console.log('interval - startTimer', interval)
//   };
  
//   const pauseTimer = (event) => {
//     console.log('interval - stopTimer', interval)
//     clearInterval(interval);
//   };

//   useEffect(()=>{
//     console.log('useEffect triggered')
//     startTimer();
//     return ()=>{
//       console.log('cleaning up') //runs right after next render
//       clearInterval(interval)
//     }
//   })

//   const handleStartClick=()=>{
//     setToggle(false)
//     startTimer()
//   }

//   const handlePauseClick=()=>{
//     setToggle(true)
//     pauseTimer()
//   }

//   console.log('rendering Counter')
//   return (
//     <>
//       <div>Counter: {counter}</div>
//       {toggle ? (
//       <button onClick={handleStartClick}>Start Timer</button>
//     ) : (
//       <button onClick={handlePauseClick}>Pause Timer</button>
//     )}
//     </>
//   );

// }


export default function Counter() {

  const [counter, setCounter] = useState(0);
  const [intervalId,setIntervalId] = useState()
  const [toggle,setToggle]=useState()

  const startTimer=()=>{
    const interval=setInterval(()=>{
      setCounter(prevState=>prevState+1)
    },1000)
    setIntervalId(interval)
    setToggle(false)
  }

  const stopTimer=()=>{
    clearInterval(intervalId)
    setToggle(true)
  }

  useEffect(()=>{
    startTimer()
  },[])

  return (
    <>
      <div>Counter: {counter}</div>
      {toggle ? (
        <button onClick={startTimer}>Start Timer</button>
      ) : (
        <button onClick={stopTimer}>Pause Timer</button>
      )}
    </>
  );
}