import React from 'react';
import './Body.scss';
import {ContainerCityPage,ContainerMainPage } from "../Pages";
import {Route,Switch} from 'react-router-dom';


let Body = (props)=>{

    return(
        <div className='body'>
            <Switch>
                <Route exact path='/' component = {()=> <ContainerMainPage/>}/>
                <Route exact path='/city/:id' component = {()=> <ContainerCityPage/>}/>
                <Route component={()=> <div className='body__notFound'>404 The page not found</div>} />
            </Switch>
        </div>
    )
}

export default Body ;

