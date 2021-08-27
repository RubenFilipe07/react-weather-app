import React, { Fragment } from 'react';
import './loading.css'
import loadingAnimation from './loading.gif'

const Loading =  () =>{
    return(
         <Fragment>
             <h1 className="center">Carregando informações do clima</h1>
            <img class="loading" src={loadingAnimation} alt="loading" />
        </Fragment>
    )
}

export default Loading;
