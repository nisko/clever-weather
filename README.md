Задача умный сервис прогноза погоды.

Уровень сложности "Задача со звездочкой".

Для разработки использован reactjs. Сервис реализован в виде сайта.

На данном сервисе пользователь может узнать прогноз погоды в выбранном городе, а также получить совет, что надеть.
Ответ, полученный от API, выводится на экране в виде таблицы с полями: время, температура, скорость ветра, информация об осадках.
Выводятся данные о погоде в следующие 24 часы с интервалом в три часа (всего в таблице 8 строк).


![Output sample](https://github.com/nisko/clever-weather/raw/master/demo.gif)

Процесс работы программы:
1. Пользователь заполняет форму, в которой всего 4 поля: имя, город, код страны, штат. Обязательно заполнить только город.
Для избежания неоднозначности при получении информации о погоде в выбранном городе рекомендуется указать код страны по стандарту ISO 3166,
а для США указать штат.
2. После заполнения формы пользователь нажимает кнопку "Показать прогноз". Далее проходит валидация данных.
Если город не указан выводится ошибка. Если город указан, то отправляется запрос к API.
3. Если запрос к API завершился с ошибкой, то выводится на экран текст ошибки.
Если запрос завершился корректно, то выводятся данные о погоде в заданном городе и совет, что надеть при текущей погоде.
Совет генерируется в зависимости от средней температуры в течении суток и наличия осадков.
4. Пользователь ознакомившись с данными о погоде может нажать кнопку "Новый прогноз" и получить новый прогноз.

Порядок запуска программы:

0. для запуска необходимо установить nodejs, npm и git.
1. git clone https://github.com/nisko/clever-weather (скопировать репозиторий с github)
2. cd nisko-weather (перейти в директорию nisko-weather)
3. npm install (установить зависимости)
4. npm start (запуск приложения)