import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Newsletter = () => {

    const handleNewsLetter = (e) => {
        e.preventDefault();
        toast.success('"Thank you for subscribing to our newsletter')

        e.target.reset();


    }
    return (
        <div className='px-5'>
            <div className='px-4 md:px-8 lg:px-[70px] rounded-[32px] py-20 bg-[#D9EFFA] mt-10'>
                <ToastContainer></ToastContainer>
                <p className="text-center text-3xl font-bold">Newsletter</p>
                <p className="text-center mt-6 text-xl  ">Subscribe to our newsletter for the latest blog posts, tips, & travel guides. Let's stay updated!</p>
                <div className="mt-10 md:w-[80%] lg:w-[90%] m-auto ">
                    <form onSubmit={handleNewsLetter}>
                        <input type="text" placeholder="Email..." required className="w-[50%] md:w-[70%] lg:w-[80%] border-2 border-black h-[48px] px-6" />
                        <button type="submit" className="bg-black text-white py-3 px-6 ml-5 font-bold">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;