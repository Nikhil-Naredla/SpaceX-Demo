import React, { useContext } from 'react'
import { useEffect } from 'react'
import MissionItems from '../Missions/MissionItems'
import SpacexContext from '../../context/Spacexontext'
import Spinner from '../Utilities/Spinner'


import '../Missions/Mission.css'

const SuccessfulLandingItems = () => {
    const spacexContext = useContext(SpacexContext)
    const { missions, sucessfullLand} = spacexContext
   


    useEffect(() => {
        sucessfullLand();
      
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

export default SuccessfulLandingItems
