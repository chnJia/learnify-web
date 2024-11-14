import { useRef, useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import Course from "../components/Courses";
import { FaAngleRight, FaAngleLeft, FaBookOpen, FaLocationArrow } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
            image: "assets/AlgebraMath.jpeg", 
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
            image: "assets/Python.jpg", 
            title: "Python for Beginner", 
            teacher: "Belinda Wati", 
            rating: 4.3, 
            price: 280000,
            isPopular: false  
        },
        { 
            id: 6,
            image: "assets/Python.jpg", 
            title: "Python for Beginner", 
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
                <h1 className="text-zinc-800 font-medium text-xl">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Hello! Welcome to Learnify')
                                .start();   
                        }}
                    />
                </h1>
            </div>

            <div className="mt-7 flex flex-col bg-light-blue px-3 pt-2 pb-3 rounded-lg">
                <h1 className="text-moderate-blue font-bold text-lg">Upcoming Schedule</h1>
                <p className="mt-2 text-gray-700 text-sm">There's no upcoming schedule for now.</p>
            </div>

            <div className="mt-5 bg-light-blue py-2 px-2 relative">
                <h2 className="text-zinc-800 font-bold text-lg mb-1">Courses</h2>
                <div 
                    ref={courseContainerRef} 
                    className="bg-white border rounded-lg overflow-x-auto no-scrollbar whitespace-nowrap flex space-x-4 py-4 px-2"
                >
                    {courses.map((course) => (
                        <Course
                            key={course.id}
                            id={String(course.id)}
                            image={course.image}
                            title={course.title}
                            teacher={course.teacher}
                            rating={course.rating}
                            price={course.price}
                            onCourseClick={handleCourseClick}
                            onPopularCourseClick={handlePopularCourseClick}
                            isPopular={course.isPopular}
                        />
                    ))}
                </div>

                {isScrolledToLeft && (
                    <button
                        className="absolute top-1/2 left-0 transform -translate-y-1/3 bg-zinc-800 text-zinc-200 p-2 rounded-full"
                        onClick={() => scrollLeft(courseContainerRef)}
                    >
                        <FaAngleLeft className="text-xl" />
                    </button>
                )}

                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/3 bg-zinc-800 text-zinc-200 p-2 rounded-full"
                    onClick={() => scrollRight(courseContainerRef)}
                >
                    <FaAngleRight className="text-xl font-light" />
                </button>
            </div>

            <div className="mt-5 bg-light-blue py-2 px-2 relative">
                <h2 className="text-zinc-800 font-bold text-lg mb-1">Popular Courses</h2>
                <div 
                    ref={popularCourseContainerRef} 
                    className="bg-white border rounded-lg overflow-x-auto no-scrollbar whitespace-nowrap flex space-x-4 py-4 px-2"
                >
                    {popularCourses.map((course) => (
                        <Course
                            key={course.id}
                            id={String(course.id)}
                            image={course.image}
                            title={course.title}
                            teacher={course.teacher}
                            rating={course.rating}
                            price={course.price}
                            onCourseClick={handleCourseClick}
                            onPopularCourseClick={handlePopularCourseClick}
                            isPopular={true} 
                        />
                    ))}
                </div>

                {isScrolledToLeftPopular && (
                    <button
                        className="absolute top-1/2 left-0 transform -translate-y-1/3 bg-zinc-800 text-zinc-200 p-2 rounded-full"
                        onClick={() => scrollLeft(popularCourseContainerRef)}
                    >
                        <FaAngleLeft className="text-xl" />
                    </button>
                )}

                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/3 bg-zinc-800 text-zinc-200 p-2 rounded-full"
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
                <h2 className="text-3xl font-semibold text-center mb-8 text-zinc-800">Membership Levels</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 border">
                        <h3 className="text-xl font-bold text-zinc-700 mb-3">Basic Membership</h3>
                        <p className="text-sm text-gray-500">Access a selection of free courses and some exclusive content.</p>
                        <p className="text-sm font-semibold text-zinc-800 mt-4">Free</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 border">
                        <h3 className="text-xl font-bold text-zinc-700 mb-3">Premium Membership</h3>
                        <p className="text-sm text-gray-500">Enjoy access to all courses, special projects, and resources.</p>
                        <p className="text-sm font-semibold text-zinc-800 mt-4">$20/month</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 border">
                        <h3 className="text-xl font-bold text-zinc-700 mb-3">Pro Membership</h3>
                        <p className="text-sm text-gray-500">Get complete access to courses, mentorship, and advanced certifications.</p>
                        <p className="text-sm font-semibold text-zinc-800 mt-4">$50/month</p>
                    </div>
                </div>
            </section>

            <section className="mt-14 px-4">
                <div className="bg-gradient-to-r from-dark-blue via-dark-moderate-blue to-dark-blue rounded-lg shadow-lg p-8 text-center text-white">
                    <h2 className="text-3xl font-semibold mb-4">Apply as a Teacher</h2>
                    <p className="text-sm mb-6">
                        Share your expertise with our learners. Join as a teacher and help students achieve their goals. Applicants will go through a brief test and an interview to ensure quality teaching standards.
                    </p>
                    <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition duration-300">
                        Apply Now
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;