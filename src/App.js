import React , { Component } from "react";
import Users from "./Users";


class App extends Component {

  constructor() {
    console.log("constructor executed: used to initialize the variables before loading")
    super();
    this.state = { count:0 , deleteuser : true }
   
  }
componentDidMount(){
  console.log("componentDidMount executed : when component mounted first time ");
  this.setState({count : 100});

  // when component mounted first time the value of count will show 100

}

componentDidUpdate(prevProps , prevState){
  if(prevProps !== prevState){
    console.log("component updated: when event triggered")
  }
}

HandleIncrement(){
   this.setState({count : this.state.count + 1});
}

HandleDelete(){
     this.setState({deleteuser : false})
}


  render(){
    console.log("render method is called");
    return(
      <>
      <h2>{this.state.count}</h2>
      <button onClick={this.HandleIncrement.bind(this)}>Increment</button>
      {/* onClick={ ()=>{ this.HandleIncrement() } } or use this */}
     {  this.state.deleteuser ? <Users/>:" "}
      <button onClick={ () => { this.HandleDelete() } }>Delete</button>
      
      </>
    )
  }
}
export default App;

// The componentWillUnmount lifecycle method is invoked immediately before a component 
  //is unmounted and destroyed. This is the ideal place to perform any necessary cleanup
  // such as clearing up timers, cancelling network requests, 
  //or cleaning up any subscriptions that were created in componentDidMount() as shown below: 
// // e.g add event listener
// componentDidMount() {
//   el.addEventListener()
// }

// // e.g remove event listener 
// componentWillUnmount() {
//   el.removeEventListener()
// }