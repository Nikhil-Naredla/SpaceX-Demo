import React,{useContext,useEffect} from 'react'
import SpacexContext from '../../context/Spacexontext'
import MissionItems from './MissionItems'
import Spinner from '../Utilities/Spinner'



const Missions = () => {

    const spacexContext = useContext(SpacexContext)

    const { missions,getAllMissions} = spacexContext
   


    useEffect(() => {
        getAllMissions();
      
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

export default Missions
