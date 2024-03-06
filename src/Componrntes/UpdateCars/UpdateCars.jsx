import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCars = () => {
    const cars = useLoaderData();
    const {_id,carName,engineName,cubicCC,price,photo} = cars;

    const handleUpdateCars = event =>{
      event.preventDefault();
      const form = event.target;
      const carName = form.carName.value;
      const engineName = form.engineName.value;
      const cubicCC= form.cubicCC.value;
      const price= form.price.value;
      const photo = form.photo.value;
      const updatedCar = {carName,engineName,cubicCC,price,photo};
      console.log(updatedCar);

      // Send data to the server
      fetch(`https://cars-store-server-kpuhfdxox-md-fuad-amirs-projects.vercel.app/car/${_id}`,{
        method: 'PUT',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedCar)
      })
      .then(res => res.json())
      .then(data =>{
        if(data.modifiedCount > 0){
          Swal.fire({
            title: 'Success!',
            text: 'car update successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
  }
  
    return (
        <div className="bg-gray-100 max-w-5xl mx-auto p-4 md:p-8 rounded-lg mt-12">
        <div className="text-center">
            <h2 className="font-bold text-zinc-600 text-3xl w-fit mx-auto border-b-2 px-8 pb-2 border-green-500 ">Update a car : {carName}</h2>
            <p className="p-2 text-zinc-600">Update your cars details. no hardWork no success</p>
        </div>
      <form onSubmit={handleUpdateCars}> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            {/* 1 */}
            <div className="form-control">
          <label className="label">
            <span className="text-zinc-600">Car Name</span>
          </label>
          <input type="text" name="carName" placeholder="Car Name" defaultValue={carName} className="input input-bordered" required />
        </div>
        {/* 2 */}
        <div className="form-control">
          <label className="label">
            <span className="text-zinc-600">Engine Name</span>
          </label>
          <input type="text" name="engineName" placeholder="Engine name" defaultValue={engineName} className="input input-bordered" required />
        </div>
        {/* 3 */}
        <div className="form-control">
          <label className="label">
            <span className="text-zinc-600">Price</span>
          </label>
          <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered" required />
        </div>
        {/* 4 */}
        <div className="form-control">
          <label className="label">
            <span className="text-zinc-600">Cubic Capacity</span>
          </label>
          <input type="text" name="cubicCC" placeholder="CC" defaultValue={cubicCC}className="input input-bordered" required />
        </div>
        </div>
        {/* 5 */}
        <div className="text-xl space-y-4 mt-4"> 
        <div className="form-control">
          <label className="label">
            <span className="text-zinc-600 text-base">Car Photo</span>
          </label>
          <input type="text" name="photo" placeholder="Photo Url" defaultValue={photo}className="input input-bordered" required />
        </div>
        {/* btn */}
        <div>
            <input type="submit" value="Update this car" className="btn w-full bg-green-300 text-xl text-gray-600" />
        </div>
        </div>

      </form>
    </div>
    );
};

export default UpdateCars;