// Functioanl components are stateless
// constructor is jsut a keyword to the first executed method of the class 
//super calls the constructor of the  parent
import React, {Component} from "react";

class EducationalXpDisplay extends Component {
    constructor(props) {
        super(props)
        this.state={schoolName:props.info? props.info.schoolName:'', studyTitle:props.info? props.info.studyTitle:'', studyDate:props.info? props.info.studyDate:''//setState merges so we empty
    }
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    }
handleInputChange(e, valueName) { 
    this.setState((prevState)=>{let newState={...prevState}
    newState[valueName]=e.target.value //takes the value of the input which enter was pressed and sets it to newState.
    return newState; // as its an arrow func, newstate is returned and then setState is equal to It. (only one input is changed)
    })
    
}
handleSubmit=(e) => {
e.preventDefault(e)
this.props.submit(this.state)
}

    render () {return (
        <div id='EducationalXp'>
    <input type='text' name='schoolName' value={this.state.schoolName} onChange={(e)=> this.handleInputChange(e,'schoolName')} />
    </div>)
    }
}
export class EducationalXpEdit extends Component { 
render() {return (<div>
<h2>Educational Experience</h2>
<p>School Name:{this.props.info.schoolName}</p>
<p>Study Title:{this.props.info.studyTitle}</p>
<p>Study Date:{this.props.info.studyDate}</p>
</div>)
}
} 
export default EducationalXpDisplay