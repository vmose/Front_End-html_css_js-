// import React,{Component} from "react";
import React from "react";
// class Card extends Component{
//     render()
// }

const Card = (props) =>{
return (
    <div className = 'tc bg-light-blue br3 dib pa3 ma2 grow bw2 shadow-5'>
    <img alt='robot' src= {`https://robohash.org/${props.id}?200x200` } />
    <h1>{props.name}</h1>
    <p>{props.email}</p>
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