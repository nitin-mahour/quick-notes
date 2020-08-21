# Quick Notes
### [Quick Notes](https://quick-notes-n.web.app)
A simple & small web app to manage notes.

<br/>

## Developed using:
JavaScript Framework: [React.js](https://reactjs.org/)<br/>
Css Framework: [TailwindCss](https://https://tailwindcss.com/)<br/>
State Container: [Redux](https://react-redux.js.org)<br/>
NoSQL Database: [Firebase Firestore](https://firebase.google.com/)<br/>

<br/><br/>

## Tips:
#### 1. If you want to use this web app you need to create firebase config file at `src/firebase/firebaseConfig.js` with code listed below:

    import firebase from 'firebase/app'
    import 'firebase/firestore'
    import 'firebase/auth'

    const firebaseConfig = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        appId: "",
        measurementId: ""
    };

    firebase.initializeApp(firebaseConfig)
    firebase.firestore()

    export default firebase

You can get these values from you firebase console under project settings.

<br/>

#### 2. By default tailwindcss creates very large css files, so, to minimize the css file size run:

`npx tailwindcss build tailwind.config.css -o src/css/tailwind.dev.css` <br/>
`npx purgecss -c purgecss.config.js` <br/>
`npx csso -i src/css/tailwind.css -o src/css/tailwind.min.css` <br/>
