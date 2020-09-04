import React from 'react'
import { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import '../Filters/Filter.css'
import SpacexContext from '../../context/Spacexontext'




const LaunchYear = (props) => {


//   const [year,setYear] = useState(null)
//   const launchYear = [2006,20007]
   const spacexContext = useContext(SpacexContext)

   const { onYearClicked} = spacexContext

  
const onYearClickedd = (e)=>{
    console.log(e.target.value);
    onYearClicked(e.target.value)
    props.history.push('/Launch-Year')

    
}

    return (
        <div>
            <p className="LHead">Launch Year</p>
            <div className="grid-2-filter">
                <button className='btn btn-color' value={2006} onClick={onYearClickedd}>2006</button>
                <button className='btn btn-color' value={2007} onClick={onYearClickedd}>2007</button>
                <button className='btn btn-color' value={2008} onClick={onYearClickedd}>2008</button>
                <button className='btn btn-color' value={2009} onClick={onYearClickedd}>2009</button>  
                <button className='btn btn-color' value={2010} onClick={onYearClickedd}>2010</button>
                <button className='btn btn-color' value={2011} onClick={onYearClickedd}>2011</button>
                <button className='btn btn-color' value={2012} onClick={onYearClickedd}>2012</button>
                <button className='btn btn-color' value={2013} onClick={onYearClickedd}>2013</button>
                <button className='btn btn-color' value={2014} onClick={onYearClickedd}>2014</button>
                <button className='btn btn-color' value={2015} onClick={onYearClickedd}>2015</button>
                <button className='btn btn-color' value={2016} onClick={onYearClickedd}>2016</button>
                <button className='btn btn-color' value={2017} onClick={onYearClickedd}>2017</button>
                <button className='btn btn-color'value={2018} onClick={onYearClickedd}>2018</button>
                <button className='btn btn-color' value={2019} onClick={onYearClickedd}>2019</button>
                <button className='btn btn-color' value={2020} onClick={onYearClickedd}>2020</button>
            
        </div>
        </div>

        
      
    )
}

export default  withRouter(LaunchYear)

