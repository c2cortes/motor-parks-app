#### This app uses redux and some other dependencies so go to the folder and run from terminal:
> npm install
> npm start

#### Url to test
http://localhost:8080

#### src/index.js
The base of the app, it instances the redux stuff and wraps the app component inside a <Provider/> 

#### src/app.js
Here the MotorParks lists are defined and starts the logic

#### src/containers/motorParksLists.js
This component lists the motor parks retrieved as props from redux state

#### src/containers/itemComponent.js
This is the item component rendered for each motor park item 

#### src/actions/index.js
This file contains the action reducers 

#### src/reducers
It contains the combineReducers and the reducers