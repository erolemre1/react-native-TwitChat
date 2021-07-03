import firebase from "firebase";


export const EMAIL_CHANGED = "email_changed";
export const PASSWORD_CHANGED="password_changed";   
export const LOGIN_USER_SUCCES="login_user_succes";
export const LOGIN ="login";
export const LOGIN_USER_FAILED= "login_user_failed";

export const emailChanged = (text) =>{

return{
type:EMAIL_CHANGED,
payload:text
} 
}
export const  passwordChanged = (password =>{
    return{
        type:PASSWORD_CHANGED,
        payload: password
    }
})

export const loginUser = (email, password) =>{
return (dispatch)=>{
    dispatch({
        type:LOGIN  
    });
    firebase.auth().signInWithEmailAndPassword(email , password)
    .then(user => loginsucces(dispatch, user)
    ) .catch(()=>{
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(user => loginsucces(dispatch, user)
    .catch(()=>{
        dispatch({
            type:LOGIN_USER_FAILED,  
        })
    })
    )
}) 

}
}
    
const loginsucces=( dispatch, user)=>{
    dispatch({
        type: LOGIN_USER_SUCCES,
    payload:user 
})
}
