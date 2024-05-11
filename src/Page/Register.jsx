import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Firebase/FirebaseProvider';
import Lottie from 'lottie-react';
import register from '../assets/register.json'








const Register = () => {

    const RegisterStyle = {
        backgroundImage:
            "url('https://i.ibb.co/mS4fXSD/layered-waves-haikei.png')",
        height: "130vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }

    const { createUser, updateUser, googleLogin, facebookLogin } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();


    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                navigate(location?.state ? location.state : '/')
                toast.success('Successfully sign in')
            })
            .catch(error => {
                toast.error('Something wrong')
            })
    }

    const handleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                toast.success('Successfully sign in')

            })
            .catch(error => {
                toast.error('Something wrong')
            })
    }



    const handleLSignIn = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;



        if (password.length < 6) {
            toast.error("Password must be 6 characters.");
            return
        }

        if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).+$/.test(password)) {
            toast.error("Password must be an capital letter, special character and numeric number");
        }

        


        else (
            toast.success('Successfully Sign in!')

        )

        createUser(email, password)
            .then(result => {
                updateUser(name, photo)
                navigate(location?.state ? location.state : '/')
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })



    }


    return (
        <div style={RegisterStyle}>
            <div><Toaster /></div>
            <div className='flex justify-evenly'>
                <div>
                <Lottie animationData={register} className="h-[400px] mt-10"/>
                </div>
                <div>
                    <div className="hero min-h-screen ">
                        <div className=" flex-col ">
                            <div className="text-center mt-5 mb-5">
                                <h1 className="text-4xl font-bold">Register now!</h1>
                            </div>
                            <div className="card shrink-0 w-full shadow-2xl bg-[#c8d7d7]">
                                <form onSubmit={handleLSignIn} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">

                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-[#8aabab] font-extrabold text-white">Sign up</button>
                                    </div>


                                </form>
                                <div className="flex gap-8 justify-evenly mb-3 px-4">
                                    <button onClick={handleGoogleLogin} className="btn "><FaGoogle />Google </button>
                                    <button onClick={handleFacebookLogin} className="btn"><FaFacebook />Facebook</button>
                                </div>
                                <div className="mb-8 px-6 text-center">
                                    <p>Already have an account? <span className="font-bold text-blue-600"><Link to='/login'>Login</Link></span></p>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;