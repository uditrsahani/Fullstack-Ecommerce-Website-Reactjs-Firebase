import React, { useEffect, useState } from "react";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get the current user's ID
        const userId = auth.currentUser.uid;

        // Get the user document from Firestore
        const docRef = doc(fireDB, "users", userId);
        const docSnap = await getDoc(docRef);

        // Check if the document exists
        if (docSnap.exists()) {
          // Get the user data from the document
          const userData = docSnap.data();

          // Set the user profile state
          setUserProfile(userData);
        } else {
          console.log("User document does not exist");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Call the function to fetch user data
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {userProfile ? (
        <div>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          {userProfile.photoURL && (
            <img
              src={userProfile.photoURL}
              alt="Profile"
              width="100"
              height="100"
            />
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;
