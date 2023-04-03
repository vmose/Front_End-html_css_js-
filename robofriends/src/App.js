import React, { Component } from "react"
import Cardlist from "./CardList"
import Searchbox from './Searchbox'
import './App.css'
import Scroll from "./Scroll"

// https://jsonplaceholder.typicode.com/

class App extends Component {
constructor(){
    super()
    this.state = {
        robots:[],
    searchfield: ""
    }
}

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
       return response.json()
    }).then(users=>{this.setState({robots:users})})
}

onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value})
    console.log(event.target.value)
}

render(){
    const filteredrobots = this.state.robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if (this.state.robots.length===0) {
        return  <h1>loading...</h1>}
        else {
    return  (<div className="tc">
        <h1>Robofriends©</h1>
        <Searchbox searchchange ={this.onSearchChange} />
        <Scroll> <Cardlist robots={filteredrobots}/> </Scroll>
        </div>
        )
}
}
}
export default App