import React, {useState} from 'react';
import axios from "axios";
import strConst from './Constants';
import { generateDateStringsArr, parseForecastData, adviceGenerator } from './Helpers';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [stateName, setStateName] = useState('');
  const [forecast, setForecast] = useState();
  const [isForecast, setIsForecast] = useState(false);
  const [advice, setAdvice] = useState();
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState();

  const onGetForecast = async () => {
    try {
      let geoData = city;
      if (stateName){
        geoData = geoData.concat(',', stateName);
      };
      if (countryCode){
        geoData = geoData.concat(',', countryCode);
      }
      const res = await axios.get(strConst.baseUrl, {params: {
        q: geoData,
        APPID: strConst.reqParams.APPID,
        units: strConst.reqParams.units,
        lang: strConst.reqParams.lang,
      }});
      const parsedData = parseForecastData(res.data.list);
      setForecast(parsedData);
      setAdvice(adviceGenerator(parsedData));
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
          <h2>{`${strConst.hello}, ${name.length === 0 ? strConst.anonymous : name}. ${strConst.forecastText} ${city}`}</h2>
          <p className="adviceText">{advice}</p>
          <table className="forecastTable">
            <tbody>
              {forecast.map((item, index) => {
                return (
                <tr key={index}>
                  <td>{dateStringArr[index]}</td>
                  <td>{`${strConst.temperature}: ${item.temp}`}&deg;</td>
                  <td>{`${strConst.windSpeed}: ${item.wind}${strConst.unit}`}</td>
                  <td>{item.description}</td>
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
