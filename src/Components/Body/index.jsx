import React from 'react';
import './Body.scss';
import {ContainerCityPage,ContainerMainPage } from "../Pages";
import {Route,Switch} from 'react-router-dom';


let Body = (props)=>{

    return(
        <div className='body'>
            <Switch>
                <Route exact path='/' component = {()=> <ContainerMainPage/>}/>
                <Route path='/city/:id' component = {()=> <ContainerCityPage/>}/>
            </Switch>
        </div>
    )
}

export default Body ;

