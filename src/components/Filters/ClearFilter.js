import React from 'react'
import '../Filters/Filter.css'
import { withRouter } from 'react-router-dom'



const ClearFilter = (props) => {

    const onClear = ()=>{
    props.history.push('/')
    }
    return (
        <div style={{marginBottom:'20px'}}>
           <button className='btn btn-color' onClick={onClear}>Clear Filter</button> 
        </div>
    )
}

export default withRouter(ClearFilter)
