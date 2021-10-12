import axios from 'axios'

// eslint-disable-next-line import/prefer-default-export
export const fetchDataByGroupIds =
    (ids, collection, load, success) => (dispatch) => {
        dispatch({
            type: load,
        })
        axios
            .get(`${process.env.REACT_APP_API}/get_all_items`, {
                params: {
                    collection,
                    id: JSON.stringify(ids),
                },
            })
            .then((res) => {
                dispatch({
                    type: success,
                    data: res.data,
                })
            })
            .catch((e) => console.log(e))
    }