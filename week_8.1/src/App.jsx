//Flex
// function App() {
//   return (
//     <>
//       <div className='flex justify-center'>
//         <div className='bg-red-500'>Hi</div>
//         <div className='bg-green-500'>Hi</div>
//         <div className='bg-blue-500'>Hi</div>
//         <div className='bg-yellow-500'>Hi</div>
//       </div>     
//     </>
//   )
// }
// export default App

// import { RevenueCard } from "./components/RevenueCard"

//Grid
// function App() {
//   return (
//     <>
//        {/* column having 10 childs */}
//       <div className='grid grid-cols-10'> 
//         <div className='bg-red-500 col-span-4'>Hi</div> {/*40%*/}
//         <div className='bg-green-500 col-span-4'>Hi</div> {/*40%*/}
//         <div className='bg-blue-500 col-span-2'>Hi</div> {/*20%*/}
//       </div>     
//     </>
//   )
// }
// export default App

//responsiveness
// function App() {
//   return (
//     <>
//       <div className='grid justify-center grid-cols-1 md:flex'>  {/*if >=768 px then flex*/}
//         <div className='bg-red-500'>Hi</div> {/*40%*/}
//         <div className='bg-green-500'>Hi</div> {/*40%*/}
//         <div className='bg-blue-500'>Hi</div> {/*20%*/}
//       </div>     
//     </>
//   )
// }
// export default App 

//Dukaan App
// import React from "react";
import { RevenueCard } from "./components/RevenueCard"
function App() {
  return (
    <>  
      <RevenueCard title="Amount Pending"  orderCount={13} amount="80,370"/>
    </>
  );
}
export default App;
