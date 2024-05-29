import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage, fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../components/loader/Loader";
import myContext from "../../context/data/myContext";
import { useEffect } from "react";

function Signup() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const signup = async () => {
    setLoading(true);
    if (name === "" || email === "" || password === "") {
      setLoading(false);
      return toast.error("All fields are required");
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      let photoURL = '';
      if (image) {
        const storageRef = ref(storage, `profilePictures/${users.user.uid}`);
        await uploadBytes(storageRef, image);
        photoURL = await getDownloadURL(storageRef);
      }

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
        photoURL: photoURL
      };

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);

      toast("Signed up successfully!", {
        style: {
          border: "2px solid #3d85c6",
          padding: "16px",
          color: "#ffffff",
          fontWeight: "bold",
          background: "#6aa84f",
        },
      });
      
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
      window.location.href = "/login";
    } catch (error) {
      console.error(error);
      toast("Try with a different email or a longer password!", {
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
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <Toaster />
      {loading && <Loader />}
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Name"
          />
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>

        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>

        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4"
          />
        </div>

        <div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={signup}
              className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg"
            >
              Signup
            </button>
          </div>
          <div>
            <h2 className="text-white">
              Have an account{" "}
              <Link className=" text-red-500 font-bold" to={"/login"}>
                Login
              </Link>
            </h2>
          </div>
          <div>
            <h2 className="text-white">
              Forgot password?{" "}
              <Link className=" text-yellow-500 font-bold" to={"/forgot-password"}>
                Reset here
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
