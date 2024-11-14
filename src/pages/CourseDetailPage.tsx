import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';

interface Lesson {
    session: string;
    topic: string;
    description: string;
}

interface Review {
    name: string;
    comment: string;
    rating: number;
}

interface Course {
    id: number;
    image: string;
    title: string;
    description: string;
    teacher: string;
    rating: number;
    price: number;
    lessons: Lesson[];
    reviews: Review[];
}

const courses: Course[] = [
    {
        id: 1,
        image: "/assets/react-js-banner.jpg",
        title: "Programming With React",
        description: "Learn the fundamentals of React, including components, JSX, and hooks to build interactive user interfaces.",
        teacher: "Richard Gunawan",
        rating: 4.5,
        price: 480000,
        lessons: [
            { 
                session: "Session 1", 
                topic: "Introduction to React", 
                description: "An introduction to the React library and its core concepts." 
            },
            { 
                session: "Session 2", 
                topic: "Components and Props", 
                description: "Learn about creating reusable components and managing props." 
            },
            { 
                session: "Session 3", 
                topic: "State and Lifecycle", 
                description: "Understand how to manage state and the component lifecycle in React." 
            },
        ],
        reviews: [
            { name: "Elena", comment: "Excellent course!", rating: 5 },
            { name: "Marvella", comment: "Very informative!", rating: 4 },
            { name: "Sergio", comment: "Very informative!", rating: 4 },
        ]
    },
   
];

const CourseDetail = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const [course, setCourse] = useState<Course | null>(null);
    const [activeTab, setActiveTab] = useState<'lessons' | 'review'>('lessons');

    useEffect(() => {
        const foundCourse = courses.find(c => c.id === Number(courseId));
        setCourse(foundCourse || null);
    }, [courseId]);

    if (!course) return <div>Loading...</div>;

    const fullStars = Math.floor(course.rating);
    const halfStar = course.rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    const formattedPrice = new Intl.NumberFormat('id-ID').format(course.price);

    return (
        <div className="flex flex-col px-4">
            <h1 className="text-zinc-800 font-bold text-2xl">
                Course Detail
            </h1>

            <div className="mt-5 bg-light-blue py-3 px-2 relative flex">
                <div className="w-1/2 pr-4">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                <div className="w-1/2 pl-4">
                    <h2 className="text-zinc-800 font-bold text-xl mb-2">{course.title}</h2>
                    <p className="text-zinc-600 mb-4 text-sm">{course.description}</p>

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
                        <span className="text-md font-bold text-zinc-800">
                            IDR {formattedPrice}
                        </span>
                    </div>
                </div>
            </div>

            {/* Tab Menu */}
            <div className="mt-4">
                <div className="flex border-b">
                    <button
                        className={`py-2 px-4 ${activeTab === 'lessons' ? 'text-dark-moderate-blue font-bold border-b-2 border-dark-moderate-blue' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('lessons')}
                    >
                        Course Details
                    </button>
                    <button
                        className={`py-2 px-4 ${activeTab === 'review' ? 'text-dark-moderate-blue font-bold border-b-2 border-dark-moderate-blue' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('review')}
                    >
                        Reviews
                    </button>
                </div>

                <div className="mt-4">
                    {activeTab === 'lessons' && (
                        <div className="bg-white shadow rounded-lg p-6 text-zinc-800">
                            <h3 className="text-2xl font-bold mb-4 text-moderate-blue">Course Overview</h3>
                            <p className="mb-4 text-gray-700">{course.description}</p>
                            <h4 className="text-xl font-semibold text-moderate-blue mb-3">Lessons Outline</h4>
                            <ul className="space-y-4">
                                {course.lessons.map((lesson: Lesson, index: number) => (
                                    <li key={index} className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                                        <h5 className="text-lg font-semibold text-azure">{lesson.session}: {lesson.topic}</h5>
                                        <p className="text-gray-600 mt-2">{lesson.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === 'review' && (
                        <div className="bg-white shadow rounded-lg p-6 text-zinc-800">
                            <h3 className="text-2xl font-bold mb-4 text-moderate-blue">Reviews</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                {course.reviews.map((review: Review, index: number) => (
                                    <li key={index} className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                                        <div className="flex items-center mb-2">
                                            <FaUserCircle className="text-3xl text-gray-500 mr-3" />
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-lg text-zinc-800">{review.name}</span>

                                                <div className="flex items-center text-yellow-500">
                                                    {Array(Math.floor(review.rating)).fill(<FaStar />)}
                                                    {review.rating % 1 !== 0 && <FaStarHalfAlt />}
                                                    {Array(5 - Math.ceil(review.rating)).fill(<FaRegStar />)}

                                                    <span className="ml-2 text-xs text-gray-500">2h ago</span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mt-2 line-clamp-4">
                                            {review.comment}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;