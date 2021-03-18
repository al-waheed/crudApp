import React, { Component } from 'react';
import Cruds from './Cruds';
import AddCrud from './AddCrud'

class App extends Component {

  // editCrud = (id) => {
  //   const { cruds } = this.state;
  //   let crud = cruds;
  //   crud[id].isEditing = true;
  //   this.setState({ cruds: crud });
  // }

  // updateCrud = (id, fullname, occupation, country) => {
  //   let crud = this.state.cruds;
  //   crud[id].fullname = fullname;
  //   crud[id].occupation = occupation;
  //   crud[id].country = country;
  //   crud[id].isEditing = false;
  //   this.setState({ cruds: crud });
  // }

  render() {
    return (
      <div>
        <AddCrud />
        <Cruds />
      </div>
    );
  }
}


export default App;
