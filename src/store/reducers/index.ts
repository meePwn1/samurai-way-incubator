import { combineReducers } from 'redux'
import { dialogsReducer } from './dialogsReducer'
import { profileReducer } from './profileReducer'

export const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
