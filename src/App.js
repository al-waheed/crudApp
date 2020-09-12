import React, { Component } from 'react';
import Cruds from './Cruds';
import AddCrud from './AddCrud'

class App extends Component {
  state = {
    cruds:[ 
      {fullname: 'Pablo Excobar', occupation: 'Drug Lord', country: 'Columbia', isEditing:false},
      {fullname: 'Rashidi Yekinni', occupation: 'Footballer', country: 'Nigeria',isEditing:false}
    ]
   };

   editCrud = (i) => {
    let cruds = this.state.cruds;
    cruds[i].isEditing = true;
    this.setState({
      cruds: cruds
    });
  }

  updateCrud = (i, fullname, occupation, country) => {
    let cruds = this.state.cruds;
    cruds[i].fullname = fullname;
    cruds[i].occupation = occupation;
    cruds[i].country= country;
    cruds[i].isEditing = false;
     this.setState({
     cruds:cruds
    });
  }

deleteCrud = (i) =>{
 const cruds = this.state.cruds.filter((u,index)=> {
   return index !== i
 })
 this.setState({
   cruds : cruds
 })
}

addCrud = (newCrud) => {
 let cruds = [...this.state.cruds,newCrud];
 this.setState({
   cruds: cruds
 })

}

 render(){
  return (
    <div>
      <Cruds deleteCrud={this.deleteCrud} updateCrud={this.updateCrud} editCrud={this.editCrud} allCruds={this.state.cruds}/>
      <AddCrud addCrud={this.addCrud}/>
    </div>
   );
  }
}

export default App;
