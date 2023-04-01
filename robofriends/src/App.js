import React, { Component } from "react"
import Cardlist from "./CardList"
import Searchbox from './Searchbox'
import { robots } from "./robots"
import './App.css'


class App extends Component {
constructor(){
    super()
    this.state = {
        robots:robots,
    searchfield: ""
    }
}

onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value})
    console.log(event.target.value)
}

render(){
    const filteredrobots = this.state.robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return  (<div className="tc">
        <h1>Robofriends©</h1>
        <p >by Victor Mose</p>
        <Searchbox searchchange ={this.onSearchChange} />
        <Cardlist robots={filteredrobots}/>  
        </div>
        )
}
}

export default App