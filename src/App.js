
import React,{Component} from 'react';
import IdentityDisplay, {IdentityEdit} from './components/Identity';

class App extends React.Component {
constructor(){
  super()
  this.setState= {
    isIdentityEdit:true,
  }
  this.handleIdentitySubmit=this.handleIdentitySubmit.bind(this)
  this.toggleEdit=this.toggleEdit.bind(this)
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
      {this.state.isIdentityEdit? //this acess returns true or false, this item was created on comstructor
      <IdentityDisplay submit={this.handleIdentitySubmit} info={this.state.info}/>: //display if true and pass state as info prop
      // renders every change so we got a button again.Both components can just change props based on App submit func
      <IdentityEdit submit={()=> this.toggleEdit('isIdentityEdit')} info={this.state.info}/> 
      //Você pode usar uma arrow function para envolver um manipulador de eventos e passar parâmetros (sem ser o e):
    //<button onClick={() => this.handleClick(id)} />
    //as isIdentityEdit is changed, the render happens again and the form is displayed again, indepedent of state. Performance hit...
      }
    </div>
  )
    }
}

export default App;
