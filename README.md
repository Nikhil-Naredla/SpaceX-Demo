# SpaceX Demo Clone

Allows users to go through the Missions launched by the SpaceX ,users can filter the Missions by Year wise,Successfull Launching and Successful Landing, and it has good responsiveness in the desktop view and also on mobile view for greater user experoience

## Getting Started


## Installing 
 creating the React app on cli
 
 ### ` npx create-react-app <Your-project-name>`
 
 running the app on the local machine
 
  ### ` npm start`
  
 installing axios for doing HTTP calls
 
  ### ` npm install axios`
  
  installing react router for routing purposes in app
  
   ### ` npm install react-router-dom`
   
   ## Project building
   
   used React-js to build the project, used typical component based ui structure for ease of development. and axios instance for rest api services, and React router v5 for routing the app
   
   ## Context-Api With useContext + useReducer = Magic 
   
    i thought about using Redux at first,but it seemed to me as an overkill,so i decided to go to react hooks , and i loved it while developing how good context and useReducer works, i created the good old context api .and and manipulate the state file in Reducer file, its esy,and i wrapped it above the top level ,so that all the component tree below it can recieve it
    
    all the actions generally typical arrow functions are written inside the stae file which hold the jsx as context api, and state changing using useReducer,and i finally dispatched it to reducer file
    

 ## api used 
    https://docs.spacexdata.com/
    
    
 ## React-Router and withRouter HOC
 
   general routing,and intresting part is how convienient to pass the history,match and other router  props to the deeply nested component ,withRouter Higher Order Components done pretty good job,with that i used programatical navigation inside the components with

### 'props.history.push('your route')'


## used NotFound Route
if user acess the page taht does not exists,the app might break,so i used notfound route component ,place it in last of routing order ,beacuse order is important

## component reused

i reused missionItems component to recieve the results from state and map through it and display the required results on ui
    
 ## UI and Responsiveness
 
 i used vanilla css for good looking cards and button effects and positioning the ui items
  for responsiveness i used css gird and media queries combined ,to view the page at different breakpoints
  
  ## Production and Deployment
  
  created the buid file,by running the command
  
   ### ` npm run build`
   
   i deployed it to the web using Firebase cloud hosting
   
   ### `firebase init`
   
   ### `firebase deploy`
   
   
 ## deployed website on cloud
 
 https://spacex-demo-nikhil.web.app/
 
 
 ## App Info
 
 ## Author
  Nikhil Naredla
  
 ## License
 
 this project is licensed under the MIT License


    

