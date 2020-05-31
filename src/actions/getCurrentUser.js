export function getCurrentUser(token) {
    return (dispatch) => {
        dispatch({ type: 'START_GETTING_CURRENT_USER' });
        fetch("http://localhost:8080/get_current_user", {
            headers: {
                "Auth": token
            }
        })
            .then(response => {
                return response.json()
            })
            .then(json => {
                const user = JSON.parse(json.user)
                dispatch({type: 'ASSIGN_CURRENT_USER', user: user})
            })
    };
  }