# Example of API with the Telegram bot as transport


## Setup bot
1) GOTO https://t.me/BotFather
2) Create new bot using the description
3) Get the bot link and <token>
4) GOTO https://api.telegram.org/bot<token>/getUpdates
5) Get chat_id from **result.message.from.id**
```
{
   "ok":true,
   "result":[
      {
         "update_id":431423412,
         "message":{
            "message_id":9,
            "from":{
               "id":<some_id>,
               "is_bot":false,
               "first_name":"test",
               "username":"test",
               "language_code":"ru"
            },
            "chat":{
               "id":<some_id>,
               "first_name":"test",
               "username":"test",
               "type":"private"
            },
            "date":1630598186,
            "text":"/start",
            "entities":[
               {
                  "offset":0,
                  "length":6,
                  "type":"bot_command"
               }
            ]
         }
      }
   ]
}
```

## Setup env
1) Set TG_TOKEN=<your_token>
2) Set TG_CHANNEL=<result.message.from.id>

## Start the app
```
$ npm install
$ npm start
```
