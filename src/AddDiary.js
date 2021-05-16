import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styleCss/AddDairy.css';
import { ADD_CRUD } from './reduxStore/Action';
import {ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

class AddDiary extends Component {
  state = {
    title: " ",
    entries: " ",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSumbmit = (e) => {
    e.preventDefault();
    this.props.onAddCrud(this.state)
    ToastsStore.info("Added, Successfully!") 
    e.target.reset()
  }
  render() {
    const { handleChange, handleSumbmit } = this;
    return (
    <div className='formcontainer'>
      <div className='container'>
        <form onSubmit={handleSumbmit} className='formbox card'>
        <h3>create new note</h3>
           <div className='input'>
            <input type="text"
              className='inputbox'
              id='title'
              required
              placeholder="Note title"
              onChange={handleChange} />
          </div>

          <div className='input'>
            <input type='text'
              className='inputtext'
              id='entries'
              required
              placeholder="What on your mind"
              onChange={handleChange} />
          </div>
          <button className='btn'>Addnote</button>
          <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT}/>
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
export default connect(null, mapDispatchToProps)(AddDiary);