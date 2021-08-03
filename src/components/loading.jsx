import React, { Fragment } from 'react';
import './loading.css'
import loadingAnimation from './loading.gif'

const Loading =  () =>{
    return(
         <Fragment>
             <h1 className="center">loading weather information</h1>
            <img src={loadingAnimation} alt="loading" />
        </Fragment>
    )
}

export default Loading;
