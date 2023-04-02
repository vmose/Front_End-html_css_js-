// import React,{Component} from "react";
import React from "react";
// class Card extends Component{
//     render()
// }

const Card = ({name,id,email}) =>{
return (
    <div className = 'tc bg-gray br3 dib pa3 ma2 grow bw2 shadow-5'>
    <img alt='robot' src= {`https://robohash.org/${id}?200x200` } />
    <h2>{name}</h2>
    <p>{email}</p>
    </div>
)}

// alternative code
// const Card = ({name,email,id}) =>{
//     return (
//         <div className = 'tc bg-light-blue br3 dib pa3 ma2 grow bw2 shadow-5'>
//         <img alt='robot' src= {`https://robohash.org/${id}?200x200` } />
//         <h1>{name}</h1>
//         <p>{email}</p>
//         </div>     
//     )}
    

export default Card