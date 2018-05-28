export const SET_ENV = 'SET_ENV';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function setEnv(env){
    return {
	type: SET_ENV,
	env
    }
}

export function login(user){
    return {
	type: LOGIN,
	user
    }
}

export function logout(){
    return {
	type: LOGOUT
    }
}
