// Functioanl components are stateless
// constructor is jsut a keyword to the first executed method of the class 
//super calls the constructor of the  parent

import React, {Component} from "react";

class IdentityDisplay extends Component {
    constructor(props) {
        super(props)
        this.state= {name:props.info ? props.info.name:'', // if no prop is being passed, dont create any key. if yes, set its property to empty
        //prop would be like let props={info:{name:'something'}}
        // if being passed, store values in state
            email:props.info? props.info.email:'',
            phone:props.info? props.info.phone:''}

    }

 handleSubmit=(e) =>{
e.preventDefault();
this.props.submit(this.state) //fires a prop submit function on submit button

/* One should never update the state directly because of the following reasons:

    If you update it directly, calling the setState() afterward may just replace the update you made.
    When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
    You will lose control of the state across all components.
 */

}



    render () {
        return (
            <section>
                <form onSubmit={this.handleSubmit/*here will submit and display, edit button should change state?*/}>
                    <input type='name' name='name'></input>
                    <input type='email' name='email'></input>
                    <input type='number' name='phone'></input>
                    <button name='edit' onClick={this.editContent}></button> 
                    <button type='submit'></button>
                </form>
            </section>
        )
    }
}

export class IdentityEdit extends Component {
    render (){
        return (
            <div>
                <h2>{this.props.info.name}</h2>
                <p>Email:{this.props.info.email} -- Phone: {this.props.info.phone}</p>
                <button onClick={this.props.submit}>edit</button>
                </div>
        )
    }
}
export default IdentityDisplay;