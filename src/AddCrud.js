import React, { Component } from 'react';
import './AddCrud.css';

class AddCrud extends Component {
    state = { 
      fullname: null,
      occupation: null,
      country: null,
      isEditing:false
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSumbmit = (e) => {
        e.preventDefault();
        this.props.addCrud(this.state)
        e.target.reset()
    }
 render(){
     return(
         <div className='form-container'>
           <form onSubmit={this.handleSumbmit}>
             
             <div className='input'>
             <label htmlFor='name' className='label'>Fullname</label>
             <input type="text" className='form-input' id='fullname' required placeholder="Enter your fullname" onChange={this.handleChange}/>
             </div>

             <div className='input'>
             <label htmlFor='occupation' className='label'>Occupation</label>
             <input type="text" className='form-input' id='occupation' required placeholder="Enter your occupation" onChange={this.handleChange}/>
             </div>

             <div className='input'>
             <label htmlFor='country' className='label'>Country</label>
             <input type="text" className='form-input' id='country' required placeholder="Enter your country" onChange={this.handleChange}/>
             </div>
              <div className='submit'>
             <button className='submit-btn'>Add User+</button>
             </div>
           </form>
         </div>
     )
 }

}

export default AddCrud;