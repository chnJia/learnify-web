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
            { 
                session: "Session 4", 
                topic: "Handling Events", 
                description: "Learn how to handle user interactions and events in React." 
            },
            { 
                session: "Session 5", 
                topic: "React Router Basics", 
                description: "An introduction to routing in React and creating multi-page applications." 
            },
            { 
                session: "Session 6", 
                topic: "Hooks: useState and useEffect", 
                description: "Understand React Hooks for managing state and side effects in functional components." 
            },
            { 
                session: "Session 7", 
                topic: "Custom Hooks", 
                description: "Learn how to build reusable logic by creating custom hooks in React." 
            },
        ],
        reviews: [
            { name: "Elena", comment: "Excellent course!", rating: 5 },
            { name: "Marvella", comment: "Very informative!", rating: 4 },
            { name: "Sergio", comment: "Very informative!", rating: 4 },
        ]
    },
    {
        id: 2,
        image: "/assets/Algebra-course.jpg",
        title: "Mastering Algebra",
        description: "A comprehensive guide to Algebra designed for senior high school students, covering foundational to advanced topics to build strong mathematical skills.",
        teacher: "Janneth Christoper",
        rating: 4.7,
        price: 320000,
        lessons: [
            {
                session: "Session 1",
                topic: "Introduction to Algebra",
                description: "Understand the basics of algebra, including variables, constants, and operations.",
            },
            {
                session: "Session 2",
                topic: "Linear Equations and Inequalities",
                description: "Learn how to solve linear equations and graph inequalities on a number line.",
            },
            {
                session: "Session 3",
                topic: "Polynomials and Factoring",
                description: "Explore polynomial expressions, their degrees, and methods for factoring.",
            },
            {
                session: "Session 4",
                topic: "Quadratic Equations",
                description: "Learn to solve quadratic equations using factoring, completing the square, and the quadratic formula.",
            },
            {
                session: "Session 5",
                topic: "Functions and Graphs",
                description: "Understand the concept of a function and how to represent it graphically.",
            },
            {
                session: "Session 6",
                topic: "Exponents and Radicals",
                description: "Master the rules of exponents and the simplification of radical expressions.",
            },
            {
                session: "Session 7",
                topic: "Systems of Equations",
                description: "Learn methods to solve systems of equations, including substitution and elimination.",
            },
        ],
        reviews: [
            { name: "John", comment: "Great course!", rating: 4 },
            { name: "Sarah", comment: "Good overview of Angular.", rating: 5 },
        ]
    },
    {
        id: 3,
        image: "/assets/Biology.jpg",
        title: "Biology for Senior High 1",
        description: "An in-depth course designed for senior high school students, covering key biological concepts, from cell biology to ecosystems, to build a solid foundation in the study of life sciences.",
        teacher: "Dian Indrajani",
        rating: 4.0,
        price: 299000,
        lessons: [
            {
                session: "Session 1",
                topic: "Introduction to Biology",
                description: "Explore the basics of biology, including the scientific method, cell structure, and the role of DNA in inheritance."
            },
            {
                session: "Session 2",
                topic: "Cell Biology",
                description: "Understand the structure and function of cells, cell division, and the different types of cells found in living organisms."
            },
            {
                session: "Session 3",
                topic: "Genetics and Heredity",
                description: "Learn the principles of genetics, inheritance patterns, and how traits are passed from one generation to the next."
            },
            {
                session: "Session 4",
                topic: "Human Anatomy and Physiology",
                description: "Study the structure and functions of the human body, focusing on major systems such as the circulatory, respiratory, and nervous systems."
            },
            {
                session: "Session 5",
                topic: "Ecology and Ecosystems",
                description: "Understand the interactions between organisms and their environment, including food chains, energy flow, and ecological succession."
            },
            {
                session: "Session 6",
                topic: "Evolution and Natural Selection",
                description: "Learn about the theory of evolution, natural selection, and the evidence supporting the evolution of species over time."
            },
            {
                session: "Session 7",
                topic: "Microorganisms and Diseases",
                description: "Explore the world of microorganisms, their role in ecosystems, and their impact on human health through diseases and infections."
            },
        ],
        reviews: [
            { name: "John", comment: "Great course!", rating: 4 },
            { name: "Sarah", comment: "Good overview of Angular.", rating: 5 },
        ]
    },
    {
        id: 4,
        image: "/assets/Python.jpg",
        title: "Python for Beginner",
        description: "An introductory course designed for senior high school students, covering the fundamentals of Python programming. Students will learn basic concepts such as variables, data types, and control structures to build a foundation for coding and problem-solving in Python.",
        teacher: "Belinda Wati",
        rating: 4.3,
        price: 280000,
        lessons: [
            {
                session: "Session 1",
                topic: "Introduction to Python",
                description: "Get started with Python programming by learning about the basic syntax, variables, and how to run Python programs."
            },
            {
                session: "Session 2",
                topic: "Data Types and Variables",
                description: "Understand the different data types in Python (strings, integers, floats, booleans) and how to use variables to store information."
            },
            {
                session: "Session 3",
                topic: "Control Structures: If, Else, Elif",
                description: "Learn how to control the flow of your program with conditional statements like if, else, and elif."
            },
            {
                session: "Session 4",
                topic: "Loops: For and While",
                description: "Explore how to repeat actions using loops, and learn when to use for loops and while loops."
            },
            {
                session: "Session 5",
                topic: "Functions and Modular Programming",
                description: "Learn how to create and use functions to organize code and make it reusable and modular."
            },
            {
                session: "Session 6",
                topic: "Lists and Dictionaries",
                description: "Master the use of lists and dictionaries in Python to store collections of data and access them efficiently."
            },
            {
                session: "Session 7",
                topic: "Error Handling and Debugging",
                description: "Understand how to handle errors in your Python programs and use debugging tools to fix common problems."
            },
        ],
        reviews: [
            { name: "John", comment: "Great course!", rating: 4 },
            { name: "Sarah", comment: "Good overview of Angular.", rating: 5 },
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
                        className="w-full h-52 object-cover rounded-lg"
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