import {RouterProvider, } from 'react-router-dom'
import {myRouter} from './router.jsx'
import './App.css'
import About from '../pages/About.jsx'

export default function App() {
  return (
    <>
      <RouterProvider router={myRouter}/>
      <About  />
    </>
  )
}