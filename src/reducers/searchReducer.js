
import { SEARCH_UPDATE, LOAD_WEBVIEW } from '../actions/types';

const INITIAL_STATE = {
    search: '',
    loading: true,
    error: {}
};
export default (state = INITIAL_STATE, action) => {

    const { type, payload } = action;

    switch (type) {
        case SEARCH_UPDATE:
            return { ...state, [payload.prop]: payload.value }
        case LOAD_WEBVIEW:
            return { ...state, loading: payload }
        default:
            return state;
    }
}