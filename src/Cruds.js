import React, { Component } from 'react'; 
import './Cruds.css';

class Cruds extends Component{

    handleUpdate = () => {
        this.props.updateCrud(this.indexNum, this.fullname.value, this.occupation.value, this.country.value);
    }
      render(){

        const {allCruds, editCrud, deleteCrud} = this.props;

        const crudsList = allCruds.map((crud, index) => {

            return crud.isEditing === true ? (
                
                <tr  key={index}>
                    <td><input type="text" ref={(val) => {this.fullname = val}} required defaultValue={crud.fullname}/></td>
                    <td><input type="text" ref={(val) => {this.occupation = val}} required defaultValue={crud.occupation}/></td>
                    <td><input type="text" ref={(val) => {this.country = val}} required defaultValue={crud.country}/></td>
                    <td>
                    <button onClick={this.handleUpdate} ref={() => {this.indexNum = index}} className="submit-blue">update</button>
                    </td>
                </tr>  

            ) : (

                <tr  key={index}>
                    <td className='text-input'>{crud.fullname}</td>
                    <td className='text-input'>{crud.occupation}</td>
                    <td className='text-input'>{crud.country}</td>
                    <td><button className="submit-black" onClick={() => editCrud(index)}>Edit</button>  |  <button className="submit-red" onClick={()=> deleteCrud(index)}>Delete</button></td>
                </tr>

            );
        });

        return(
            <table className="table">
                <thead>
                    <tr className='heading'>
                    <th className='text-heading'>Name</th>
                    <th className='text-heading'>Occupation</th>
                    <th className='text-heading'>Country</th>
                    <th className='text-heading'>Action</th>
                    </tr>
                </thead>
                <tbody className='list-user'>
                    {crudsList}
                </tbody>
            </table>
        );
    }
}


export default Cruds;