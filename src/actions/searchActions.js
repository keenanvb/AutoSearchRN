import { SEARCH_UPDATE, LOAD_WEBVIEW } from './types';
import axios from 'axios'

export const searchUpdate = ({ prop, value }) => {
    return {
        type: SEARCH_UPDATE,
        payload: { prop, value }
    };
};

export const ping = () => {
    return async (dispatch, getState) => {
        try {
            const search = getState().search.search;
            let res = await axios.get(`https://${search}`);
            if (res.status === 200 && res.data) {
                dispatch({ type: LOAD_WEBVIEW, payload: false })
            }
        } catch (error) {
            console.log('error')
            dispatch({ type: LOAD_WEBVIEW, payload: true })
        }
    }
}