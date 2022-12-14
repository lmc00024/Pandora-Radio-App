// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'pandora-app-6ecf2',
    appId: '1:267823474289:web:a604cb93d0ee11ed325dd0',
    databaseURL: 'https://pandora-app-6ecf2-default-rtdb.firebaseio.com',
    storageBucket: 'pandora-app-6ecf2.appspot.com',
    apiKey: 'AIzaSyBXFSodr9mXJnCQIOPcZ9noj_NIzuBIKBc',
    authDomain: 'pandora-app-6ecf2.firebaseapp.com',
    messagingSenderId: '267823474289',
    measurementId: 'G-LT0K0WZWJ2',
  },
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXFSodr9mXJnCQIOPcZ9noj_NIzuBIKBc",
  authDomain: "pandora-app-6ecf2.firebaseapp.com",
  databaseURL: "https://pandora-app-6ecf2-default-rtdb.firebaseio.com",
  projectId: "pandora-app-6ecf2",
  storageBucket: "pandora-app-6ecf2.appspot.com",
  messagingSenderId: "267823474289",
  appId: "1:267823474289:web:a604cb93d0ee11ed325dd0",
  measurementId: "G-LT0K0WZWJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);