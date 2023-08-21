import { OPEN_MODAL, CLOSE_MODAL } from "../types/uiTypes";

export const openModal = (modal) => (dispatch) => {
	dispatch({ type: OPEN_MODAL, modal });
};

export const closeModal = (modal) => (dispatch) => {
	dispatch({ type: CLOSE_MODAL });
};
