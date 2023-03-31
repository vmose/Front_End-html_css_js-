import React, { Component } from "react";
import Cardlist from "./CardList";
import Searchbox from './Searchbox'
import { robots } from "./robots";

class App extends Component {
constructor(){
    super()
    this.state = {
        robots:robots,
    searchstate: ""
    }

}
render(){
    return  (<div>
        <p>Robofriends</p>
        <Searchbox/>
        <Cardlist robot={robots}/>  
        </div>
        )
}
}

export default App