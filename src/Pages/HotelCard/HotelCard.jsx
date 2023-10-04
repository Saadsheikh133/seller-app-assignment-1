import { MdFavorite, MdOutlineBathroom, MdOutlineFavorite, MdOutlineFavoriteBorder, MdOutlineLocationOn } from "react-icons/md";
import { LiaBathSolid, LiaBedSolid } from "react-icons/lia";
import { BsArrowsMove } from "react-icons/bs";

const HotelCard = ({ singleHotel }) => {
    const { hotelName, location, image, rentPerMonth, room, bed, bath } = singleHotel;
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl relative">
                <figure><img className="p-2 rounded-2xl h-[270px]" src={image} alt="Shoes" /></figure>
                <p className="absolute top-2 left-2 m-2 text-blue-600 bg-white px-3 py-1 rounded-2xl font-semibold">For Rent</p>
                <p className="bg-white absolute top-3 right-3 p-2 rounded-2xl">
                    <MdOutlineFavoriteBorder size={20} className="text-blue-700"></MdOutlineFavoriteBorder>
                </p>
                <div className="card-body pt-3">
                    <p> <MdOutlineLocationOn className="text-orange-300 inline"></MdOutlineLocationOn> { location }</p>
                    <h2 className="card-title mb-2">{ hotelName }</h2>
                    <div className="flex justify-evenly items-center">
                        <p> <MdOutlineBathroom className="m-1"></MdOutlineBathroom> {room} Room</p>
                        <p> <LiaBedSolid className="m-1"></LiaBedSolid> {bed} Bed</p>
                        <p> <LiaBathSolid className="m-1"></LiaBathSolid> {bath} Bath</p>
                        <p> <BsArrowsMove className="m-1"></BsArrowsMove> 732 sft</p>
                    </div>
                    <div className=" divider"></div>
                    <div className="card-actions justify-end items-center ">
                        <p><span className="text-xl font-semibold text-blue-700">${rentPerMonth}</span> <span className="text-black font-semibold">/month</span></p>
                        <button className="text-blue-700 border border-blue-800 font-bold px-4 py-2 rounded-2xl">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;