import { useRef, useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import Course from "../components/Courses";
import { FaAngleRight, FaAngleLeft, FaBookOpen, FaLocationArrow } from "react-icons/fa6";
import { FaSearch, FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
    const courses = [
        { 
            id: 1,
            image: "assets/react-js-banner.jpg", 
            title: "Programming With React", 
            teacher: "Richard Gunawan", 
            rating: 4.5, 
            price: 480000,
            isPopular: false 
        },
        { 
            id: 2,
            image: "assets/Algebra-course.jpg", 
            title: "Mastering Algebra", 
            teacher: "Janneth Christopher", 
            rating: 4.7, 
            price: 320000,
            isPopular: false  
        },
        { 
            id: 3,
            image: "assets/Biology.jpg", 
            title: "Biology for Senior High 1", 
            teacher: "Dian Indrajani", 
            rating: 4.0, 
            price: 299000,
            isPopular: false  
        },
        { 
            id: 4,
            image: "assets/Python.jpg", 
            title: "Python for Beginner", 
            teacher: "Belinda Wati", 
            rating: 4.3, 
            price: 280000,
            isPopular: false  
        },
        { 
            id: 5,
            image: "assets/IELTS-course.jpg", 
            title: "IELTS Full Prep Course", 
            teacher: "Belinda Wati", 
            rating: 4.3, 
            price: 280000,
            isPopular: false  
        },
        { 
            id: 6,
            image: "assets/Algorithm-C++.jpg", 
            title: "Mastering Algorithm in C++", 
            teacher: "Belinda Wati", 
            rating: 4.3, 
            price: 280000,
            isPopular: false  
        },
    ];

    const popularCourses = [
        { 
            id: 1,
            image: "assets/blockchain.png", 
            title: "Introduction to Blockchain", 
            teacher: "Melissa Hermawan", 
            rating: 5.0, 
            price: 315000,
            isPopular: true  
        },
        { 
            id: 2,
            image: "assets/Ai-Course.jpg", 
            title: "AI Programming in C#", 
            teacher: "Dani Yoseph", 
            rating: 4.0, 
            price: 99000,
            isPopular: true   
        },
        { 
            id: 3,
            image: "assets/Python-DataScience.jpg", 
            title: "Python for Data Science", 
            teacher: "Belinda Wati", 
            rating: 4.3, 
            price: 348000,
            isPopular: true   
        },
        { 
            id: 4,
            image: "assets/Python-DataScience.jpg", 
            title: "Python for Data Science", 
            teacher: "Belinda Wati", 
            rating: 4.3, 
            price: 348000,
            isPopular: true   
        },
        { 
            id: 5,
            image: "assets/Python-DataScience.jpg", 
            title: "Python for Data Science", 
            teacher: "Belinda Wati", 
            rating: 4.3, 
            price: 348000,
            isPopular: true   
        },
    ];

    const location = useLocation();
    const upcomingSchedule = location.state || null;

    const navigate = useNavigate();

    const handleCourseClick = (courseId: number) => {
        navigate(`/course/${courseId}`);
    };
        
    const handlePopularCourseClick = (courseId: number) => {
        console.log('Popular course clicked:', courseId);
    };

    const courseContainerRef = useRef<HTMLDivElement>(null);
    const popularCourseContainerRef = useRef<HTMLDivElement>(null);
    const [isScrolledToLeft, setIsScrolledToLeft] = useState(false);
    const [isScrolledToLeftPopular, setIsScrolledToLeftPopular] = useState(false);

    const scrollRight = (containerRef: React.RefObject<HTMLDivElement>) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const scrollLeft = (containerRef: React.RefObject<HTMLDivElement>) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = (containerRef: React.RefObject<HTMLDivElement>, setIsScrolled: React.Dispatch<React.SetStateAction<boolean>>) => {
            if (containerRef.current) {
                const container = containerRef.current;
                const isAtLeft = container.scrollLeft === 0;
                const isAtRight = container.scrollLeft === container.scrollWidth - container.clientWidth;
                setIsScrolled(!isAtLeft);
            }
        };

        const container = courseContainerRef.current;
        container?.addEventListener("scroll", () => handleScroll(courseContainerRef, setIsScrolledToLeft));

        const popularContainer = popularCourseContainerRef.current;
        popularContainer?.addEventListener("scroll", () => handleScroll(popularCourseContainerRef, setIsScrolledToLeftPopular));

        return () => {
            container?.removeEventListener("scroll", () => handleScroll(courseContainerRef, setIsScrolledToLeft));
            popularContainer?.removeEventListener("scroll", () => handleScroll(popularCourseContainerRef, setIsScrolledToLeftPopular));
        };
    }, []);

    return (
        <div className="flex flex-col px-4">
            <div className="text-right">
                <h1 className="text-zinc-800 font-medium text-md sm:text-lg md:text-xl">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Hello! Welcome to Learnify')
                                .start();   
                        }}
                    />
                </h1>
            </div>

            <div className="mt-7 flex flex-col bg-light-blue px-2 sm:px-4 md:px-3 pt-2 pb-3 rounded-lg">
                <h1 className="text-zinc-800 font-bold text-base sm:text-md md:text-lg">
                    Upcoming Schedule
                </h1>
                {upcomingSchedule ? (
                    <div className="mt-2 text-gray-700 text-xs sm:text-xs md:text-sm">
                    <p><strong>Course:</strong> {upcomingSchedule.course.title}</p>
                    <p><strong>Session:</strong> {upcomingSchedule.session}</p>
                    <p><strong>Type:</strong> {upcomingSchedule.scheduleType}</p>
                    </div>
                ) : (
                    <p className="mt-2 text-gray-700 text-xs sm:text-xs md:text-sm">There's no upcoming schedule for now.</p>
                )}
            </div>

            <div className="mt-5 bg-light-blue py-2 px-2 relative">
                <h2 className="text-zinc-800 font-bold text-sm sm:text-lg mb-2">Courses</h2>
                <div
                    ref={courseContainerRef}
                    className="bg-white border rounded-lg overflow-x-auto no-scrollbar flex space-x-4 py-4 px-2 sm:px-4 md:px-2 w-full"
                >
                    {courses.map((course) => (
                    <div
                        key={course.id}
                        className="w-full sm:w-80 flex-shrink-0"
                    >
                        <div className="flex flex-col sm:flex-col space-y-0 cursor-pointer">
                        <div className="w-full h-28 mb-0">
                            <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover rounded-t-lg"
                            onClick={() => handleCourseClick(course.id)}
                            />
                        </div>

                        <div className="flex flex-col justify-between bg-soft-blue py-4 px-2 rounded-b-lg space-y-1">
                            <h3 className="text-base font-semibold">{course.title}</h3>
                            <p className="text-xs text-gray-600">{course.teacher}</p>

                            <div className="flex items-center space-x-1 text-yellow-500">
                            <span className="text-zinc-800 font-medium text-xs">{course.rating.toFixed(1)}</span>
                            {[...Array(Math.floor(course.rating))].map((_, index) => (
                                <FaStar key={`full-${index}`} className="text-xs" />
                            ))}
                            {course.rating % 1 !== 0 && <FaStarHalfAlt className="text-xs" />}
                            {[...Array(5 - Math.ceil(course.rating))].map((_, index) => (
                                <FaRegStar key={`empty-${index}`} className="text-xs" />
                            ))}
                            </div>

                            <p className="font-bold text-sm">
                                IDR {new Intl.NumberFormat().format(course.price)}
                            </p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>

                {isScrolledToLeft && (
                    <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-zinc-800 text-zinc-200 p-2 rounded-full sm:p-3"
                    onClick={() => scrollLeft(courseContainerRef)}
                    >
                    <FaAngleLeft className="text-xl" />
                    </button>
                )}

                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-zinc-800 text-zinc-200 p-2 rounded-full sm:p-3"
                    onClick={() => scrollRight(courseContainerRef)}
                >
                    <FaAngleRight className="text-xl font-light" />
                </button>
            </div>

            <div className="mt-5 bg-light-blue py-2 px-2 relative">
                <h2 className="text-zinc-800 font-bold text-sm sm:text-lg mb-2">Popular Courses</h2>
                <div
                    ref={popularCourseContainerRef}
                    className="bg-white border rounded-lg overflow-x-auto no-scrollbar flex space-x-4 py-4 px-2 sm:px-4 md:px-2 w-full"
                >
                    {popularCourses.map((course) => (
                    <div
                        key={course.id}
                        className="w-full sm:w-80 flex-shrink-0"
                    >
                        <div className="flex flex-col sm:flex-col space-y-0 cursor-pointer">
                        <div className="w-full h-28 mb-0">
                            <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover rounded-t-lg"
                            onClick={() => handleCourseClick(course.id)}
                            />
                        </div>

                        <div className="flex flex-col justify-between bg-soft-blue py-4 px-2 rounded-b-lg space-y-1">
                            <h3 className="text-base font-semibold">{course.title}</h3>
                            <p className="text-xs text-gray-600">{course.teacher}</p>

                            <div className="flex items-center space-x-1 text-yellow-500">
                            <span className="text-zinc-800 font-medium text-xs">{course.rating.toFixed(1)}</span>
                            {[...Array(Math.floor(course.rating))].map((_, index) => (
                                <FaStar key={`full-${index}`} className="text-xs" />
                            ))}
                            {course.rating % 1 !== 0 && <FaStarHalfAlt className="text-xs" />}
                            {[...Array(5 - Math.ceil(course.rating))].map((_, index) => (
                                <FaRegStar key={`empty-${index}`} className="text-xs" />
                            ))}
                            </div>

                            <p className="font-bold text-sm">
                                IDR {new Intl.NumberFormat().format(course.price)}
                            </p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>

                {isScrolledToLeftPopular && (
                    <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-zinc-800 text-zinc-200 p-2 rounded-full sm:p-3"
                    onClick={() => scrollLeft(popularCourseContainerRef)}
                    >
                    <FaAngleLeft className="text-xl" />
                    </button>
                )}

                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-zinc-800 text-zinc-200 p-2 rounded-full sm:p-3"
                    onClick={() => scrollRight(popularCourseContainerRef)}
                >
                    <FaAngleRight className="text-xl font-light" />
                </button>
            </div>

            <section className="mt-10 px-4">
                <div className="text-center mb-10 relative px-4 md:px-10 relative max-w-4xl mx-auto">
                    <h2 className="text-2xl font-semibold text-center mb-4 text-zinc-800">About Learnify</h2>
                    <p className="text-center text-gray-600 text-sm mx-auto px-4 py-6 bg-white rounded-lg shadow-md border border-gray-100">
                        Learnify is dedicated to providing high-quality, accessible education to students around the world. 
                        Our platform offers a wide range of courses designed to help you reach your learning goals, whether 
                        you're just starting out or looking to advance your career. Join us to explore topics taught by industry experts.
                    </p>
                </div>

                <h2 className="text-3xl font-semibold text-center mb-6 text-zinc-800">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <span className="bg-light-blue text-zinc-800 p-4 rounded-full mb-3">
                            <FaSearch className="text-2xl" /> 
                        </span>
                        <h3 className="text-xl font-bold text-zinc-700">Browse Courses</h3>
                        <p className="text-sm text-gray-500 mt-2">
                            Explore a wide range of topics and find the ideal course for your needs and interests.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="bg-light-blue text-zinc-800 p-4 rounded-full mb-3">
                            <FaBookOpen className="text-2xl" /> 
                        </span>
                        <h3 className="text-xl font-bold text-zinc-700">Enroll and Learn</h3>
                        <p className="text-sm text-gray-500 mt-2">
                            Sign up, enroll in your favorite courses, and learn at your own pace.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="bg-light-blue text-zinc-800 p-4 rounded-full mb-3">
                            <FaLocationArrow className="text-2xl" />  
                        </span>
                        <h3 className="text-xl font-bold text-zinc-700">Onsite or Online Learning</h3>
                        <p className="text-sm text-gray-500 mt-2">
                            Choose between learning at your own pace online or having a teacher come to your location for an onsite experience.
                        </p>
                    </div>
                </div>

            </section>

            <section className="mt-14 px-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8 text-zinc-800">Membership Levels</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
                    {/* Basic Membership */}
                    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border">
                        <h3 className="text-lg sm:text-xl font-bold text-zinc-700 mb-3">Basic Membership</h3>
                        <p className="text-xs sm:text-sm text-gray-500 mb-4">Access a selection of free courses and some exclusive content.</p>
                        <ul className="text-left text-gray-700 space-y-1 sm:space-y-2">
                            <li className="flex items-center">
                                <input type="checkbox" checked disabled className="mr-2 text-blue-500" />
                                Access to free courses
                            </li>
                            <li className="flex items-center">
                                <input type="checkbox" checked disabled className="mr-2 text-blue-500" />
                                Limited exclusive content
                            </li>
                            <li className="flex items-center">
                                <input type="checkbox" disabled className="mr-2 text-gray-400" />
                                No mentorship support
                            </li>
                        </ul>
                        <p className="text-sm sm:text-base font-semibold text-zinc-800 mt-4">Free</p>
                    </div>

                    {/* Premium Membership */}
                    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border">
                        <h3 className="text-lg sm:text-xl font-bold text-zinc-700 mb-3">Premium Membership</h3>
                        <p className="text-xs sm:text-sm text-gray-500 mb-4">Enjoy access to all courses, special projects, and resources.</p>
                        <ul className="text-left text-gray-700 space-y-1 sm:space-y-2">
                            <li className="flex items-center">
                                <input type="checkbox" checked disabled className="mr-2 text-blue-500" />
                                Access to all courses
                            </li>
                            <li className="flex items-center">
                                <input type="checkbox" checked disabled className="mr-2 text-blue-500" />
                                Special projects and resources
                            </li>
                            <li className="flex items-center">
                                <input type="checkbox" checked disabled className="mr-2 text-blue-500" />
                                Community support
                            </li>
                            <li className="flex items-center">
                                <input type="checkbox" disabled className="mr-2 text-gray-400" />
                                Advanced certifications
                            </li>
                        </ul>
                        <p className="text-sm sm:text-base font-semibold text-zinc-800 mt-4">IDR 299,000/month</p>
                    </div>

                    {/* Pro Membership */}
                    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border">
                        <h3 className="text-lg sm:text-xl font-bold text-zinc-700 mb-3">Pro Membership</h3>
                        <p className="text-xs sm:text-sm text-gray-500 mb-4">Get complete access to courses, mentorship, and advanced certifications.</p>
                        <ul className="text-left text-gray-700 space-y-1 sm:space-y-2">
                            <li className="flex items-center">
                                <input type="checkbox" checked disabled className="mr-2 text-blue-500" />
                                Full access to all courses
                            </li>
                            <li className="flex items-center">
                                <input type="checkbox" checked disabled className="mr-2 text-blue-500" />
                                One-on-one mentorship
                            </li>
                            <li className="flex items-center">
                                <input type="checkbox" checked disabled className="mr-2 text-blue-500" />
                                Advanced certifications
                            </li>
                            <li className="flex items-center">
                                <input type="checkbox" checked disabled className="mr-2 text-blue-500" />
                                Exclusive Pro-only resources
                            </li>
                        </ul>
                        <p className="text-sm sm:text-base font-semibold text-zinc-800 mt-4">IDR 499,000/month</p>
                    </div>
                </div>
            </section>

            <section className="mt-14 px-4">
                <div className="bg-gradient-to-r from-dark-blue via-dark-moderate-blue to-dark-blue rounded-lg shadow-lg p-6 sm:p-8 text-center text-white">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Apply as a Teacher</h2>
                    <p className="text-xs sm:text-sm mb-4 sm:mb-6">
                        Share your expertise with our learners. Join as a teacher and help students achieve their goals. Applicants will go through a brief test and an interview to ensure quality teaching standards.
                    </p>
                    <button className="bg-white text-azure font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-light-blue transition duration-300">
                        Apply Now
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;