import React from 'react'


import ClearFilter from './ClearFilter'
import LaunchYear from './LaunchYear'
import SuccessfulLaunch from './SuccessfulLaunch'
import SuccessLanding from './SuccessLanding'
import '../Filters/Filter.css'





const Filters = () => {

   
    return (
        <div className='Filter container'>
            <h2>Filters</h2>
       <div>
           <LaunchYear/>
       </div>
       <br/>
       <div>
           <SuccessfulLaunch />
       </div>
       <br/>
       <div>
           <SuccessLanding />
       </div>
       <br/>
       <center>
           <ClearFilter/>
       </center>
            
        </div>
    )
}

export default Filters

