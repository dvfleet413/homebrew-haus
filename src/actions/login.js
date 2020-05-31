export function login(credentials) {
    return (dispatch) => {
      dispatch({ type: 'START_LOGGING_IN' });
      const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accepts": 'application/json'
        },
        body: JSON.stringify(credentials)
    }
    fetch("http://localhost:8080/login", configObject)
        .then(response => {
            return response.json()
        })
        .then(json => {
            localStorage.setItem("token", json.jwt)
            dispatch({type: 'ASSIGN_CURRENT_USER', user: json.user})
        })
        .catch(error => {
            console.log(error.message)
        })
    };
  }