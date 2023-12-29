import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {signIn, googleSignIn} = useAuth()


    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // signIn
        signIn(email, password)
        .then((result) => {
            console.log(result.user)
            Swal.fire({
              title: 'Success!',
              text: 'Login successful',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            navigate(location?.state?.from?.pathname || '/')
        })
        .catch((err) => {
          console.log(err)
          Swal.fire({
            title: 'Login Failed!',
            text: 'Invalid Email or Password',
            icon: 'error',
            confirmButtonText: 'Try again'
          })
        });
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res => {
            console.log(res)
            Swal.fire({
                title: 'Success!',
                text: 'Login successful',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            navigate(location?.state?.from?.pathname || '/dashboard')
        })
        .catch(err => {
            console.log(err)
            Swal.fire({
                title: 'Login Failed!',
                text: 'Invalid Email or Password',
                icon: 'error',
                confirmButtonText: 'Try again'
              })
        })
      }

    
    return (
        <>
        <div className="hero min-h-screen font-dmsans py-8 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="hero-content p-0 w-full gap-16 justify-center items-center">
            <div className="card bg-base-100 flex-shrink-0 w-full md:max-w-96 p-5 py-8 lg:p-10">
                <h2 className="text-4xl font-semibold text-center mb-2">Login</h2>
                <form onSubmit={handleLogin} className="card-body pb-2 px-0">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your email"
                        className="input input-bordered"
                        name="email"
                        required
                    />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Your password"
                            className="input input-bordered"
                            name="password"
                            required
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                            Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="form-control mt-6 space-y-3">
                        <button className="btn btn-primary normal-case text-base">Login</button>
                    </div>
                </form>
                <div className="divider mb-6">OR</div>
                <div className="flex justify-center gap-4">
                    <button onClick={handleGoogleSignIn} className="btn btn-primary btn-outline normal-case text-base w-full "><FcGoogle className="text-xl"></FcGoogle>Google</button>
                </div>
                <p className="text-[#737373] text-center text-sm mt-10">Not have an account? <Link to={'/sign-up'} className="text-primary font-semibold hover:btn-link">Sign Up</Link></p>
            </div>
            </div>
        </div>
    </>
    );
};

export default Login;