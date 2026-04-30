function Home({ name }) {
    return (
        // <h1>Home </h1>
        <>
         <h1>Home </h1>
        <h1>Welcome {name} </h1>
        </>
    )
}

export default Home

//Other way to write the same code is
// function Home(props){
//         return(
//             <>
//             <h1>Welcome {props.name} </h1>
//             </>
//         )
// }