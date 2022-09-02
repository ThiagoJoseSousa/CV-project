// return () is for html, return {} for js
import React,{Component} from 'react';
import IdentityDisplay, {IdentityEdit} from './components/Identity';
import EducationalXpDisplay, {EducationalXpEdit} from './components/Educational xp'
import PracticalXpDisplay, {PracticalXpEdit} from './components/Practical xp'
class App extends Component {
constructor(){
  super()
  this.state= {
    isIdentityEdit:true,
    isSchoolXpEdit:true,
    isPracticalXpEdit:true
  }
  this.handleIdentitySubmit=this.handleIdentitySubmit.bind(this)
  this.toggleEdit=this.toggleEdit.bind(this)
  this.handleEducationalXpSubmit=this.handleEducationalXpSubmit.bind(this)
  this.handlePracticalXpSubmit=this.handlePracticalXpSubmit.bind(this) // bind is really important
}
handleIdentitySubmit (info){//info = state passed as argument
this.setState((prevState)=> {
  return {
    info: {
      name:info.name,
      email:info.email,
      phone:info.phone
    }, isIdentityEdit:!prevState.isIdentityEdit
  }
})
}

handleEducationalXpSubmit(info) {
  this.setState((prevState)=>{return {
    info: {
      schoolName:info.schoolName,
      studyTitle:info.studyTitle,
      studyDate:info.studyDate
    },
    isSchoolXpEdit:!prevState.isSchoolXpEdit
  }})
}

handlePracticalXpSubmit(info) {
 this.setState((prevState)=> {
  return {
    info: {company:info.company,
      position:info.position,
      tasks:info.tasks,
      dateTimeWorked:info.dateTimeWorked

    },
    isPracticalXpEdit:!prevState.isPracticalXpEdit
  }
 }) 
}

toggleEdit (valueName) {
this.setState ((prevState)=> {
let newState= {}
newState[valueName]= !prevState[valueName] //value name is reusable for the 3 components.
return newState
})
}

  render(){ //when does render happen? Every update to the values
  return ( 
    <div className='App'>
      {this.state.isIdentityEdit? //this acess returns true or false, this item was created on constructor (created first)
      <IdentityDisplay submit={this.handleIdentitySubmit} info={this.state.info}/>: /* state is changed on submit bttn/enter bttn, but on submit It also alters the isEditable state, which is used to define what to render
    React schedules a render every time the state of a component changes.*/
      <IdentityEdit submit={()=> this.toggleEdit('isIdentityEdit')} info={this.state.info}/> } 
      {
      //Você pode usar uma arrow function para envolver um manipulador de eventos e passar parâmetros (sem ser o e):
    //<button onClick={() => this.handleClick(id)} /> It'd cause a performance hit if rendered not conditionally
         this.state.isSchoolXpEdit? 
      <EducationalXpDisplay submit={this.handleEducationalXpSubmit} info={this.state.info}/> : 
      <EducationalXpEdit submit={()=> this.toggleEdit('isSchoolXpEdit')} info={this.state.info}/>
      }
      {this.state.isPracticalXpEdit? 
        <PracticalXpDisplay submit={this.handlePracticalXpSubmit} info={this.state.info}/> :
        <PracticalXpEdit submit={()=> this.toggleEdit('isPracticalXpEdit')} info={this.state.info}/>
      }
    </div>
  )
    }
}

export default App;
