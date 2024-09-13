// export default function Home (){
//     return(
        
//     )
// }

// src/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import {Link, useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate =useNavigate()
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-red-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SAYLANI Blood Donation</h1>
          <nav>
           <div>
            < Navbar/>
           </div>
          </nav>
          
        </div>
        
      </header>

      {/* Hero Section */}
      <section id="home" className="flex-1 bg-red-500 text-white flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-4xl font-bold mb-2">Make a Difference Today</h2>

         <img src="https://media4.giphy.com/media/QxLZGRUSYdcUnMUzLQ/giphy.gif?cid=6c09b952uv6hwhtnu328a3n6whlc694qlln1g4k3216155i9&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" className="h-40 w-40 mx-80" /> 
         
          <p className="text-lg mb-4">Join our blood donation community and help save lives. Every donation counts!</p>
          <button onClick={()=> navigate('/donars')} className="bg-white text-red-600 px-4 py-2 rounded-lg text-lg font-semibold hover:bg-gray-200"> Donate Now</button>
        </div>
      </section>

      {/* About Section */}
     
    
      {/* Footer */}
      <footer className="bg-red-600 text-white py-3">
        <div className="container mx-auto text-center">
          <p>&copy; 2024  Saylani Blood Donation Organization. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
