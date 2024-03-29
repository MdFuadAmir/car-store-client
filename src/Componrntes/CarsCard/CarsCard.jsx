import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CarsCard = ({car, cars,setCars}) => {
    const {_id,carName,engineName,cubicCC,price,photo} = car;

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
            
            fetch(`https://cars-store-server-kpuhfdxox-md-fuad-amirs-projects.vercel.app/car/${_id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                Swal.fire({
                title: "Deleted!",
                text: "Your car has been deleted.",
                icon: "success"
              });
              const remainingCars = cars.filter(car => car._id !== _id);
              setCars(remainingCars);
                }
            })
            }
          });
    }
    return (
        <div className="card card-compact rounded-lg bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Car photo" /></figure>
  <div className="p-4 flex justify-between">
    <div className="space-y-2 mt-4">
    <h2 className="text-lg"><span className="font-bold">Car Name:</span> {carName}</h2>
    <p><span className="font-bold">Engine:</span> {engineName}</p>
    <p><span className="font-bold">Cubic Capacity:</span> {cubicCC} cc</p>
    <p><span className="font-bold">Price:</span> {price}</p>
    </div>
    <div className="grid space-y-1">
        <button className="btn bg-stone-500 text-lg text-white">I</button>
        <Link to={`updateCars/${_id}`}>
        <button className="btn bg-gray-600 text-lg text-white">R</button>
        </Link>
        <button className="btn bg-red-500 text-lg text-white" onClick={()=> handleDelete(_id)}>X</button>
    </div>
  </div>
</div>
    );
};

export default CarsCard;

CarsCard.propTypes ={
    car: PropTypes.object.isRequired,
    cars: PropTypes.object.isRequired,
    setCars: PropTypes.object.isRequired

}