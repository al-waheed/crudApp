import { ADD_CRUD, EDIT_CRUD, UPDATE_CRUD, DELETE_CRUD } from '../Action'

const initialState = {
	cruds: [
		{ title: 'Your message title', message: 'what on your mind', id: 0, isEditing: false }
	]
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CRUD:
			let crud = [...state.cruds, action.payload]
			console.log(crud,'?????')
			return {
			 	...state,
				cruds: crud,
			}
		case EDIT_CRUD:
			let editCrud = state.cruds
			editCrud[action.payload].isEditing = true;
			return {
				...state,
				cruds: [...editCrud]
			}
		case DELETE_CRUD:
			let deletedCrud = state.cruds.filter(deletCrud => {
				return deletCrud.id !== action.payload;
			})
			return {
				...state,
				cruds: deletedCrud
			}
		case UPDATE_CRUD:
			const r = state.cruds.map((c,id) => {
				console.log(id)
				if (id === action.payload.id) {
					c = action.payload;
					c.isEditing = false;
				}
				return c
			})
			return {
				...state,
				cruds: r
			}
		default:
			return state;
	}
}

export default reducer;