import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_CRUD } from './Action';
import './AddCrud.css';
class AddCrud extends Component {
  state = {
    title: " ",
    message: " ",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSumbmit = (e) => {
    e.preventDefault();
    this.props.onAddCrud(this.state)
    e.target.reset()
  }
  render() {
    const { handleChange, handleSumbmit } = this;
    return (
    <div className='form'>
      <div className='formcontainer'>
        <form onSubmit={handleSumbmit} className='formbox'>
           <div className='input'>
            <input type="text"
              className='inputbox'
              id='title'
              required
              placeholder="Note Title"
              onChange={handleChange} />
          </div>

          <div className='input'>
            <textarea type='text'
              className='inputtext'
              id='message'
              required
              placeholder="What on your mind"
              onChange={handleChange} />
          </div>
          <div className='submit'>
            <button className='btn'>Add Note+</button>
          </div>
        </form>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddCrud: (newCrud) => dispatch({ type: ADD_CRUD, payload: newCrud })
  }
}

export default connect(null, mapDispatchToProps)(AddCrud);