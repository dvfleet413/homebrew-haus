export function signup(credentials, history) {
    return (dispatch) => {
        dispatch({ type: 'START_SIGNUP' });
        
        const configObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": 'application/json'
            },
            body: JSON.stringify({user: credentials})
        }
        
        fetch("http://localhost:8080/signup", configObject)
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json.jwt)
                localStorage.setItem("token", json.jwt)
                console.log(json.user)
                const user = JSON.parse(json.user)
                dispatch({type: 'ASSIGN_CURRENT_USER', user: user})
                history.push(`/`)
            })
            .catch(error => {
                console.log(error.message)
            })
    };
  }