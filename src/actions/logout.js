export function logout(history) {
    return (dispatch) => {
        dispatch({type: 'LOGOUT'})
        localStorage.removeItem('token')
        history.push('/')
    }
}