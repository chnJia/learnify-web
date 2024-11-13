import { useRef, useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import Course from "../components/Courses";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
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
            <h1 className="text-zinc-800 font-medium text-xl">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('Hello! Welcome to Learnify')
                            .start();   
                    }}
                />
            </h1>

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
        </div>
    );
}

export default Home;