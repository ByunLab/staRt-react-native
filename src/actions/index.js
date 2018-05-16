export const SET_ENV = 'SET_ENV';

export function setEnv(env){
    return {
	type: SET_ENV,
	env
    }
}
