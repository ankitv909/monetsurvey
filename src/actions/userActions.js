import axios from "axios";

export function fetchUser() {
    return function(dispatch) {
        dispatch({type: "FETCH_TWEETS"});
        axios.get("http://rest.learncode.academy/api/reacttest/tweets")
            .then((response) => {
                dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
            })
    }
}

export function setUser(name) {
    return {
        type: 'SET_USER',
        payload: {
            id,
            name,
        },
    }
}
