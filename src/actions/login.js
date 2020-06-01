export function login(credentials, history) {
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
            if (!response.ok){ throw response }
            return response.json()
        })
        .then(json => {
            localStorage.setItem("token", json.jwt)
            const user = JSON.parse(json.user)
            dispatch({type: 'ASSIGN_CURRENT_USER', user: user})
            history.push(`/`)
        })
        .catch(error => {
            console.log(error.statusText)
            history.push('/login')
        })
    };
  }