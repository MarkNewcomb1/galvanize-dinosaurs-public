import * as actionTypes from "./actions";

const initialState = {
  showPreview: false,
  str: "",
  successMessage: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_PREVIEW:
      return {
        ...state,
        showPreview: !state.showPreview
      };
    case actionTypes.SUBMIT_FORM:
      return {
        ...state,
        str: action.formData,
        successMessage: "Your Application was submitted!"
      };
    case actionTypes.HANDLE_KEYUP:
      return {
        ...state,
        str: action.str
      };
    default:
      return state;
  }
};

export default reducer;
