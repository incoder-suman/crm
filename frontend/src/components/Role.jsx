import { Link } from 'react-router-dom';
import admin from '../assets/admin-Photoroom.png'
import sales from '../assets/sales-Photoroom.png'
import team from '../assets/team-Photoroom.png'

const Role = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-screen gap-5 sm:gap-10 ">
      <div className='hover:text-pink-400 transition-all duration-300'><Link to="/login"><div className='h-24 sm:h-40 w-24 sm:w-40 m-auto bg-pink-400 p-2 hover:scale-105 transition duration-300 rounded-full'><img src={admin} alt="admin" className='w-[100%]'/></div><div className="font-bold text-center text-lg">Admin</div></Link></div>

     <div className='hover:text-[#90d4e3] transition-all duration-300'><Link to="/login"><div className='h-24 sm:h-40 w-24 sm:w-40 m-auto bg-[#90d4e3] p-2 hover:scale-105 transition duration-300 rounded-full'><img src={sales} alt="admin" className='w-[100%]'/></div><div className="font-bold text-center text-lg">Sales</div></Link></div>

     <div className='hover:text-[#766aad] transition-all duration-300'><Link to="/login"><div className='h-24 sm:h-40 w-24 sm:w-40 m-auto bg-[#766aad] p-2 hover:scale-105 transition duration-300 rounded-full'><img src={team} alt="admin" className='w-[100%]'/></div><div className="font-bold text-center text-lg">Team</div></Link></div>
    </div>
  )
}

export default Role