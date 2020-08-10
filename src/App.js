import React, {useState} from 'react';
import axios from "axios";
import strConst from './Constants';
import { generateDateStringsArr } from './Helpers';
import './App.css';

function App() {
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [countryCode, setCountryCode] = useState();
  const [stateName, setStateName] = useState();
  const [forecast, setForecast] = useState();
  const [isForecast, setIsForecast] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState();
  const onGetForecast = async () => {
    try {
      let geoData = city;
      if (stateName !== undefined){
        geoData = geoData.concat(',', stateName);
      };
      if (countryCode !== undefined){
        geoData = geoData.concat(',', countryCode);
      }
      const res = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {params: {
        q: geoData,
        APPID: "323c6142310afa9402e3214b3c14d68e",
        units: "metric",
        lang: "ru"
      }});
      const data = res.data.list.slice(0, 8);
      setForecast(data);
      setIsForecast(true);
      setIsError(false);
    }
    catch(e){
      setIsError(true);
      if (e.response) {
        setErrorText(strConst.responseErrorText);
      } else if (e.request) {
        setErrorText(strConst.requestErrorText);
      } else {
        setErrorText(strConst.unknownErrorText);
      }
    }
  };
  const onNewForecast = () => {
    setIsForecast(false);
  };
  const dateStringArr = generateDateStringsArr();
  return (
    <div className="App">
      <h1>{strConst.welcome}</h1>
      {!isForecast ? (
        <div className="userForm">
          <input type="text" placeholder={strConst.namePlaceholder} value={name} onChange={(e) => setName(e.target.value)}></input>
          <input type="text" placeholder={strConst.cityPlaceholder} value={city} onChange={(e) => setCity(e.target.value)}></input>
          <input type="text" placeholder={strConst.countryPlaceholder} value={countryCode} onChange={(e) => setCountryCode(e.target.value)}></input>
          <input type="text" placeholder={strConst.statePlaceholder} value={stateName} onChange={(e) => setStateName(e.target.value)}></input>
          {isError && (<span className="errorText">{errorText}</span>)}
          <button onClick={onGetForecast}>{strConst.getForecatsButton}</button>
        </div>
      ) : (
        <>
          <h2>{`${strConst.hello}, ${name === undefined ? strConst.anonymous : name}. ${strConst.forecastText} ${city}`}</h2>
          <table className="forecastTable">
            <tbody>
              {forecast.map((item, index) => {
                return (
                <tr key={index}>
                  <td>{dateStringArr[index]}</td>
                  <td>{Math.round(item.main.temp)}&deg;</td>
                  <td>{item.weather[0].description}</td>
                </tr>
              )})}
            </tbody>
          </table>
                <button onClick={onNewForecast}>{strConst.newForecastButton}</button>
        </>
      )}
    
    </div>
  );
}

export default App;
