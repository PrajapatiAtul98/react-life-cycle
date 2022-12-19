
import React ,{ Component } from "react";

class Users extends Component {
    

    componentWillUnmount(){
        console.log("component Umnmounted");
    }
     render(){
        return(
            <>
            <h1>users</h1></>
        )
     }
}
export default Users;