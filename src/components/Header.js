import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access user information from Redux store
  const user = useSelector(state => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            navigate("/browse")
        } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/")
        }
    });
    //unsubscribe when component unmount
    return () => unsubscribe();
}, []); 

  // Function to handle sign-out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Dispatch action to remove user from Redux store
        
  
      })
      .catch(error => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="flex justify-between w-full absolute z-20 bg-gradient-to-b from-black">
      <img
        className='w-40 py-5 mx-28 pt-0 mt-0 left-20'
        src={LOGO}
        alt='logo'
      />
      <div className='flex my-7 mr-20 gap-4 items-center'>
        {user && user.photoURL && (
          <img 
            className='w-9 h-9 rounded-full cursor-pointer' 
            src={user.photoURL}
            alt='user icon'
          />
        )}
      { user && <button onClick={handleSignOut} className='bg-red-600 rounded-lg px-3 py-0 text-white font-light'>Sign Out</button>}
      </div>
    </div>
  );
};

export default Header;
