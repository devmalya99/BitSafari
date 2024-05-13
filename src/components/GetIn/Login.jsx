
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useRef } from "react";


import { useDispatch } from "react-redux";
import { auth } from "../../Firebase/firebase";
import { createCustomer } from '../../Pages/Dashboard/customer/customerSlice'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const dispatch = useDispatch();
 const navigate = useNavigate()

 
  const email = useRef(null);
  const password = useRef(null);
  const confirm_password=useRef(null)



  const handleSubmit = (e) => {
    e.preventDefault()
    

    if(!isSignInForm){

        if(password.current.value !== confirm_password.current.value){
            alert('password and confirm password does not match')
            return;
        }
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((res) => {
          alert('user created')
          dispatch(createCustomer(res.user))
          navigate('/dashboard')
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });

    }
    
    else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((res) => {

    // Signed in 
    console.log('user signed in',res)
    dispatch(createCustomer(res.user))
    alert('user signed in')
    navigate('/dashboard')
    // ...
  })
  .catch((error) => {
    setErrorMessage(error.message);
  });
    }
  

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
        {
        !isSignInForm && (
         <input
          ref={confirm_password}
          type="password"
          placeholder="Confirm Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
            )
        }
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