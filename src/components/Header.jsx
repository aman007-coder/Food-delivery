import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../firebase.config';

import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import { Link } from 'react-router-dom' ;

const Header = () => {

  const firebaseAuth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const [{user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false)

  const login = async () => {
    if(!user){
      const {user: {refreshToken,providerData}} = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type : actionType.SET_USER,
        user : providerData[0], 
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }
    else{
      setIsMenu(!isMenu)
    }
  };

    const logout = () => {
      setIsMenu(false);
      localStorage.clear();

        dispatch({
          type : actionType.SET_USER,
          user : null, 
        });
    }

    const showCart = () => {
      dispatch({
        type : actionType.SET_CART_SHOW,
        cartShow : !cartShow, 
      });
    }

  return (
    <header className='fixed bg-primary z-50 p-3 px-4 w-screen md:p-6 md:px-12 shadow-lg'>
    
        {/* desktop & tablet */}
        <div className='hidden md:flex w-full h-full'>
           
           <Link to={'/'} className='flex item-center gap-2'>
             <img src={Logo} className="w-10 object-cover" alt="logo" />
             <p className='text-headingColor text-xl font-bold'>kidilan food</p>
           </Link>

        <div className='flex ml-auto gap-8'>

        <motion.ul 
        initial={{opacity:0, x: 200 }}
        animate={{opacity:1, x: 0 }}
        exit={{opacity:0, x: 200 }}
        
        className='flex items-center gap-8'>
            <li className='text-base text-textColor hover:text-orange-600 duration-100
            transition-all ease-in-out cursor-pointer'>Home</li>
            <li className='text-base text-textColor hover:text-orange-600 duration-100
            transition-all ease-in-out cursor-pointer'>Menu</li>
            <li className='text-base text-textColor hover:text-orange-600 duration-100
            transition-all ease-in-out cursor-pointer'>About Us</li>
            <li className='text-base text-textColor hover:text-orange-600 duration-100
            transition-all ease-in-out cursor-pointer'>Services</li>
        </motion.ul>

        <div className='relative flex items-center justify-center' onClick={showCart}>
           <MdShoppingBasket className='text-textColor text-2xl cursor-pointer'/>
           {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>
       
      <div className='relative'>
      <motion.img 
        whileTap={{scale:0.6}}
        src={user ? user.photoURL : Avatar} 
        className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" 
        alt="userprofile" 
        onClick={login}
        />

        {
          isMenu && (
            <motion.div 
            initial={{opacity:0, scale:0.6}} 
            animate={{opacity:1, scale:1}}
            exit={{opacity:0, scale:0.6}}

            className='w-40 flex flex-col bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0 '>
            {
              user && user.email === "amankabeer41@gmail.com" && (
                <Link to={'/createItem'}>
                 <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
                transition-all duration-100 ease-in-out text-textColor text-base' onClick={()=>setIsMenu(false)}>New Item <MdAdd /></p>
                </Link>
               
              )
            }
  
            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
            transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}>
              Log Out <MdLogout /></p>
          </motion.div>
          )
        }
      
      </div>

        </div>

        </div>
        
        {/* mobile */}
        <div className='flex items-center justify-between md:hidden w-full h-full '>

        <div className='relative flex items-center justify-center' onClick={showCart}>
           <MdShoppingBasket className='text-textColor text-2xl cursor-pointer'/>
           {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>


        <Link to={'/'} className='flex item-center gap-2'>
             <img src={Logo} className="w-10 object-cover" alt="logo" />
             <p className='text-headingColor text-xl font-bold'>kidilan food</p>
           </Link>



           <div className='relative'>
      <motion.img 
        whileTap={{scale:0.6}}
        src={user ? user.photoURL : Avatar} 
        className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" 
        alt="userprofile" 
        onClick={login}
        />

        {
          isMenu && (
            <motion.div 
            initial={{opacity:0, scale:0.6}} 
            animate={{opacity:1, scale:1}}
            exit={{opacity:0, scale:0.6}}

            className='w-40 flex flex-col bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0 '>
            {
              user && user.email === "vetrivel.galaxy@gmail.com" && (
                <Link to={'/createItem'}>
                 <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
                transition-all duration-100 ease-in-out text-textColor text-base' onClick={()=>setIsMenu(false)}>New Item <MdAdd /></p>
                </Link>
               
              )
            }

        <ul className='flex flex-col'>
            <li className='text-base text-textColor px-4 py-2 hover:bg-slate-100 duration-100
            transition-all ease-in-out cursor-pointer' onClick={()=>setIsMenu(false)}>Home</li>
            <li className='text-base text-textColor px-4 py-2 hover:bg-slate-100 duration-100
            transition-all ease-in-out cursor-pointer' onClick={()=>setIsMenu(false)}>Menu</li>
            <li className='text-base text-textColor px-4 py-2 hover:bg-slate-100 duration-100
            transition-all ease-in-out cursor-pointer' onClick={()=>setIsMenu(false)}>About Us</li>
            <li className='text-base text-textColor px-4 py-2 hover:bg-slate-100 duration-100
            transition-all ease-in-out cursor-pointer' onClick={()=>setIsMenu(false)}>Services</li>
         </ul>
  
            <p className='m-2 p-2 flex items-center rounded-md shadow-md gap-3 justify-center bg-gray-200 cursor-pointer
             hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base'
             onClick={logout}>Log Out <MdLogout /></p>
          </motion.div>
          )
        }
      
      </div>

        </div>

    </header>
  )
}

export default Header