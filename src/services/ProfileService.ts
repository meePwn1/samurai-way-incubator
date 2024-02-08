import { apiAxios } from '../api/api'
import { IProfile } from '../types/IProfile.interface'

const PROFILE = 'profile'

export class ProfileService {
	static getProfile(userID: string) {
		return apiAxios.get<IProfile>(`${PROFILE}/${userID}`)
	}
}
