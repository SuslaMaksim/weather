import React from 'react';
import './SityPage.scss'
import {Grid,} from "semantic-ui-react";
import {findeIcon, getWeekDay} from "../../Helper/helper";
import {Button,Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";



let SityPage = ({cityName,currentCitysDays})=>{



    let date = new Date(currentCitysDays[0].dt *1000).toLocaleDateString();
    let weekDay = getWeekDay(new Date(currentCitysDays[0].dt *1000));

    return(
        <>
        <div className='sitypage'>
            <div className='sitypage__content'>
                <Grid  >
                    <Grid.Column align ='center' width={16} className='sitypage__content-header'>
                        <span> {cityName} </span>
                    </Grid.Column>
                    <Grid.Row>
                        <Grid.Column  width = {16} className='sitypage__content-day'>
                            <span>{`${weekDay} ${date}`}</span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='sitypage__content-row'>

                        {currentCitysDays && currentCitysDays.map(item=> {
                        return(
                            <Grid.Column  key = {item.dt} tablet = {2} mobile = {4} computer={2} align = 'center'>
                                <div className='mainpage__bord-clouds'>
                                    <span>{getWeekDay(new Date(item.dt *1000))}</span>
                                    <div className='mainpage__bord-icon'>
                                        <img src={`//openweathermap.org/img/wn/${findeIcon(item)}@2x.png`} alt="icon"/>
                                    </div>
                                    <span className='mainpage__bord-degrees'>{Math.round(item.temp.day - 273)}</span>
                                </div>
                            </Grid.Column >
                        )}
                        )}

                    </Grid.Row>
                    <Grid.Row className='sitypage__content-speed'>
                        <Grid.Column width = {16}  align = 'center'>
                            <span>Скорость ветра м/c</span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className= 'sitypage__content-wind'  >
                    {
                        currentCitysDays && currentCitysDays.map(item=> {
                            return(

                                <Grid.Column key = {item.dt} className= 'sitypage__content-wind-column' tablet = {2} mobile = {4} computer={2}  align = 'center'>
                                    <span className= 'sitypage__content-time' >{getWeekDay(new Date(item.dt *1000))}</span>
                                    <span className='mainpage__bord-wind'>{Math.round(item.wind_speed)}</span>
                                </Grid.Column>
                                )})
                    }
                    </Grid.Row>

                </Grid>
            </div>
        </div>
            <Link to={'/'}>
                <Button className = 'sitypage__button' >
                    <Icon name = 'arrow left'/>
                    Вернуться
                </Button>

            </Link>

            </>
    )
}

export default SityPage;