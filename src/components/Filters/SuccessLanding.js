import React from 'react'
import { withRouter} from  'react-router-dom'
import { useContext } from 'react'
import SpacexContext from '../../context/Spacexontext'
import '../Filters/Filter.css'

const SuccessLanding = (props) => {
    const spacexContext = useContext(SpacexContext)
    const {sucessfullLand} = spacexContext
    const onSuccessLand = (e)=>{
        sucessfullLand(e.target.value)
        props.history.push('/SucessFul-Landing')

    }
    return (
        <div>
            <p className="LHead">Successful Landing</p>
            <div className="grid-2-filter">
            <button className="btn btn-color" value='true' onClick={onSuccessLand} >True</button>
            <button className="btn btn-color" value='false' onClick={onSuccessLand} >False</button>
        </div>
        </div>
    )
}

export default withRouter(SuccessLanding)
