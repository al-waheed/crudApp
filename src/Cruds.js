import React, { Component } from 'react';
import { connect } from 'react-redux'
import { EDIT_CRUD, UPDATE_CRUD, DELETE_CRUD } from './Action'

class Cruds extends Component {

    handleUpdate = () => {
        this.props.onUpdateCrud(this.id, this.fullname.value, this.occupation.value, this.country.value);
    }
    render() {
        const { data, onEditCrud, onDeleteCrud } = this.props;
        const crudsList = data.map((person,index) => {

            return person.isEditing === true ? (
                <div key={index}>
                    <div><input type="text" ref={(newVal) => {this.fullname = newVal}}   defaultValue={person.fullname} /></div>
                    <div><input type="text" ref={(newVal) => {this.occupation = newVal}} defaultValue={person.occupation} /></div>
                    <div><input type="text" ref={(newVal) => {this.country = newVal}}    defaultValue={person.country} /></div>
                    <div>
                        <button onClick={this.handleUpdate} ref={() => {this.id = index}} className="btnblue">Update</button>
                    </div>
                </div>
            ) : (<div key={index}>
                <div className='textinput'>{person.fullname}</div>
                <div className='textinput'>{person.occupation}</div>
                <div className='textinput'>{person.country}</div>
                <div><button className="btnblack" onClick={() => onEditCrud(index)}>Edit</button> |
                     <button className="btnred" onClick={() => onDeleteCrud(person.id)}>Delete</button>
                </div>
            </div>);
        });

        return (
            <div className='listuser'>
                {crudsList}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { data : state.cruds }
 }

 const mapDispatchToProps = (dispatch) => {
   return {
      onDeleteCrud : (id) => dispatch({type: DELETE_CRUD, payload: {id}}),
      onEditCrud :   (id) => dispatch({type: EDIT_CRUD,   payload: {id}}),
      onUpdateCrud : (id, fullname, occupation, country) => dispatch({type: UPDATE_CRUD, payload: {id, fullname, occupation, country}})
    }
 }

export default connect(mapStateToProps, mapDispatchToProps) (Cruds);