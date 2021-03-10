import React, { Component } from 'react';
import Cruds from './Cruds';
import AddCrud from './AddCrud'

class App extends Component {
  state = {
    cruds: [
      { fullname: 'Pablo Excobar', occupation: 'Drug Lord', country: 'Columbia', id: 1, isEditing: false },
      { fullname: 'Rashidi Yekinni', occupation: 'Footballer', country: 'Nigeria', id: 2, isEditing: false }
    ]
  };

  editCrud = (id) => {
    const { cruds } = this.state;
    let crud = cruds;
    crud[id].isEditing = true;
    this.setState({ cruds: crud });
  }

  updateCrud = (id, fullname, occupation, country) => {
    let crud = this.state.cruds;
    crud[id].fullname = fullname;
    crud[id].occupation = occupation;
    crud[id].country = country;
    crud[id].isEditing = false;
    this.setState({ cruds: crud });
  }

  deleteCrud = (id) => {
    const { cruds } = this.state;
    const crud = cruds.filter(deletCrud => {
      return deletCrud.id !== id
    })
    this.setState({ cruds: crud })
  }

  addCrud = (newCrud) => {
    const { cruds } = this.state;
    let crud = [...cruds, newCrud];
    this.setState({ cruds: crud })
  }

  render() {
    const { deleteCrud, updateCrud, editCrud, addCrud } = this;
    const { cruds } = this.state;
    return (
      <div>
        <AddCrud addCrud={addCrud} />
        <Cruds deleteCrud={deleteCrud} updateCrud={updateCrud} editCrud={editCrud} cruds={cruds} />
      </div>
    );
  }
}

export default App;
