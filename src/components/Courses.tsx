import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface CourseProps {
    image: string;
    title: string;
    teacher: string;
    rating: number;
    price: number;
}
  
const Course: React.FC<CourseProps> = ({ image, title, teacher, rating, price }) => {
    const fullStars = Math.floor(rating); 
    const halfStar = rating % 1 !== 0 ? 1 : 0; 
    const emptyStars = 5 - fullStars - halfStar; 

    const formattedPrice = new Intl.NumberFormat('id-ID').format(price);

    return (
        <div className="flex-shrink-0 w-1/3 flex flex-col items-start text-left bg-soft-blue rounded-lg">
            <img
            className="w-full object-contain h-40 object-cover mb-3 rounded-t-lg"
            src={image}
            alt={`${title} banner`}
            />

            <div className="text-zinc-800 font-bold text-lg space-y-1 px-2 pb-1">
                <h1>{title}</h1>
                <p className="text-gray-500 font-medium text-sm">{teacher}</p>
            </div>

            <div className="flex flex-col items-start space-y-1 px-2 pb-2">
                <div className="flex items-center space-x-2 text-yellow-500">
                    <span className="text-zinc-800 font-medium text-sm">{rating.toFixed(1)}</span>

                    {Array(fullStars).fill(<FaStar className="text-lg" />)}
                    {halfStar > 0 && <FaStarHalfAlt className="text-lg" />}
                    {Array(emptyStars).fill(<FaRegStar className="text-lg" />)}
                </div>

                <div className="flex items-center space-x-2">
                    <span className="text-md font-bold text-zinc-800">
                        IDR {formattedPrice}
                    </span>
                </div>
            </div>
      </div>
    );
};
  
export default Course;  