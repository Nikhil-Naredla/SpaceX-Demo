import React from 'react'
import Filters from '../Filters/Filters'
import Missions from '../Missions/Missions'
import Footer from '../Utilities/Footer'
import { Switch, Route } from 'react-router-dom'
import LaunchYearMissions from '../Filters/LaunchYearMissions'
import SuccessfulLaunchItems from '../Filters/SuccessfulLaunchItems'
import SuccessfulLandingItems from '../Filters/SuccessfulLandingItems'

import '../Home/Home.css'




const Home = ()=>{


    return(
        <div className="Home ">
            <h1 style={{marginLeft:'45px'}}>SpaceX Launch Programs</h1>
           
            <div className="grid-2">
                <div className='card '>

                    <div className='Filter' >
                      
                        <Filters />
                   
                    </div>
                  
                </div>

                <div >
                    {/* <Missions /> */}
                    <Switch>
                        <Route path='/' exact component={Missions} />
                        <Route path='/Launch-Year' exact component={LaunchYearMissions} />
                        <Route  path='/Successful-Launch' exact component={SuccessfulLaunchItems} />
                        <Route path='/SucessFul-Landing' exact component={SuccessfulLandingItems} />
                    </Switch>
                </div>

            </div>
            <br/>
            <br/>
            <div>
            <Footer/>
            </div>

            </div>
     
    )
}

export default Home