import React, { Component } from 'react';

class AddCrud extends Component {
  state = {
    fullname: "",
    occupation: "",
    country: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSumbmit = (e) => {
    e.preventDefault();
    this.props.addCrud(this.state)
    e.target.reset()
  }
  render() {
    const { handleChange, handleSumbmit } = this;
    return (
      <div className='form-container'>
        <form onSubmit={handleSumbmit}>

          <div className='input'>
            <label>Fullname</label>
            <input type="text"
              className='input'
              id='fullname'
              required
              placeholder="Fullname"
              onChange={handleChange} />
          </div>

          <div className='input'>
            <label >Occupation</label>
            <input type="text"
              className='input'
              id='occupation'
              required
              placeholder="Occupation"
              onChange={handleChange} />
          </div>

          <div className='input'>
            <label>Country</label>
            <input type="text"
              className='input'
              id='country'
              required
              placeholder="Country"
              onChange={handleChange} />
          </div>
          <div className='submit'>
            <button className='btn'>Add User+</button>
          </div>
        </form>
      </div>
    )
  }

}

export default AddCrud;