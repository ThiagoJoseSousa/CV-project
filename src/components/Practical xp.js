// Functioanl components are stateless
// constructor is jsut a keyword to the first executed method of the class 
//super calls the constructor of the  parent

import React, {Component} from "react";

class PracticalXpDisplay extends Component {
constructor (props) {
    super()
    this.state={company:props.info? props.info.company:'', 
    position:props.info? props.info.position:'',
    tasks:props.info? props.info.tasks:'',
    dateTimeWorked:props.info? props.info.dateTimeWorked:''
}
this.handleInputChange=this.handleInputChange.bind(this)
this.handleSubmit=this.handleSubmit.bind(this)
}

handleInputChange(e,valueName){
this.setState(prevState => {
    let newState= {...prevState}
    newState[valueName]=e.target.value
    return newState;
})
}
handleSubmit=(e)=> {
e.preventDefault()
this.props.submit(this.state)
}


render() {
    return (<div><form>
        <h2>Practical experiecne</h2>
        <label htmlFor="company"> Company name:
<input type='text' name='company' value={this.state.company} onChange={(e)=> {
    this.handleInputChange(e, 'company')
}}/></label><br />
<label htmlFor="position"> Position:
<input type='text' name='position' value={this.state.position} onChange={(e)=> {
    this.handleInputChange(e, 'position')
}}/></label><br />

<label htmlFor="tasks"> Main task(s):
<input type='text' name='tasks' value={this.state.tasks} onChange={(e)=> {
    this.handleInputChange(e, 'tasks')
}}/></label><br />

<label htmlFor="dateTimeWorked"> Beggining/end date of working: 
<input type='text' name='dateTimeWorked' value={this.state.dateTimeWorked} onChange={(e)=> {
    this.handleInputChange(e, 'dateTimeWorked')
}}/></label><br />
<button onClick={this.handleSubmit}> Submit</button>

</form>
    </div>)
}
    
}

export class PracticalXpEdit extends Component{
render (){ return(
<div><form> <h2> Practical Experience</h2>
<p> Company name:{this.props.info.company}</p>
<p> Position:{this.props.info.position}</p>
<p> Main task:{this.props.info.tasks}</p>
<p> Start and end date of work:{this.props.info.dateTimeWorked}</p>
</form>
</div>)
}
}
export default PracticalXpDisplay