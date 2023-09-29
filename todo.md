Обработка ошибок:

1. long caption
   ended: true,
   res: [Circular *8],
   aborted: false,
   timeoutCb: null,
   upgradeOrConnect: false,
   parser: null,
   maxHeadersCount: null,
   reusedSocket: true,
   host: 'api.telegram.org',
   protocol: 'https:',
   [Symbol(kCapture)]: false,
   [Symbol(kNeedDrain)]: false,
   [Symbol(corked)]: 0,
   [Symbol(kOutHeaders)]: [Object: null prototype] {
   host: [ 'host', 'api.telegram.org' ],
   'content-type': [
   'content-type',
   'multipart/form-data; boundary=--------------------------825554541610184259893608'
   ],
   'content-length': [ 'content-length', 0 ]
   }
   },
   response: [Circular *8],
   originalHost: 'api.telegram.org',
   originalHostHeaderName: 'host',
   responseContent: [Circular *8],
   \_destdata: true,
   \_ended: true,
   \_callbackCalled: true,
   [Symbol(kCapture)]: false
   },
   toJSON: [Function: responseToJSON],
   caseless: Caseless {
   dict: {
   server: 'nginx/1.18.0',
   date: 'Mon, 25 Sep 2023 19:51:20 GMT',
   'content-type': 'application/json',
   'content-length': '86',
   connection: 'keep-alive',
   'strict-transport-security': 'max-age=31536000; includeSubDomains; preload',
   'access-control-allow-origin': '_',
   'access-control-expose-headers': 'Content-Length,Content-Type,Date,Server,Connection'
   }
   },
   body: {
   ok: false,
   error_code: 400,
   description: 'Bad Request: message caption is too long'
   },
   [Symbol(kCapture)]: false,
   [Symbol(kHeaders)]: {
   server: 'nginx/1.18.0',
   date: 'Mon, 25 Sep 2023 19:51:20 GMT',
   'content-type': 'application/json',
   'content-length': '86',
   connection: 'keep-alive',
   'strict-transport-security': 'max-age=31536000; includeSubDomains; preload',
   'access-control-allow-origin': '_',
   'access-control-expose-headers': 'Content-Length,Content-Type,Date,Server,Connection'
   },
   [Symbol(kHeadersCount)]: 16,
   [Symbol(kTrailers)]: null,
   [Symbol(kTrailersCount)]: 0,
   [Symbol(RequestTimeout)]: undefined
   }
   }

- поменять текста +
- добавить текста и проверку на ограничение символов +
- поменять расположение выведенного текста в forward message +
- обработать ошибку. Сделать так, чтобы бот не падал вообще при такой ошибке
- ограничения по символам (сейчас при 1024 символах суммарно проходит):

1. имя автора 50
2. город 30
3. имя издательства 50
4. видео линк 50
5. цена 10
6. телеграм автора 50
7. соц сеть автора 50
8. год: 15 символов
9. дескриптион: 800 символов

"это в сумме больше чем 209 но я надеюсь что никто преднамеренно ломать не будет"

сообщения на ограничения:

- сообщение от бота, если ввел больше 15 символов в поле года
  "это точно правильное [имя]? мы рассчитывали что [имя] будет не больше [50] знаков"

- текст сообщения от бота, если ввел огромное описание
  "ой, кажется этот текст слишком длинный, постарайтесь уложиться в 800 знаков"

// TODO:
обработка ошибок на огромное описание

Сделать так, что после happy state у нас обнулялись данные в поле data:{}. Посмотреть , что будет когда у нас state = null и data = {} после отправки данных. Возможно для этого нужно добавить state FINISHED(будет после нажатия на да)

продумать нужно ли нам асинхронное взаимодействие с fs для users.json. Нужно ли ставить async/await для этого
ГПТ утверждает, что если много людей будет взаимодействовать с ботом одновременно, то могут быть проблемы

внедрить async/awiat везде где нужно. Просмотреть ответ от gpt.

Разобраться с return, где он нужен пере sendMessage а где нет

Добавить trim пробелов между строками. Тоесть, если у нас больше чем 1 \n, то сделать так, чтобы он остался 1 +

дождаться await когда мы грузим фотки. То сть пока все фотографии не появились в users.json у нас команды не отрабатываются. Либо вывести сооьщение, что "подождите, идет загрузка фотографий"
