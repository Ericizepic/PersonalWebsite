import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = () => {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="page">
        <span className='tags top-tags'></span>
        <Outlet></Outlet>
        <span className='tags bottom-tags'>
        <br></br>
        <span className='bottom-tag-html'></span>
        </span>
      </div>
    </div>
  )
}

export default Layout
