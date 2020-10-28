import charAPI from '../services/charAPI'
export const RECEIVE_API = 'RECEIVE_API';

export const receiveAPI = (character) => ({
    type: RECEIVE_API,
    character,
});

export function thunkCharacter(name) {
    return (dispatch) => {
        return charAPI(name)
            .then((character) => dispatch(receiveAPI(character))
            )
    }
}