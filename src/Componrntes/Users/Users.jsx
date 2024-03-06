import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser);

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`https://cars-store-server-kpuhfdxox-md-fuad-amirs-projects.vercel.app/user/${_id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                Swal.fire({
                title: "Deleted!",
                text: "Your account information has been deleted.",
                icon: "success"
              });
              const remainingCars = users.filter(user => user._id !== _id);
              setUsers(remainingCars);
                }
            })
            }
          });
    }


    return (
        <div className="max-w-6xl mx-auto min-h-screen">
            <h2 className="text-4xl font bold w-fit mx-auto my-8 pb-4 border-b-4 border-green-500 px-8">User Informations</h2>
            {/* overflow-x-auto */}
            <div className="">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Email</th>
        <th>Created</th>
        <th>last Login</th>
        <th>User Uid</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        // lastSignIn
        users.map(user => <tr key={user._id}>
            <td>{user.email}</td>
            <td>{user?.createdAt}</td>
            <td>{user?.lastLoggedAt}</td>
            <td>{user?.userUid}</td>
            <td>
            <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className="">...</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><button>Edit</button></li>
    <li><button onClick={() => handleDelete(user._id)}>Delete</button></li>

  </ul>
</div>
            </td>
          </tr>)
      }

      
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Users;