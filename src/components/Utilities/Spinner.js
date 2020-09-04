import React from 'react'
import spinner from './spinner.gif'

const Spinner = ()=>{

    return(
        <center >
         <img src={spinner} alt="Loading..." style={{ width: '400px', marginTop: '30px', display: 'block' }} />

        </center>
    )
}



export default Spinner