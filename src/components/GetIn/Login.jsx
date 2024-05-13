
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useRef } from "react";


import { useDispatch } from "react-redux";
import { auth } from "../../Firebase/firebase";



const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
 

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);



  const handleSubmit = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });

   console.log('succes',email.current.value,password.current.value)

  }

   

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="h-screen bg-[#111]">
      
    
      <form
        onSubmit={(e)=>handleSubmit(e)}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button type="submit"
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer bg-blue-600 rounded-xl font-semibold" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to BitSafari? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;