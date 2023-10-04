import HotelCard from "../HotelCard/HotelCard";


const HotelTab = ({ hotel }) => {
    console.log(hotel)
    return (
        <div className="mt-6 grid grid-cols-3 gap-6">
            {
                hotel.map(singleHotel => <HotelCard key={singleHotel.id} singleHotel={singleHotel}></HotelCard>)
            }
        </div>
    );
};

export default HotelTab;