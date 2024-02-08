import { combineReducers, createStore } from 'redux'
import { ProfileAction } from '../types/IProfile.interface'
import { UserAction } from '../types/IUser.interface'
import { DialogsAction } from '../types/dialogsPage'
import { authReducer } from './reducers/authReducer'
import { dialogsReducer } from './reducers/dialogsReducer'
import { profileReducer } from './reducers/profileReducer'
import { usersReducer } from './reducers/usersReducer'

const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
export type CombinedActions = DialogsAction | ProfileAction | UserAction
