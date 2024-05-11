import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#1F2744]'>
            <div className=" px-4 md:px-8 lg:px-[100px] py-16 grid md:grid-cols-3 gap-6 justify-center text-white">
                <div>
                    <div className='flex items-center'>
                        <img className='h-[50px] w-[50px]' src="https://i.ibb.co/BcqyDDJ/on-the-go-logo.png" alt="" />
                        <Link to='/'><a className="btn btn-ghost text-xl font-bold">On The Go</a></Link>
                    </div>
                    <p className="mt-9 text-[#9D9EA1]">Customer Supports:</p>
                    <p>(+880) 1877127477</p>
                    <p className="mt-3 text-[#9D9EA1]">Taltola, Agargaon <br /> Dhaka 1207</p>
                    <p className="mt-3">fojletuhin@gmail.com</p>
                    <div className="flex gap-12 mt-5 mb-5 text-4xl">
                        <a href="https://www.facebook.com/fojla.tuhin" target='blank'> <BsFacebook /></a>
                        <a href="https://www.instagram.com/fojletuhin/" target='blank'> <BsInstagram /></a>
                        <a href="https://github.com/FojleTuhin" target='blank'> <BsGithub /></a>


                    </div>

                </div>

                <div>
                    <p className="font-semibold mt-2 mb-8 text-xl text-center md:text-left">Properties</p>
                    <ul>
                        <li className="mb-2">About us</li>
                        <li className="mb-2">Our Mission</li>
                        <li className="mb-2">Privacy Policy</li>
                        <li className="mb-2">Help Center</li>
                        <li className="mb-2">Contact us</li>
                    </ul>
                </div>
                <div>
                    <p className="font-semibold mt-2 mb-8 text-xl text-center md:text-left">Area</p>
                    <ul>
                        <li className="mb-2">Bandarban</li>
                        <li className="mb-2">Rangamati</li>
                        <li className="mb-2">Cox's Bazar</li>
                        <li className="mb-2">Sitakund</li>
                        <li className="mb-2">Chandpur</li>
                    </ul>
                </div>

            </div>
            <p className='text-center pb-10'>© 2024 . All rights reserved.</p>
        </div>
    );
};

export default Footer;