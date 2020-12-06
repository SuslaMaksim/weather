import React,{useEffect} from 'react';
import {usePositionHook} from "../../../UsePosition/UsePositionHook";
import {connect} from "react-redux";
import {MainPage} from "../../index";
import {getWeatherByCoordinate} from "../../../../Reducers/MainReduser";

let ContainerMainPage = ({cityName,currentCity,otherDays,getWeatherByCoordinate,someSityOfOurCountry})=>{

    let {latitude,longitude} = usePositionHook()

    useEffect(()=>{
        if(latitude && longitude){
            getWeatherByCoordinate(latitude,longitude)
        }
    },[getWeatherByCoordinate,latitude,longitude])


    return(
        <MainPage cityName={cityName}
                  otherDays={otherDays}
                  currentCity={currentCity}
                  someSityOfOurCountry={someSityOfOurCountry}
        />
    )
}

let mapStateToProps =(state)=>{

    return{
        cityName: state.data.cityName,
        currentCity: state.data.currentCity,
        otherDays: state.data.currentCitysOhterDays,
        someSityOfOurCountry: state.data.someSityOfOurCountry,
    }
}


export default connect(mapStateToProps,{getWeatherByCoordinate})(ContainerMainPage)
