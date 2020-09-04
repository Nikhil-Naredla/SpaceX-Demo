import React from 'react'

import '../Missions/Mission.css'

const MissionItems = ({mission}) => {

    const {mission_name,flight_number,launch_year,launch_success,mission_id,links,land_success} = mission
 
    console.log(land_success);
 const launch_success_1 = '{launch_success}'
 const launch_year_1 = '{launch_year}'
const  mission_id_1 = '{mission_id}'
const land_success_1 = '{land_success}'
 

    return (
        
        
          <div className='mission_card text-center'>
          
         
             <img src={links.mission_patch} alt="no_poster" className="card__img"/>
            
            <div className="card__body">
            <h5 style={{color:"#4169E1"}}>{mission_name} # {flight_number}</h5>
           </div>


        

         <div><h5>Mission Ids: <span style={{color:"#4169E1"}}>{mission_id.length ? mission_id : mission_id_1}</span></h5></div>
         <div><h5>Launch Year: <span style={{color:"#4169E1"}}>{launch_year ? launch_year : launch_year_1}</span></h5></div>
         <div><h5>Successful Launch: <span style={{color:"#4169E1"}}>{String(launch_success)}</span></h5></div>
          <div><h5>Successful Landing: <span style={{color:"#4169E1"}}>{land_success ? land_success : land_success_1}</span></h5></div>

       
        </div>
       
       
    )
    
}

// MissionItems.defaultProps = {
// mission_id : <ul><li>{'{list of mission_ids}'}</li></ul>,
// launch_year : '{launch_year}',
// launch_success : '{launch_success}',
// land_success : '{land_success}'
// }

export default MissionItems
