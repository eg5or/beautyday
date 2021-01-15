import {authAPI} from '../API/api'

const TOGGLE_IS_WAITING_LOGIN = 'TOGGLE_IS_WAITING_LOGIN';
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const DELETE_AUTH_USER_DATA = 'DELETE_AUTH_USER_DATA';
const SET_RESPONSE_MESSAGE = 'SET_RESPONSE_MESSAGE';


let initialState = {
    isWaitingLogin: false,
    isAuth: false,
    token: '',
    login: '',
    position: '',
    email: '',
    avatar: '',
    id: '',
    textResponseMessage: null,
    typeResponseMessage: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_WAITING_LOGIN:
            return {
                ...state,
                isWaitingLogin: action.toggle
            };
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                isAuth: true,
                login: action.data.login,
                position: action.data.position,
                email: action.data.email,
                avatar: action.data.avatar,
                id: action.data.id,
            };
        case DELETE_AUTH_USER_DATA:
            return {
                ...state,
                isAuth: false,
                token: '',
                login: '',
                position: '',
                email: '',
                avatar: '',
                id: '',
            };
        case SET_RESPONSE_MESSAGE:
            return {
                ...state,
                textResponseMessage: action.message,
                typeResponseMessage: action.typeMessage
            };

        default:
            return state;
    }
};

// ActionCreators
export const setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA, data});

export const deleteAuthUserData = () => ({type: DELETE_AUTH_USER_DATA});

export const setResponseMessage = (message, typeMessage) => ({type: SET_RESPONSE_MESSAGE, message, typeMessage});

export const toggleIsWaitingLogin = (toggle) => ({type: TOGGLE_IS_WAITING_LOGIN, toggle});

// Thunks
export const checkAuth = () => async (dispatch, getState) => {
    const isAuth = getState().auth.isAuth
    if (!isAuth) {
        if (localStorage.getItem('token')) {
            const userDataLocalStorage = JSON.parse(localStorage.getItem('token'))
            try {
                const me = await authAPI.checkAuth(userDataLocalStorage.id, userDataLocalStorage.token)
                if (me.statusText === 'OK') {
                    dispatch(setAuthUserData(me.data))
                }
            } catch (e) {
                return Promise
            }
        }
    }
};

export const login = (email, password) => async (dispatch) => {
    dispatch(setResponseMessage(null, null))
    dispatch(toggleIsWaitingLogin(true))
    const response = await authAPI.loginToAdminPage(email, password).catch((err) => err.response.data)
    if (response.statusText === 'OK') {
        dispatch(setAuthUserData(response.data))
        localStorage.setItem('token', JSON.stringify({
            token: response.data.token,
            id: response.data.id
        }))
        dispatch(toggleIsWaitingLogin(false))
    } else {
        dispatch(setResponseMessage(response.message, 'error'))
    }
}

export const logout = () => async (dispatch) => {
    dispatch(deleteAuthUserData())
    localStorage.removeItem('token')
}

/*export const changePasswordToNew = (newPassword) => async (dispatch, getState) => {
    const id = getState().authBlock._id
    const data = await authAPI.changePassword(id, newPassword).catch((err) => err.response.data)
    if (data.status === 201) {
        dispatch(setResponseMessage(data.data.message, 'inform'))
    } else {
        dispatch(setResponseMessage(data.data.message, 'error'))
    }
}*/

export default authReducer;