# Facebook Messenger Chatbot Boilerplate
Boilerplate project for developing Facebook Messenger Bot powered by Wit.ai, MongoDB and Redis as a session store.

## Quick start 

First in /config/config.js add the configuration information for the mongodb , the redis servers ,
the facebook webhook token , facebook page token, wit token.

run `npm install` 
 
if you want to deploy on heroku i've include the Procfile all you would have to do is to create an app and push this to it.

after deployin the app set you facebook webhook on https://yourAppURL/bot with you facebook webhook token

add your custom actions in the wit-action folder just name the module with your action name and it will be 
automatically included in the actions 

in the  platformHelpers.js file you will find helpers to construct and send your messages 

The sessionStore.js include the basic functionality you need for handling the sessions

handlers/message.js 
     this file is the main entry point for handing text messages and executing the wit actions  

### MongoDB 
By default the in the development environment `chatbotdb` database will be created 
I've add a default user schema that will automatically create a user document with the profile information
### Session store using Redis

Redis server is required for managing sessions and keeping the context with each user.
Please install Redis and setup connection in the `config/config.js`


## You can also set environment variables instead of writting values directly in the `config/config.js`

`FB_PAGE_TOKEN` - Access token generated for the Facebook application to allow making Graph API requests to the page

`WIT_TOKEN` - WIT server side token

`FB_WEBHOOK_VERIFY_TOKEN` - a verify token that should be used for Webhooks setup, this is something you need to generate by yourself

`FB_PAGE_ID` - ID of the Facebook page that will be used as a bot.




## Project structure
```
  wit-actions/ 
     define your custom wit.ai actions here, the file name should be the name of the action, all actions from this folder are automatically registered as wit.ai actions.
    
  config/
     configuration files for access keys, tokens, connection strings
    
  handlers/
     this folder contains the handers for diffent message types  messenger event handlers for text messages, attachments, postbacks and quick replies

    handlers/message.js 
     this file is the main entry point for handing text messages and executing the wit actions  
    
  init/
     init scripts for mongodb and redis
    
  schemas/ 
     define your mongodb/mongoose schemas  here 
    
  scripts/ 
     some shell scripts to set messenger getting started button, persistant menu, and  messenger greeting text
    
  services/ 
     custom services
  
  app.js
     application entry point

  graphAPI.js
     Facebook Graph API helper
    
  platformHelpers.js
     Helpers for generating message templates, e.g send location, quick replies and others
    
  routes.js
     express routes setup and message handler delegation

  sessionStore.js
     Redis based session store
    
  wit.js
     wit.ai setup with actions loading
    
  witHelpers.js
     helpers for extracting entities from wit.ai response
    



    to enable debug mode 
`DEBUG=* npm start` or `DEBUG=cbp* npm start` for app level log messages only


###### update Facebook application's webhook 
`https://xxxxxxxx.ngrok.io/bot`
enter the `FB_VERIFY_TOKEN` value and submit

