
import {getData} from "../Components/API/api";
const setCity = "SET_CITY";
const currentCity = "SET_CURRENT_CITY";

let InitialState = {

        cityName: '',
        apiKey: 'db775b25dcce0743bac3b9c39ee3610f',
        date: new Date(1607126352*1000).toLocaleDateString(),
        currentCity: null,
        currentCitysOhterDays: [],
        someSityOfOurCountry: [
            {
                name: 'Винница',
                link: 'Vinnytsia',
                id: 1
            },
            {
                name: 'Киев',
                link: 'Kyiv',
                id: 2
            },
            {
                name: 'Харьков',
                link: 'Kharkiv',
                id: 3
            },
            {
                name: 'Одесса',
                link: 'Odesa',
                id: 4
            },
            {
                name: 'Ивано-Франковск',
                link: 'Ivano-Frankivsk',
                id: 5
            },
            {
                name: 'Чернигов',
                link: 'Chernihiv',
                id: 6
            },
            {
                name: 'Каменец-Подольский',
                link: 'Kamianets-Podilskyi',
                id: 7
            },
            {
                name: 'Полтава',
                link: 'Poltava',
                id: 8
            },
            {
                name: 'Херсон',
                link: 'Kherson',
                id: 9
            },
            {
                name: 'Одесса',
                link: 'Odesa',
                id: 10
            },
            {
                name: 'Николаев',
                link: 'Mykolaiv',
                id: 11
            },
            {
                name: 'Донецк',
                link: 'Donetsk',
                id: 12
            },
            {
                name: 'Кривой Рог',
                link: 'Kryvyi Rih',
                id: 13
            },
            {
                name: 'Львов',
                link: 'Lviv',
                id: 14
            },
            {
                name: 'Запорожье',
                link: 'Zaporizhzhia',
                id: 15
            },


            {
                name: 'Днепр',
                link: 'Dnipro',
                id: 16
            },

        ]


}

let mainReducer = (state = InitialState, action)=>{
    switch(action.type){
        case currentCity:
            return {
                ...state,
                cityName: action.cityName,
                currentCity: {...action.city},
                currentCitysOhterDays: action.daily.filter(item => new Date(item.dt *1000).toLocaleDateString() !== state.date)
            }
        default: return state
    }
}
export default mainReducer;


let setCurrentCityCreator  = (city,cityName,daily) => ({type:currentCity ,city, cityName,daily});

export let getWeatherByCoordinate = (latitude,longitude) => async (dispatch,getState)=>{

    let apiKey = getState().data.apiKey;
    let {name} = await getData.getCityNameByCoordinates(latitude,longitude,apiKey);
    let {current,daily} = await  getData.getWeatherByCoordinates(latitude,longitude,apiKey);

    dispatch(setCurrentCityCreator(current,name,daily))


}





