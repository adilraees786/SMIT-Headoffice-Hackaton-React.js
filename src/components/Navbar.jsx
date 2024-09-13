import navbar from "../components/Navbar"
import {Link, useNavigate } from "react-router-dom";

  export default function Navbar() {
    const navigate =useNavigate()

    const handlelogout = () => {
        localStorage.removeItem('userId')
        navigate('/login')

    }


    return (
        <div>
          
          <div className="  w-full p-6 px-20 mb-8  text-2xl font-medium text-white flex justify-between ">
       

                <div className=" flex gap-16 cursor-pointer"  >

                  <Link to={'/donars'}>Donars</Link> 
                  <Link to={'/registerDonar'}>RegisterDonar</Link>
                  {/* <Link to={'/MarketPlace'}>MarketPlace</Link>
                  <Link to={'/Profile'}>Profile</Link> */}
                  <button onClick={handlelogout}>Logout</button>
                 
                </div>
              
                
                
               

            </div>
         
           



        </div>



    )
}
;
