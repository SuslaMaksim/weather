
import {getData} from "../Components/API/api";
const setCurrentsCity = "SET_CURRENTS_CITY";

let InitialState = {

    citysName: '',
    apiKeys: 'db775b25dcce0743bac3b9c39ee3610f',
    currentCitysDays: null


}

let mainReducer = (state = InitialState, action)=>{
    switch(action.type){
        case setCurrentsCity:
            return {
                ...state,
                citysName: action.cityName,
                currentCitysDays: action.daily
            }
        default: return state
    }
}
export default mainReducer;


let setCurrentsCities  = (cityName,daily) => ({type:setCurrentsCity, cityName,daily});

export let getWeatherByCityName = (cityName) => async (dispatch,getState)=>{
    let apiKey = getState().citysData.apiKeys
    try {
        let date = await getData.getWeatherByCityName(cityName,apiKey)
        let {lat,lon} = date.coord;
        let data = await  getData.getWeatherByCoordinates(lat,lon,apiKey);
        dispatch(setCurrentsCities(cityName,data.daily))
    }catch (e) {
        console.error(e)
    }
}





