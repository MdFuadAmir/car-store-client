import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {
  const {signInUser} = useContext(AuthContext);

  const handleSignIn = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signInUser(email,password)
    .then(result =>{
      console.log(result.user);
      const user = {
        email,
        lastLoggedAt: result?.user?.metadata?.lastSignInTime
      }
      // update lastLoggedAt in the database
      fetch('http://localhost:5000/user',{
        method: "PATCH",
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
      })
    })
    .catch(error =>{
      console.log(error);
    })

  }
    return (
        <div className="bg-gray-100 max-w-2xl mx-auto p-4 md:p-8 rounded-lg mt-12">
        <div className="text-center">
            <h2 className="font-bold text-zinc-600 text-3xl w-fit mx-auto border-b-2 px-8 pb-2 border-green-500 ">Login Now</h2>
            <p className="p-2 text-zinc-600">Login your page and see activity</p>
        </div>
      <form onSubmit={handleSignIn}> 
        <div className="">
            {/* 1 */}
            <div className="form-control">
          <label className="label">
            <span className="text-zinc-600">Email</span>
          </label>
          <input type="email" name="email" placeholder="Your email"  className="input input-bordered" required />
        </div>
        {/* 2 */}
        <div className="form-control">
          <label className="label">
            <span className="text-zinc-600">Password</span>
          </label>
          <input type="password" name="password" placeholder="password"  className="input input-bordered" required />
        </div>
        <div className="mt-6">
            <input type="submit" value="Login Now" className="btn w-full bg-green-300 text-xl text-gray-600" />
        </div>
        <div className="mt-4">
            <p>Dont have an account please <Link className="text-lg font-semibold text-blue-500" to='/register'> Register</Link></p>
        </div>
        </div>
        

      </form>
    </div>
    );
};

export default Login;