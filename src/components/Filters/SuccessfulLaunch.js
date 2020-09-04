import React from 'react'
import { withRouter} from 'react-router-dom'
import { useContext } from 'react'
import SpacexContext from '../../context/Spacexontext'
import '../Filters/Filter.css'

const SuccessfulLaunch = (props) => {

    const spacexContext = useContext(SpacexContext)
    const {successfulLaunch} = spacexContext
    const onSuccess = (e)=>{
        console.log(e.target.value);
        successfulLaunch(e.target.value)
        props.history.push('/Successful-Launch')
    }
    return (
        <div>
           <p className="LHead" >Successful Launch</p>
            <div className="grid-2-filter">
            <button className="btn btn-color" value='true' onClick={onSuccess}>True</button>
            <button className="btn btn-color" value ='false' onClick={onSuccess}>False</button>
        </div>
        </div>
    )
}

export default  withRouter(SuccessfulLaunch)
