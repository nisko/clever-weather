import strConst from './Constants';

const msInOneHours = 1000 * 3600;
const forecastIntervalInHours = 3;
const hoursInDay = 24;

export function generateDateStringsArr(){
 
  const dateStringArr = [strConst.now];
  const timeInms = new Date().getTime();
  for (let i = 1; i < hoursInDay / forecastIntervalInHours; i += 1){
    const forecastTime = new Date(timeInms + msInOneHours * forecastIntervalInHours * i);
    const minutes = forecastTime.getMinutes().toString().length === 1 ? `0${forecastTime.getMinutes()}` : forecastTime.getMinutes();
    const hours = forecastTime.getHours().toString().length === 1 ? `0${forecastTime.getHours()}` : forecastTime.getHours();
    const dateStr = `${strConst.months[forecastTime.getMonth()]} ${forecastTime.getDate()} ${hours}:${minutes}`; 
    dateStringArr.push(dateStr);
}
  return dateStringArr;
};

export function parseForecastData(data){
  const parsedData = data.map((item) => {
    return {
      temp: Math.round(item.main.temp),
      wind: Math.round(item.wind.speed),
      description: item.weather[0].description,
    };
  });
  return parsedData.slice(0, hoursInDay / forecastIntervalInHours);
}

export function adviceGenerator(forecastData){
  const tempRange = strConst.tempRange;
  const avgTemp = Math.round(forecastData.reduce((acc, cur) => acc + cur.temp, 0) / forecastData.length);
  const tempLevel = tempRange.find((elem) => avgTemp <= elem.temp);
  const isRain = forecastData.find((elem) => elem.description.includes(strConst.rain));
  let advice = `${strConst.adviceText[0]} ${tempLevel.description}. 
  ${strConst.adviceText[1]} ${avgTemp} ${strConst.adviceText[2]} ${tempLevel.wearAdvice}.`;
  if (isRain){
    advice = advice.concat(` ${strConst.adviceRain}`);
  };
  return advice;
}
