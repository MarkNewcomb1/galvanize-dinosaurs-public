import * as actionTypes from './actions'

const initialState = {
    showPreview: false,
    str: '',
    successMessage: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_PREVIEW:
            return {
                ...state,
                showPreview: !state.showPreview
            }
        case actionTypes.SUBMIT_FORM:
            action.e.preventDefault()
            return {
                ...state,
                str: new FormData(action.e.target).get('form'),
                successMessage: "Your Application was submitted!"
            }
        case actionTypes.HANDLE_KEYUP:
            return {
                ...state,
                str: action.e.target.value
            }
        default:
            return state
    }
}

export default reducer