import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface CourseProps {
    id: string,
    image: string;
    title: string;
    teacher: string;
    rating: number;
    price: number;
    onCourseClick: (courseId: number) => void;
    onPopularCourseClick: (courseId: number) => void;
    isPopular?: boolean;
}
  
const Course: React.FC<CourseProps> = ({ id, image, title, teacher, rating, price, onCourseClick, onPopularCourseClick, isPopular = false }) => {
    const fullStars = Math.floor(rating); 
    const halfStar = rating % 1 !== 0 ? 1 : 0; 
    const emptyStars = 5 - fullStars - halfStar; 

    const formattedPrice = new Intl.NumberFormat('id-ID').format(price);

    return (
        <div 
            className="flex-shrink-0 w-1/4 flex flex-col items-start text-left bg-soft-blue rounded-lg cursor-pointer"
            onClick={() => {
                if (isPopular) {
                    onPopularCourseClick(Number(id));
                } else {
                    onCourseClick(Number(id)); 
                }
            }}>

            <img
                className="w-full object-contain h-32 object-cover mb-2 rounded-t-lg"
                src={image}
                alt={`${title} banner`}
            />

            <div className="text-zinc-800 font-semibold text-sm space-y-1 px-1 pb-1">
                <h1 className="text-sm">{title}</h1>
                <p className="text-gray-500 font-medium text-xs">{teacher}</p>
            </div>

            <div className="flex flex-col items-start space-y-1 px-1 pb-2">
                <div className="flex items-center space-x-1 text-yellow-500">
                    <span className="text-zinc-800 font-medium text-xs">{rating.toFixed(1)}</span>

                    {Array(fullStars).fill(<FaStar className="text-sm" />)}
                    {halfStar > 0 && <FaStarHalfAlt className="text-sm" />}
                    {Array(emptyStars).fill(<FaRegStar className="text-sm" />)}
                </div>

                <div className="flex items-center space-x-1">
                    <span className="text-sm font-bold text-zinc-800">
                        IDR {formattedPrice}
                    </span>
                </div>
            </div>
        </div>
    );
};
  
export default Course;