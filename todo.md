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

- обработать ошибку. Сделать так, чтобы бот не падал вообще при такой ошибке(сказать, чтобы сама просто меняла кол-во символов в строке. Напомнить, что пробелы межу строками - тоже символ)
