import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const courses = [
    { 
        id: 1,
        image: "/assets/react-js-banner.jpg",
        title: "Programming With React", 
        description: "Learn the fundamentals of React, including components, JSX, and hooks to build interactive user interfaces.",
        teacher: "Richard Gunawan", 
        rating: 4.5, 
        price: 480000
    },
    { 
        id: 2,
        image: "/assets/AlgebraMath.jpeg", 
        title: "Mastering Algebra", 
        description: "Master algebra concepts, equations, and their applications in solving real-world problems.",
        teacher: "Janneth Christopher", 
        rating: 4.7, 
        price: 320000
    },
    { 
        id: 3,
        image: "/assets/Biology.jpg", 
        title: "Biology for Senior High 1", 
        description: "An introductory course to biology, covering topics such as cell biology, genetics, and ecology.",
        teacher: "Dian Indrajani", 
        rating: 4.0, 
        price: 299000
    },
    
];

const CourseDetail = () => {
    const { courseId } = useParams(); 
    const [course, setCourse] = useState<any>(null);

    useEffect(() => {
        const foundCourse = courses.find(c => c.id === Number(courseId));
        setCourse(foundCourse);
    }, [courseId]);

    if (!course) return <div>Loading...</div>;

    const fullStars = Math.floor(course.rating); 
    const halfStar = course.rating % 1 !== 0 ? 1 : 0; 
    const emptyStars = 5 - fullStars - halfStar; 

    const formattedPrice = new Intl.NumberFormat('id-ID').format(course.price);

    return (
        <div className="flex flex-col px-4">
            <h1 className="text-zinc-800 font-medium text-xl">
                {course.title}
            </h1>

            <div className="mt-5 bg-light-blue py-2 px-2 relative flex">
                <div className="w-1/2 pr-4">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                <div className="w-1/2 pl-4">
                    <h2 className="text-zinc-800 font-bold text-lg mb-2">{course.title}</h2>
                    <p className="text-zinc-600 mb-4">{course.description}</p>

                    <div className="flex items-center text-sm text-zinc-500">
                        <span className="font-semibold">Teacher:</span> 
                        <span className="ml-1">{course.teacher}</span>
                    </div>
                    <div className="flex items-center text-sm text-zinc-500">
                        <span className="font-semibold">Rating:</span> 
                        <span className="ml-1">{course.rating} / 5</span>

                        <div className="flex items-center space-x-1 text-yellow-500 ml-2">
                            {Array(fullStars).fill(<FaStar className="text-sm" />)}
                            {halfStar > 0 && <FaStarHalfAlt className="text-sm" />}
                            {Array(emptyStars).fill(<FaRegStar className="text-sm" />)}
                        </div>
                    </div>

                    <div className="flex items-center space-x-1 mt-4">
                        <span className="text-sm font-bold text-zinc-800">
                            IDR {formattedPrice}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;