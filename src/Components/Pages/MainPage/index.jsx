import React from 'react';
import './MainPage.scss';
import wordMap from '../../../Assets/world-map.jpg'
import {Header,Grid} from "semantic-ui-react";
import {GridContainer} from "../index";
import {Link} from "react-router-dom";
import loading from '../../../Assets/loading.gif'


let MainPage = ({cityName,otherDays,currentCity,someSityOfOurCountry})=>{
    return(
        <div className='mainpage'>
            <div style={{backgroundImage: 'url(' +  wordMap + ')'}} className='mainpage__weather'>
                {currentCity
                    ?
                     <GridContainer cityName={cityName} otherDays={otherDays} currentCity={currentCity}/>
                    :
                    <img className='sitypage__loading' src={loading} alt="loading"/>
                }
            </div>

            <div className='mainpage__sities'>
                <Header className='mainpage__sities-header' align='center' as='h6'> Most popular Cities of Country</Header>
                <Grid className='mainpage__grid'>
                    <Grid.Row >
                        {someSityOfOurCountry && someSityOfOurCountry.map(item=> <Grid.Column
                            mobile={6}
                            tablet = {4}
                            computer = {4}
                            className='mainpage__grid-city'
                            key={item.id}>
                            <Link to={`/city/${item.link}`}>
                                <span>{item.name}</span>
                            </Link>
                        </Grid.Column>)}
                    </Grid.Row>
                </Grid>
            </div>
            <div className='mainpage__warning'>
                <p> Если приложение работает не корректно проверте подключение к геоданным</p>
            </div>

        </div>
    )
}

export default MainPage ;