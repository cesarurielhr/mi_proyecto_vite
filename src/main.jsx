import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './functions/MyFuntions.jsx'
import './functions/MyPromises.jsx'
import  MyPromiseAll from './functions/MyPromiseAll.jsx'
import MyPromisesRace from './functions/MyPromisesRace.jsx'
import MyFetchsAPI from './functions/MyFetchsAPIs.jsx'
import'./index.css'
import MyFunctions from './functions/MyFuntions.jsx'
import MyPromises from './functions/MyPromises.jsx'
import  MyFetchsAPIp from './functions/MyFetchPut.jsx'
import MyFetchsAPIpost from './functions/MyFetchPost.jsx'
import MyFetchBlob from './functions/MyfetchBlob.jsx'
import MyDataTypes from './methods/MyDataTypes.jsx';
import MyObjects from './methods/MyObjects.jsx'
import { Contador } from './components/Contador.jsx'
import  {ContadorHook}  from './components/ContadorHook.jsx'
import { Login } from './components/Login.jsx'
import { Usuarios } from './components/Usuarios.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    {/*<App />*/} 
    {/* <MyFunctions/>*/} 
    {/*<MyPromises/>*/}
    {/*<MyPromiseAll/>*/}
      {/*<MyPromisesRace/>*/}
      {/*<MyFetchsAPIpost/>*/}
      {/*} <MyFetchsAPIp/>*/}
       {/*<MyFetchBlob/>*/}
       {/*<MyDataTypes/>*/}
      {/* <MyObjects/>*/}
       {/*<Contador/>*/}
      <ContadorHook/>
      {/*<Login/>*/}
     {/* <Usuarios/>*/}

  </StrictMode>,
)
