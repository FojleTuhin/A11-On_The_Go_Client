import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Newsletter = () => {

    const handleNewsLetter=(e)=>{
        e.preventDefault();
        toast.success('"Thank you for subscribing to our newsletter')

        e.target.reset();


    }
    return (
        <div className='px-4 md:px-8 lg:px-[70px] py-20 bg-[#F8F6F1] mt-10'>
            <ToastContainer></ToastContainer>
            <p className="text-center text-3xl font-bold">Newsletter</p>
            <p className="text-center mt-6 text-xl text-gray-500 ">Subscribe to our newsletter for the latest blog posts, tips, & travel guides. Let's stay updated!</p>
            <div className="mt-10  w-[50%] m-auto ">
                <form onSubmit={handleNewsLetter}>
                    <input type="text" placeholder="Email..." required className="w-[90%] md:w-[70%] border-2 border-black h-[48px] px-6"/>
                    <button type="submit" className="bg-black text-white py-3 px-6 ml-5 font-bold">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;