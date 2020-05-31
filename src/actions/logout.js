export function logout() {
    return (dispatch) => {
        dispatch({type: 'LOGOUT'})
        localStorage.removeItem('token')
        console.log("In logout action")
    }
}