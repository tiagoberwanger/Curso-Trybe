import charAPI from '../services/charAPI'
export const RECEIVE_API = 'RECEIVE_API';
export const ERROR_API = 'ERROR_API';

export const receiveAPI = (character) => ({
    type: RECEIVE_API,
    character,
});

export const errorAPI = (error) => ({
    type: ERROR_API,
    error,
});

export function thunkCharacter(name) {
    return (dispatch) => {
        charAPI(name)
            .then((character) => dispatch(receiveAPI(character)))
            .catch((error) => dispatch(errorAPI(error.message)))
    }
}