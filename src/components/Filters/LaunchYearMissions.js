import React from 'react'
import { useContext,useEffect } from 'react'
import SpacexContext from '../../context/Spacexontext'
import MissionItems from '../Missions/MissionItems'
import Spinner from '../Utilities/Spinner'

import '../Missions/Mission.css'




const LaunchYearMissions = () => {

    const spacexContext = useContext(SpacexContext)
    const { missions,onYearClicked } = spacexContext
   


    useEffect(() => {
        onYearClicked()
      
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

export default LaunchYearMissions
