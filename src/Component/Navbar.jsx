

import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Firebase/FirebaseProvider';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Scroll handler
    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // If scroll down
            setIsNavbarVisible(false);
        } else {
            // If scroll up
            setIsNavbarVisible(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch();
    };

    const links = (
        <>
            <Link to='/'><li><a className="font-medium ">Home</a></li></Link>
            <Link to='/addBlog'><li><a className="font-medium ">Add blog</a></li></Link>
            <Link to='/allBlogs'><li><a className="font-medium ">All blogs</a></li></Link>
            <Link to='/featuredBlogs'><li><a className="font-medium ">Featured blogs</a></li></Link>
            <Link to='/wishlist'><li><a className="font-medium ">Wishlist</a></li></Link>
        </>
    );

    return (
        <div className={`px-4 md:px-8 lg:px-[70px] text-[#FFF] fixed z-10 w-full transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="navbar pt-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                            {user ? (
                                <div className='z-40'>
                                    <a id="clickable"><img className="w-12 h-12 border border-black mr-3 rounded-full" src={user.photoURL} /></a>
                                    <Tooltip anchorSelect="#clickable" clickable>
                                        <button className='text-center font-bold m-auto'>{user.displayName}</button>
                                        <Link> <a onClick={handleSignOut} className=" border border-black flex gap-2 justify-center items-center px-6 py-3 font-medium rounded-3xl"><FaRegUser /> Sign out</a></Link>
                                    </Tooltip>
                                </div>
                            ) : (
                                <div className='md:flex gap-2 mt-4'>
                                    <Link to='/login'> <a className=" border border-white md:border-black  text-black flex gap-2 justify-center items-center px-6 py-3 font-medium rounded-3xl"><FaRegUser /> Login</a></Link>
                                    <Link to='/register' className=" border mt-3 border-white md:border-black  text-black flex gap-2 justify-center items-center px-6 py-3 font-medium rounded-3xl"><FaRegUser />Sign up</Link>
                                </div>
                            )}
                        </ul>
                    </div>

                    <div className="md:flex items-center">
                        <img className='h-[50px] w-[50px] hidden md:block' src="https://i.ibb.co/BcqyDDJ/on-the-go-logo.png" alt="" />
                        <Link to='/'><a className="btn btn-ghost md:text-xl font-bold">On The Go</a></Link>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end max-sm:hidden">
                    {user ?
                        (
                            <div className='flex gap-4'>
                                <a id="clickable"><img className="w-12 h-12 border border-black mr-3 rounded-full" src={user.photoURL} /></a>
                                <Link> <a onClick={handleSignOut} className=" border border-black flex gap-2 justify-center items-center px-6 py-3 font-medium rounded-3xl"><FaRegUser /> Sign out</a></Link>
                            </div>
                        )
                        :
                        (
                            <div className='flex gap-2'>
                                <Link to='/login'> <a className=" border border-black flex gap-2 justify-center items-center px-6 py-3 font-medium rounded-3xl"><FaRegUser /> Login</a></Link>
                               

                            </div>
                        )
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;
