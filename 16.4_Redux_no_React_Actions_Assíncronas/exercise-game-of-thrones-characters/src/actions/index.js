import charAPI from '../services/charAPI'
export const RECEIVE_API = 'RECEIVE_API';
export const REQUEST_API = 'REQUEST_API';
export const ERROR_API = 'ERROR_API';

export const requestAPI = (characterSearched) => ({
    type: REQUEST_API,
    loading: true,
    characterSearched,
});

export const receiveAPI = (character) => ({
    type: RECEIVE_API,
    loading: false,
    character,
});

export const errorAPI = (error) => ({
    type: ERROR_API,
    loading: false,
    error,
});

export function thunkCharacter(name) {
    return (dispatch) => {
        dispatch(receiveAPI(name));
        return charAPI(name)
            .then((character) => dispatch(receiveAPI(character)),
            (error) => dispatch(errorAPI(error.message)))
    }
}