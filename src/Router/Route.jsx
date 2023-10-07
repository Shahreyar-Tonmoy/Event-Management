
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Error from '../Error Page/Error';
import Home from '../Pages/Home/Home';
import CardInfo from '../Pages/Card/CardInfo';
import Event from './Body/Event';



const Route = createBrowserRouter([
    {
        path :"/",
       element :<MainLayout></MainLayout>,
       errorElement :<Error></Error>,
       children :[
        {
            path : "/",
            element : <Home></Home>,
            loader :()=> fetch("/Education.json"),
            
            
        },
        
        {
            path : "/course",
            element : <CardInfo></CardInfo>,
            loader :()=> fetch("/Education.json")
            
            
            
        },
        {
            path : "/Event",
            element : <Event></Event>,
            loader :()=> fetch("/Event.json")
            
            
            
        },

       ]
       
    }
])

export default Route;