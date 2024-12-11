// import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
// import './App.css'
// import React,{suspense} from 'react'
// const Dashboard=React.lazy(()=>import('./components/dashboard')) 
// const  Landing=React.lazy(()=>import('./components/landing'))
// function App() {
//   return (
//     <div>
      
//       <BrowserRouter>
//       <Appbar />
//       <Routes>
//         <Route path='/dashboard' element={<suspense fallback={"loading..."}> <Dashboard/></suspense>} />
//         <Route path='/' element={<suspense fallback="loading..."><Landing/></suspense>} />
//       </Routes>
//     </BrowserRouter>
//     </div>
//   ) 
// }
// function Appbar(){
//   const navigate=useNavigate();  //------->should always inside browserRouter
//   return <div>
//         <button onClick={()=>{
//           //window.location.href="/" -------->not a good way
//           navigate("/");
//         }}>Landing</button>
//         <button onClick={()=>{
//           // window.location.href="/dashboard"  -------->not a good way
//           navigate("/dashboard");
//         }}>Dashboard</button>
//   </div>

// }

// export default App


//PROP DRILLING
// import { useState } from "react"
// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Count count={count} setCount={setCount} />
//     </div>
//   )
// }
// function Count({count, setCount}) {
//   return <div>
//     <CountRenderer count={count} />
//     <Buttons count={count} setCount={setCount} />
//   </div>
// }
// function CountRenderer({count}) {
//   return <div>
//     {count}
//   </div>
// }
// function Buttons({count, setCount}) {
//   return <div>
//     <button onClick={() => {
//       setCount(count + 1)
//     }}>Increase</button>

//     <button onClick={() => {
//       setCount(count - 1)
//     }}>Decrease</button>
//   </div>
// }
// export default App

//Context API
import { useContext, useState, createContext } from "react";

// Create a single context
const CountContext = createContext();

function CountApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Provide both count and setCount in a single context */}
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext); // Destructure count from context
  return <div>{count}</div>;
}

function Buttons() {
  const { setCount } = useContext(CountContext); // Destructure setCount from context

  return (
    <div>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default CountApp;
