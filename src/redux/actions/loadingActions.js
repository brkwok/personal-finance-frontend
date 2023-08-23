import { SET_LOADING, FINISH_LOADING } from "../types/uiTypes";

export const setLoading = () => (dispatch) => {
	dispatch({ type: SET_LOADING });
};

export const finishLoading = () => (dispatch) => {
	dispatch({ type: FINISH_LOADING });
};
