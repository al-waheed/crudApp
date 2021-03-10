import React, { Component } from 'react';
class Cruds extends Component {

    handleUpdate = () => {
        this.props.updateCrud(this.id, this.fullname.value, this.occupation.value, this.country.value);
    }
    render() {
        const { cruds, editCrud, deleteCrud } = this.props;
        const crudsList = cruds.map((crud, index) => {

            return crud.isEditing === true ? (
                <div key={index}>
                    <div><input type="text" ref={(NewVal) => {this.fullname = NewVal}}   defaultValue={crud.fullname} /></div>
                    <div><input type="text" ref={(NewVal) => {this.occupation = NewVal}} defaultValue={crud.occupation} /></div>
                    <div><input type="text" ref={(NewVal) => {this.country = NewVal}}    defaultValue={crud.country} /></div>
                    <div>
                        <button onClick={this.handleUpdate} ref={() => {this.id = index}} className="btnblue">Update</button>
                    </div>
                </div>
            ) : (<div key={index}>
                <div className='textinput'>{crud.fullname}</div>
                <div className='textinput'>{crud.occupation}</div>
                <div className='textinput'>{crud.country}</div>
                <div><button className="btnblack" onClick={() => editCrud(index)}>Edit</button> |
                     <button className="btnred" onClick={() => deleteCrud(crud.id)}>Delete</button>
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


export default Cruds;