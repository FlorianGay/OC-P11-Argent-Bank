export const SET_TOKEN = "SET_TOKEN";
export const SET_USER = "SET_USER";
export const SET_LOGIN = "SET_LOGIN";


export const setLogin = (isLogin) => (dispatch) =>{
  dispatch({
    type: SET_LOGIN,
    payload: isLogin,
  }); 
}

export const setToken = (token) => (dispatch) => {
    dispatch({
      type: SET_TOKEN,
      payload: token,
    });
  };
  
  export const setUser = (user) => (dispatch) => {
    dispatch({
      type: SET_USER,
      payload: user,
    });
  };


  