import { ADD_CRUD, EDIT_CRUD, UPDATE_CRUD, DELETE_CRUD } from '../Action'

const initialState = {
	cruds: [
		{ fullname: 'Pablo Excobar', occupation: 'Drug Lord', country: 'Columbia', id: 1, isEditing: false },
		{ fullname: 'Rashidi Yekinni', occupation: 'Footballer', country: 'Nigeria', id: 2, isEditing: false }
	]
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CRUD:
			let crud = [...state.cruds, action.payload]
			return {
				...state, 
				cruds: crud,
			}
		case EDIT_CRUD:
			let editCrud = state.cruds
			editCrud[action.payload.id].isEditing = true;
			console.log(editCrud)
			return {
				...state,  
				cruds: editCrud,
			}
		case DELETE_CRUD:
			let deletedCrud = state.cruds.filter(deletCrud => {
				return deletCrud.id !== action.payload.id;
			})
			return {
				...state,
				cruds: deletedCrud,
			}
		case UPDATE_CRUD:
			return {
				...state,
				// cruds:
			}
	}
	return state;
}

export default reducer;