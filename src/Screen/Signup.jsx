import Swal from 'sweetalert2'
import React, { useState } from 'react';
import {doc , setDoc} from 'firebase/firestore';
import { db,auth } from '../database/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const SignupPage = (props) => {
  const navigate = useNavigate()

  const [name, setname] = useState("");
  const [email, setemail] = useState(""); // email for read & set email for write in useState
  const [password, setpassword] = useState("");
  // const [isloading, setisloading] = useState("");


   function handlesignup(e) {
    e.preventDefault();
    console.log(name, "name");
    console.log(email, "email");
    console.log(password, "password");


    createUserWithEmailAndPassword(auth, email, password)
      .then( async (respnse) => {

        const uid = respnse.user.uid
        const userData={ name , email, password , uid}

        localStorage.setItem("userId", respnse.user.uid)

        //set loading

    

         await setDoc (doc(db, 'user' , uid ), userData)

        Swal.fire({
          title: 'Signup Completed',
          text: 'Do you want to continue',
          icon: 'success',

        })

        navigate('/login')
      
         
    
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, " ??? error message");

        Swal.fire({
          title: 'Something Went Wrong ',
          text: error.Message,
          confirmButtonText: 'error'
        })
        // ..
      });

  }



  return (
    <div className="flex items-center justify-center min-h-screen bg-red-700">
     
      <div className="w-full max-w-md p-8 bg-red-950 shadow-md rounded-lg scale-125		">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {/* <form onSubmit={handleSubmit}> */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Full Name
          </label>
          <input
            // id="name"
            // name="name"
            type="text"
            placeholder="Enter your Name"
            // value={formData.username}
            onChange={e => setname(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            // id="email"
            // name="email"
            type="email"
            placeholder='Enter your email'
            // value={formData.email}
            onChange={e => setemail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            // id="password"
            // name="password"
            type="password"
            placeholder='Enter your password'
            // value={formData.password}
            onChange={e => setpassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          onClick={handlesignup}
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Sign Up
        </button>
        {/* </form> */}

        <div className='mt-6 text-center flex justify-between'>
          <a
            className='text-sm  text-indigo-900 hover:text-indigo-950'
            href="signup">
            Login
          </a>

          <a
            className='text-sm  text-indigo-900 hover:text-indigo-950'
            href="signup">
            forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;


