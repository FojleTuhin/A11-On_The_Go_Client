import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Newsletter = () => {

    const handleNewsLetter=(e)=>{
        e.preventDefault();
        toast.success('"Thank you for subscribing to our newsletter')

        e.target.reset();


    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <p className="text-center pt-20 text-3xl font-bold">Newsletter</p>
            <p className="text-center mt-6 text-xl text-gray-500 ">Subscribe to our newsletter for the latest blog posts, tips, & travel guides. Let's stay updated!</p>
            <div className="mt-10 mb-10 w-[50%] m-auto">
                <form onSubmit={handleNewsLetter}>
                    <input type="text" placeholder="Email..." className="w-[70%] border-2 border-black h-[48px] px-6"/>
                    <button type="submit" className="bg-black text-white py-3 px-6 ml-5 font-bold">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;