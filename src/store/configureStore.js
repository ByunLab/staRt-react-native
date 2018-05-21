import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import reducers from '../reducers';
import {createLogger} from 'redux-logger';


import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import firebase from 'firebase';
import 'firebase/firestore';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';

const DEV = {
    apiKey: "AIzaSyDP9aJBSE69ZJd7gXbLQZXQwKA2HLnw5No",
    authDomain: "start-rn-development.firebaseapp.com",
    databaseURL: "https://start-rn-development.firebaseio.com",
    projectId: "start-rn-development",
    storageBucket: "start-rn-development.appspot.com",
    messagingSenderId: "1025972558572"
};

const firebaseConfig = DEV;
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
}

const firestoreSettings = {
    timestampsInSnapshots: true
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();
firebase.firestore().settings(firestoreSettings);

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});

export default function configureStore(){
    const enhancer = compose(
	reactReduxFirebase(firebase, rrfConfig),
	reduxFirestore(firebase),
	applyMiddleware(loggerMiddleware)
    );

    const createStoreWithFirebase = compose(
	reactReduxFirebase(firebase, rrfConfig),
	reduxFirestore(firebase)
    )(createStore)
    
    const store = createStoreWithFirebase(reducers, enhancer);

    if(module.hot){
	module.hot.accept(() => {
	    const nextRootReducer = require('../reducers/index').default;
	    store.replaceReducer(nextRootReducer);
	});
    }

    return store;
}
