import React from 'react'
import  SpacexContext from './Spacexontext';

import {useReducer,useEffect} from 'react';
import axios from 'axios'

import {GET_ALL_MISSIONS,ERROR,LAUNCH_YEAR,CLEAR_FILTER,SUCCESS_LAUNCH,SUCCESS_LANDING ,SET_LOADING}  from './types'
import SpacexReducer from './SpacexReducer';



const SpacexState = (props)=>{

   



   const initialState  = {
       missions :[],
       error  : null,
       


   } 


   const [state,dispatch] = useReducer(SpacexReducer,initialState)





//    get missions

const getAllMissions = async()=>{

    try{
      
        const response = await axios.get('https://api.spacexdata.com/v3/launches?limit=8')
        localStorage.setItem('getAll',JSON.stringify(response.data))
        dispatch({
            type : GET_ALL_MISSIONS,
            // payload : response.data
            payload : JSON.parse(localStorage.getItem('getAll'))

        })

    }
    catch(err){
       
      
    
        dispatch({
            type : ERROR,
       
            
        })
       
    }   
}

//  show results on specific launch year

const onYearClicked = async(year)=>{
    try{
      
      
        const response = await axios.get(`https://api.spacexdata.com/v3/launches?launch_year=${year}`)
        // localStorage.setItem('LaunchYear',JSON.stringify(response.data))
        dispatch({
        type : LAUNCH_YEAR,
        payload :response.data
        // payload : JSON.parse(localStorage.getItem('LaunchYear'))
        })
    }
    
    catch(err){
        console.log(err);
        dispatch({
            type : ERROR,

        })
    }    
      
}






// get all sucessful or unsuccessful launch missions
const successfulLaunch =async (bool)=>{

  try{
     

    const response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${bool}`)

    dispatch({
        type : SUCCESS_LAUNCH,
        payload : response.data
    })
  }
  catch(err){
     
      dispatch({
        type : ERROR,

    })
  }

}
  


// get all successful and unsuccessful landing

const sucessfullLand = async(bool)=>{
    try{
        

         const response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=${bool}`)

    dispatch({
        type: SUCCESS_LANDING ,
        payload : response.data
    })
    }
    catch(err){
        
        dispatch({
            type : ERROR,

        })
    }  
       
}





    return(


        <SpacexContext.Provider value = {{
            missions : state.missions,
            error : state.error,
            getAllMissions,
            onYearClicked,
            successfulLaunch,sucessfullLand,

          

        }}>
            {props.children}
        </SpacexContext.Provider>
    )
}

export default SpacexState
