import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    const {creatUser} = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = {name,email,password};
        console.log(newUser);

        // creat user
        creatUser(email,password)
        .then(result =>{
            console.log(result.user);
            // new user has been created
            const creaedtAt = result.user?.metadata?.creationTime;
            const lastSignIn = result.user?.metadata?.lastSignInTime;
            const userUid = result.user?.uid;
            const user = {email, createdAt: creaedtAt, lastSignIn: lastSignIn, userUid: userUid};
            fetch('http://localhost:5000/user',{
                method: "POST",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'account created successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
        })
        .then(error =>{
            console.log(error);
        })
        // creat user
    }
    return (
        <div className="bg-gray-100 max-w-2xl mx-auto p-4 md:p-8 rounded-lg mt-12">
        <div className="text-center">
            <h2 className="font-bold text-zinc-600 text-3xl w-fit mx-auto border-b-2 px-8 pb-2 border-green-500 ">SignUp Now</h2>
            <p className="p-2 text-zinc-600">SignUp to this website and see something</p>
        </div>
      <form onSubmit={handleRegister}> 
        <div className="">
            {/* 1 */}
            <div className="form-control">
          <label className="label">
            <span className="text-zinc-600">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your name"  className="input input-bordered" required />
        </div>
            {/* 2 */}
            <div className="form-control">
          <label className="label">
            <span className="text-zinc-600">Email</span>
          </label>
          <input type="email" name="email" placeholder="Your email"  className="input input-bordered" required />
        </div>
        {/* 3 */}
        <div className="form-control">
          <label className="label">
            <span className="text-zinc-600">Password</span>
          </label>
          <input type="password" name="password" placeholder="password"  className="input input-bordered" required />
        </div>
        {/* //// */}
        <div className="mt-6">
            <input type="submit" value="SignUp Now" className="btn w-full bg-green-300 text-xl text-gray-600" />
        </div>
        <div className="mt-4">
            <p>have an account please <Link className="text-lg font-semibold text-blue-500" to='/login'>Login</Link></p>
        </div>
        </div>
        

      </form>
    </div>
    );
};

export default Register;