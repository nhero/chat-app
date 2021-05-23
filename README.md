This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

After cloning the project navigate to the project root and run

### `yarn install`

to add npm packages.

You can start the app by running

### `npm run dev`

which runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Open 'User 1 Chat' [http://localhost:3000/user/1](http://localhost:3000/user/1) in one tab and 'User 2 Chat' [http://localhost:3000/user/2](http://localhost:3000/user/2) in another tab. Chat and wait a few seconds and the message will show up in the other tab.

### Notes

I have been working with Angular which relies heavily on RxJS and services that return Observables that you inject into the component and subscribe to. I was going to set things up this way and when it came time to create the service I realized that React doesn't use the same approach. I figured I could use Node.js and Express to save the messages to a file since I was familiar with using them to retrieve data from databases. The file serves as a temporary database and could easily be replaced with a real one at some point. If I had more time I would look into a more React specific approach such as Redux.

### Potential Future Enhancements

- Login screen
- Sanitize Data before submitting to API
- Secure the API
- Error Handling
- Notification of new chat
