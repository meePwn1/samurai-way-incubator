import { Dispatch } from 'react'
import { connect } from 'react-redux'
import { createPostAction, updateNewPostTextAction } from '../../../store/actions/profileAction'
import { RootState } from '../../../store/reducers'
import { CombinedActions } from '../../../types'
import MyPosts from './MyPosts'

const mapStateToProps = (state: RootState) => ({
	posts: state.profilePage.postData,
	newPostText: state.profilePage.newPostText,
})

// Функция, которая создает функции-диспетчеры и передает их как пропсы компонента
const mapDispatchToProps = (dispatch: Dispatch<CombinedActions>) => ({
	createPost: () => {
		dispatch(createPostAction())
	},
	updateNewPostText: (text: string) => {
		dispatch(updateNewPostTextAction(text))
	},
})

// Подключение компонента к Redux Store
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
