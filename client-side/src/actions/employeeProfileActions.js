import {
    EMPLOYEE_PROFILE_REQUEST, 
    EMPLOYEE_PROFILE_SUCCESS, 
    EMPLOYEE_PROFILE_FAIL    
} from '../constants/employeeProfileConstants'

export const getEmployeeProfile = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: EMPLOYEE_PROFILE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const { data } = await axios.get(`http://localhost:3000/api/eployees/${id}`)
  
      dispatch({
        type: EMPLOYEE_PROFILE_SUCCESS,
        payload: data,
      })
    } catch (error) {
    //   const message =
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message
    //   if (message === 'Not authorized, token failed') {
    //     dispatch(logout())
    //   }
      dispatch({
        type: EMPLOYEE_PROFILE_FAIL,
        payload: message,
      })
    }
  }
  