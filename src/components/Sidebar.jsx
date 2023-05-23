import { NavLink } from 'react-router-dom';
import {logo} from '../assets'
import { links } from '../assets/constants';

const Sidebar = () => (
  <>
    <div className="sm:w-48 w-0 bg-[#250011] ">
      <img src={logo} alt="logo" className='w-28 mt-5 mx-auto'/>
      {links.map(item =>
        <div key={item.name} className='text-white font-bold'>
          <NavLink 
            to={item.to}
            className="flex my-4 mx-2">
              <item.icon className='w-6 h-6 mr-2'/>
              {item.name}
            </NavLink>
        </div>
      )}
    </div>

    <div style={{
      position:'absolute',
      bottom:0,
      justifyContent:'space-around'
    }} className="sm:invisible w-full text-center flex h-24 p-2 bg-[#250011] ">
      {links.map(item =>
        <span key={item.name} className=' text-white '>
          <NavLink 
            to={item.to}
            className="">
              <item.icon className='w-6 h-6 mx-auto'/>
              {item.name}
            </NavLink>
        </span>
      )}
    </div>
  </>
);

export default Sidebar;
