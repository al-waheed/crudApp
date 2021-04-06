import React, { Component } from 'react';
import { connect } from 'react-redux'

import { EDIT_CRUD, UPDATE_CRUD, DELETE_CRUD } from './Action'

class Cruds extends Component {

    handleUpdate = () => {
        this.props.onUpdateCrud({
            id: this.id,
            title: this.title.value,
            message: this.message.value,
        });
    }
    render() {
        const { content, onEditCrud, onDeleteCrud } = this.props;
        const messageList = content.map((message, index) => {

            return message.isEditing === true ? (
                <div key={index}>
                    <div><input type="text" ref={(newVal) => { this.title = newVal }} defaultValue={message.title} /></div>
                    <div><textarea type="text" ref={(newVal) => { this.message = newVal }} defaultValue={message.message} /></div>
                    <div>
                        <button onClick={this.handleUpdate} ref={() => { this.id = index }} className="btnblue">Update</button>
                    </div>
                </div>
            ) : (<div key={index}>
                <div className='textinput'>{message.title}</div>
                <div className='textinput'>{message.message}</div>
                <div><button className="btnblack" onClick={() => onEditCrud(index)}>Edit</button> |
                     <button className="btnred" onClick={() => onDeleteCrud(message.id)}>Delete</button>
                </div>
            </div>);
        });

        return (
            <div className='listuser'>
                {messageList}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { content: state.cruds }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteCrud: (id) => dispatch({ type: DELETE_CRUD, payload: id }),
        onEditCrud:   (id) => dispatch({ type: EDIT_CRUD, payload: id }),
        onUpdateCrud: (data) =>  dispatch({ type: UPDATE_CRUD, payload: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cruds);