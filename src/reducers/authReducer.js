import  { EMAIL_CHANGED, 
          PASSWORD_CHANGED,
        LOGIN_USER_SUCCES,
          LOGIN,
} from  "../actions";

const INITIAL_STATE ={
    
        email: '',
        password:"",
        user:{},
        loading:true,
        error:"Giriş Yapılıyor"
      
      
}
export default (state=INITIAL_STATE, action) =>{
    switch (action.type) {
        case EMAIL_CHANGED:
            return{...state, email:action.payload}
        case PASSWORD_CHANGED:
            return {...state, password:action.payload}
                case LOGIN_USER_SUCCES:
                    return{...state,...INITIAL_STATE, user: action.payload}
                    case LOGIN:
                        return{...state, loading:true, error:"Giriş Yapılıyor"}
             default:
           return state;
    }
}