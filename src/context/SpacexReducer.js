
import {GET_ALL_MISSIONS,ERROR,LAUNCH_YEAR,CLEAR_FILTER,SUCCESS_LAUNCH,SUCCESS_LANDING }  from './types'

export default (state,action) =>{
    switch(action.type) {

        case GET_ALL_MISSIONS:
      return {
          ...state,
        
        missions: action.payload,
        
       
      };
        case LAUNCH_YEAR : return {
          ...state,
          missions :action.payload
        };

        case SUCCESS_LAUNCH : return {
          ...state,
          missions : action.payload
        };
        case SUCCESS_LANDING: return {
          ...state,
          missions : action.payload
        };
        case CLEAR_FILTER:
          return {
              ...state,
            
            missions: action.payload,
            
           
          };
       
        default : return  state
    }
}

// export default SpacexReducer

