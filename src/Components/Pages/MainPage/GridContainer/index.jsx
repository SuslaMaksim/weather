import React from 'react';
import '../MainPage.scss';
import {Grid} from "semantic-ui-react";
import {getWeekDay,getTime,findeIcon } from "../../../Helper/helper";


let GridContainer = ({cityName,otherDays,currentCity})=>{



        let date = new Date(currentCity.dt *1000).toLocaleDateString();
        let weekDay = getWeekDay(new Date(currentCity.dt *1000));
        let tem = Math.round(currentCity.temp - 273);
        let {description} =   currentCity.weather[0];
        let feelsLile = Math.round(currentCity.feels_like - 273);
        let sunrise = getTime(new Date(currentCity.sunrise *1000));
        let sunset = getTime(new Date(currentCity.sunset *1000));
        let icon = findeIcon(currentCity)


    return(
        <div className='mainpage__weather-content'>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column  width={16} className='mainpage__weather-header'>
                                <span>{cityName}</span>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{marginTop: '20px'}}>
                            <Grid.Column mobile={16} tablet={6} computer={6} className='mainpage__weather-description'>
                                <Grid.Column width={16} className='mainpage__weather-date'>
                                    <span>{weekDay}</span>
                                    <span> {date} </span>
                                </Grid.Column>
                                <Grid.Column width={16} className='mainpage__weather-img'>
                                    <div className='mainpage__weather-degrees'>
                                        <span className='mainpage__weather-tem'>
                                            {tem }
                                            <span className= 'mainpage__weather-deg'>&deg;</span>
                                        </span>
                                    </div>
                                    <span>{description}</span>
                                    <div className='mainpage__weather-icon'><img src={`//openweathermap.org/img/wn/${icon}@2x.png`}  alt="icon"/></div>
                                </Grid.Column>
                                <Grid.Column width={16} className='mainpage__weather-text'>
                                    <span>По ощущению</span> <span className='mainpage__weather-number'> <span>{feelsLile}</span></span>
                                </Grid.Column>
                                <Grid.Column width={16} className='mainpage__weather-text'>
                                    <span>Ветер</span> <span className='mainpage__weather-number'> <span>{currentCity.wind_speed}</span> м/c</span>
                                </Grid.Column>
                                <Grid.Column width={16} className='mainpage__weather-text'>
                                    <span>Влажность</span> <span className='mainpage__weather-number'> <span>{currentCity.humidity}%</span></span>
                                </Grid.Column>
                                <Grid.Column width={16} className='mainpage__weather-text'>
                                    <span>Рассвет</span> <span
                                    className='mainpage__weather-number'> {sunrise} </span>
                                </Grid.Column>
                                <Grid.Column width={16} className='mainpage__weather-text'>
                                    <span>Закат</span> <span
                                    className='mainpage__weather-number'> {sunset} </span>
                                </Grid.Column>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={10} computer={10} className='mainpage__weather-bord'>
                                 <Grid >
                                     {
                                         otherDays && otherDays.map(item=> {

                                      return(
                                             <Grid.Column align='center' mobile={3} tablet={2} computer={2} key = {item.dt}>
                                             <div className='mainpage__bord-clouds'>
                                                 <span>{getWeekDay(new Date(item.dt *1000))}</span>
                                                 <div className='mainpage__bord-icon'>
                                                     <img src={`//openweathermap.org/img/wn/${findeIcon(item)}@2x.png`} alt="icon"/>
                                                 </div>
                                                 <span className='mainpage__bord-degrees'>{Math.round(item.temp.day - 273)}</span>
                                             </div>
                                         </Grid.Column> )})
                                     }

                                    <Grid.Row className='mainpage__bord-second'>
                                        <Grid.Column width={16} align='center'>
                                            <span>Скорость ветра м/c</span>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row className='mainpage__bord-third'>
                                        {
                                            otherDays && otherDays.map(item=> {
                                                return(
                                                    <Grid.Column key = {item.dt} mobile={3} tablet={2} computer={2} align='center'>
                                                        <span className='mainpage__bord-day'>{getWeekDay(new Date(item.dt *1000))}</span>
                                                        <span className='mainpage__bord-wind'>{Math.round(item.wind_speed)}</span>
                                                    </Grid.Column> )})
                                        }

                                    </Grid.Row>
                                 </Grid>

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
        </div>
    )
}

export default GridContainer ;