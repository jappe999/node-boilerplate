Does not work



## Requirements
- Git (duh)
- npm
- Node.js

## Installing
```
git clone https://github.com/jappe999/node-boilerplate.git
npm install
```

## Building
To build or rebuild the app you must do the the following:
```
npm run build
npm run dev
```

## Starting the application
To start the application you simply run: ```npm run start```

If you want a daemonized service, you can find the initial script in dist/server/index.js

## Modifying the application
The application's source can be found in src/

### Modifying the server code
The routes.js and settings.js both receive the app variable from express.
There you can add routes or the change settings for the express server.

### Modifying the client code
This boilerplate uses [Laravel Mix](https://github.com/JeffreyWay/laravel-mix), [Tailwind CSS](https://tailwindcss.com), [Sass](https://sass-lang.com) and [Vue.js](https://vuejs.org).

Tailwind CSS can be modified in tailwind.js.

The rest of the client code can be found in src/client/.
