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
            this.handleInputChange = this.handleInputChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
    }
handleInputChange (e,valueName) {
    this.setState((prevState)=> {
        let newState = {...prevState}
        newState[valueName]= e.target.valueName
        return newState
    })
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
            <div id='identity-info'>
            <h2>Identity info</h2>
            <form>
            <label htmlFor='name'>
                Name:
                <input type='text' id='name' name='name' value={this.state.name} onChange={(e)=> this.handleInputChange(e,'name')} /> {/*changes input name on func 
                and input returns the changed name on submit*/ }
            </label>
            <br />
            <label htmlFor='email'>
                Email:
                <input type='text' id='email' name='email' value={this.state.email} onChange={(e)=>this.handleInputChange(e,'email')}/>
            </label>
            <br />
                <label htmlFor='phone'>
                Phone:
                <input type='number' id='phone' name='phone' value={this.state.phone} onChange={(e)=>this.handleInputChange(e,'phone')}/>    
                </label>
                <br />
                    <button onClick={this.handleSubmit}>Submit</button>  {/* state is changed on submit bttn/enter bttn, but on submit It also alters the isEditable state, which is used to define what to render
                    React schedules a render every time the state of a component changes.*/}
            </form>
            </div>
        
        )
    }
}

export class IdentityEdit extends Component {
    render (){
        return (
            <div>
                <h2>{this.props.info.name}</h2>
                <p>Email:{this.props.info.email} -- Phone: {this.props.info.phone}</p>
                <button onClick={this.props.submit}>Edit</button>
                </div>
        )
    }
}
export default IdentityDisplay;