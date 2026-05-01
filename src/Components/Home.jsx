// function Home({ name }) {
//     return (
//         // <h1>Home </h1>
//         <>
//          <h1>Home </h1>
//         <h1>Welcome {name} </h1>
//         </>
//     )
// }

export default Home

//Other way to write the same code is
// function Home(props){
//         return(
//             <>
//             <h1>Welcome {props.name} </h1>
//             </>
//         )
// }

// function Home () {
//     return (
//         <>
//         <h1>useState-Hook</h1>
//         <h3>{count}</h3>
//         <button onClick ={incCount}>Increment</button>
//         </>
//     )
// }



import { useState } from 'react'
function Home () {
  const [count,setCount] = useState(0)

  const incCount = () => {
    // setCount (count + 1);
    // setCount (count + 1);
    // setCount (count + 1); 
    setCount ((prevcount) => prevcount + 1);
    setCount ((prevcount) => prevcount + 1);
    setCount ((prevcount) => prevcount + 1);
  }
  return (
        <>
        <h1>useState-Hook</h1>
        <h3>{count}</h3>
        <button onClick ={incCount}>Increment</button>
        </>
    )
}
