import React,{useEffect} from 'react';
import {connect} from "react-redux";
import {CityPage} from "../../index";
import {getWeatherByCityName} from "../../../../Reducers/OtherCitysReduser";
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import loading from '../../../../Assets/loading.gif'


let ContainerCityPage = ({getWeatherByCityName,cityName,currentCitysDays,match,history})=>{


    let city = match.params.id;


    useEffect(()=>{
            if(city){getWeatherByCityName(city)}
    },[getWeatherByCityName,city])

    return(
        <>
        {currentCitysDays
            ?
            <CityPage cityName={cityName} currentCitysDays={currentCitysDays} />
            :
            <div className='sitypage' style={{marginTop:'10px'}}><img className='sitypage__loading' src={loading} alt="loading"/></div>}
        </>
    )
}

let mapStateToProps =(state)=>{
    return{
        cityName: state.citysData.citysName,
        currentCitysDays: state.citysData.currentCitysDays
    }
}


export default compose(

        connect(mapStateToProps,{getWeatherByCityName}),
        withRouter,
        )(ContainerCityPage)