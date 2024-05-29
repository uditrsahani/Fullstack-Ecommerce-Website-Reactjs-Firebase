import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
// import { auth } from '../../firebase/firebaseConfig';
import { auth } from '../../firebase/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import Loader from '../../components/loader/Loader';
import Loader from '../../components/loader/Loader';
import { useEffect } from 'react';

function Login() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const context = useContext(myContext)
    const { loading,setLoading} = context

    const signin = async () => {
      setLoading(true);
      try {
        const result = await signInWithEmailAndPassword(auth, email, password)
        localStorage.setItem('user',JSON.stringify(result));
        console.log(result)
        toast("Logged in successfully!", {
            style: {
              border: "2px solid #3d85c6",
              padding: "16px",
              color: "#ffffff",
              fontWeight: "bold",
              background: "#6aa84f",
            },
          });
        window.location.href='/'
        setLoading(false);
      } catch (error) {
        toast("Login Failed, try again!", {
            style: {
              border: "2px solid #3d85c6",
              padding: "16px",
              color: "#ffffff",
              fontWeight: "bold",
              background: "#cc0000",
            },
          });
        setLoading(false);
      }
    }
   
    return (
        <div className=' flex justify-center items-center h-screen'>
               <Toaster/>
            {loading && <Loader/>}
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                    onClick={signin}
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
                <div>
                    <h2 className='text-white'>Forgot password? <Link className=' text-yellow-500 font-bold' to={'/forgot-password'}>Reset here</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login