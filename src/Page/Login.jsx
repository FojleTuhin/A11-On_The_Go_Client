import { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Firebase/FirebaseProvider';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import login from '../assets/Login.json'
import Lottie from 'lottie-react';


const logInStyle = {
    backgroundImage:
        "url('https://i.ibb.co/mS4fXSD/layered-waves-haikei.png')",
    height: "130vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}



const Login = () => {

    const { signIn, googleLogin, facebookLogin } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully login",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/')
                console.log(result);
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


    const handleLogIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;


        signIn(email, password)
            .then(result => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Login",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Password or email don't match!",

                });
            })

    }


    return (
        <div style={logInStyle}>
            <div className='md:flex justify-evenly'>
                <div>
                    <Link to='/'>
                        <Lottie animationData={login} className="h-[400px] mt-10" />
                    </Link>
                </div>
                <div>
                    <div className="hero min-h-screen ">
                        <div className="hero-content flex-col ">
                            <div className="text-center ">
                                <h1 className="text-4xl font-bold">Login now!</h1>
                            </div>
                            <div className="card shrink-0  max-w-sm shadow-2xl bg-[#c8d7d7]">
                                <form onSubmit={handleLogIn} className="card-body ">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover font-bold text-blue-600">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-[#8aabab] font-extrabold text-white">Login</button>
                                    </div>


                                </form>
                                <div className="flex gap-8 justify-evenly mb-3 px-4">
                                    <button onClick={handleGoogleLogin} className="btn "><FaGoogle />Google </button>
                                    <button onClick={handleFacebookLogin} className="btn"><FaFacebook />Facebook</button>
                                </div>

                                <div className="mb-8 px-6 text-center">
                                    <p>New? <span className="font-bold  text-blue-600"><Link to='/register'>Sign up</Link></span></p>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;