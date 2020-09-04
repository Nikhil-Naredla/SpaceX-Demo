import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import SpacexContext from '../../context/Spacexontext'
import Spinner from '../Utilities/Spinner'
import MissionItems from '../Missions/MissionItems'
import '../Missions/Mission.css'

const SuccessfulLaunchItems = () => {

    const spacexContext = useContext(SpacexContext)
    const { missions,successfulLaunch} = spacexContext
   


    useEffect(() => {
        successfulLaunch();
      
        // eslint-disable-next-line
      }, []);

      if(missions && missions.length === 0){
        return <Spinner/>
      }
      else{
    
      
    
        
        return (
         
       
              <div  className='grid-4-mission  missions' >
    
                { 
                   missions.map((mission)=>{
                       
                          return  <MissionItems key={mission.flight_number}  mission = {mission} />
                   })
               }
     
                
             </div>
        
           
        )
    }
}

export default SuccessfulLaunchItems
