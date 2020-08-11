const strConst = {
  welcome: "Добро пожаловать на сервис умной погоды",
  getForecatsButton: "Показать прогноз",
  newForecastButton: "Новый прогноз",
  namePlaceholder: "Ваше имя",
  cityPlaceholder: "Укажите для какого города нужен прогноз",
  countryPlaceholder: "Если необходимо укажите код страны стандарта ISO 3166",
  statePlaceholder: "Если необходимо укажите штат (только для США)",
  responseErrorText: "Прогноз для заданной местности не найден",
  requestErrorText: "Не удалось получить ответ от сервиса",
  unknownErrorText: "Неизвестная ошибка",
  cityRequiredError: "Необходимо указать название города",
  hello: "Привет",
  anonymous: "Аноним",
  forecastText: "Вот прогноз погоды на следующие сутки в городе",
  windSpeed: "скорость ветра",
  unit: "м/с",
  temperature: "температура",
  months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
  now: "Сейчас",
  rain: "дождь",
  adviceText: ["Сегодня на улице", "Средняя температура", "градусов цельсия. Советую надеть"],
  adviceRain: "Сегодня возможен дождь. Захватите с собой зонтик.",
  tempRange: [
    {
      temp: 0,
      wearAdvice: "кофту и теплый пуховик, шапку и перчатки",
      description: "очень холодно",
    },  {
      temp: 8,
      wearAdvice: "теплую куртку и шапку",
      description: "холодно",
    },  {
      temp: 16,
      wearAdvice: "куртку или кофту",
      description: "прохладно",
    },  {
      temp: 24,
      wearAdvice: "легкую курточку или кофту",
      description: "тепло",
    },
    {
      temp: Number.POSITIVE_INFINITY,
      wearAdvice: "шорты и футболку",
      description: "жарко",
    }
  ],
  baseUrl: "https://api.openweathermap.org/data/2.5/forecast",
  reqParams: {
        APPID: "323c6142310afa9402e3214b3c14d68e",
        units: "metric",
        lang: "ru"
  },
};

export default strConst;