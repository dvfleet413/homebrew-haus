import { config } from '../constants';

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
        
        fetch(`${config.url.API_URL}/signup`, configObject)
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
                error.json().then(data => {
                    for(const key in data){
                        const category = key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')
                        const message = data[key][0].charAt(0).toUpperCase() + data[key][0].slice(1)
                        dispatch({type: 'ADD_ERROR', errorMessage: `${category}: ${message}`})
                    }
                })
            })
    };
  }