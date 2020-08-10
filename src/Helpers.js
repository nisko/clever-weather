const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

export function generateDateStringsArr(){
  const dateStringArr = ["Сейчас"];
  const timeInms = new Date().getTime();
  for (let i = 1; i < 8; i += 1){
    const forecastTime = new Date(timeInms + 1000 * 3600 * 3 * i);
    const dateStr = `${months[forecastTime.getMonth()]} ${forecastTime.getDate()} ${forecastTime.getHours()}:${forecastTime.getMinutes()}`; 
    dateStringArr.push(dateStr);
}
  return dateStringArr;
};
