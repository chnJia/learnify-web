import { useRef, useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import Course from "../components/Courses";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Home = () => {
    const courses = [
        { 
            image: "assets/react-js-banner.jpg", 
            title: "Programming With React", 
            teacher: "Richard Gunawan", 
            rating: 4.5, price: 480000 
        },
        { 
            image: "assets/AlgebraMath.jpeg", 
            title: "Mastering Algebra", 
            teacher: "Janneth Christopher", 
            rating: 4.7, price: 320000 
        },
        { 
            image: "assets/Biology.jpg", 
            title: "Biology for Senior High 1", 
            teacher: "Dian Indrajani", 
            rating: 4.0, 
            price: 299000 
        },
        { 
            image: "assets/Python.jpg", 
            title: "Python for Beginner", 
            teacher: "Belinda Wati", 
            rating: 4.3, 
            price: 280000 
        },
        { 
            image: "assets/Python.jpg", 
            title: "Python for Beginner", 
            teacher: "Belinda Wati", 
            rating: 4.3, 
            price: 280000 
        },
        { 
            image: "assets/Python.jpg", 
            title: "Python for Beginner", 
            teacher: "Belinda Wati", 
            rating: 4.3, 
            price: 280000 
        },
    ];

    const popularCourses = [
        { 
            image: "assets/blockchain.png", 
            title: "Introduction to Blockchain", 
            teacher: "Melissa Hermawan", 
            rating: 5.0, 
            price: 315000 
        },
        { 
            image: "assets/Ai-Course.jpg", 
            title: "AI Programming in C#", 
            teacher: "Dani Yoseph", 
            rating: 4.0, 
            price: 99000 
        },
        { 
            image: "assets/Python-DataScience.jpg", 
            title: "Python for Data Science", 
            teacher: "Belinda Wati", 
            rating: 4.3, 
            price: 348000 
        },
        { 
            image: "assets/Python-DataScience.jpg", 
            title: "Python for Data Science", 
            teacher: "Belinda Wati", 
            rating: 4.3, 
            price: 348000 
        },
        { 
            image: "assets/Python-DataScience.jpg", 
            title: "Python for Data Science", 
            teacher: "Belinda Wati", 
            rating: 4.3, 
            price: 348000 
        },
    ];

    const courseContainerRef = useRef<HTMLDivElement>(null);
    const popularCourseContainerRef = useRef<HTMLDivElement>(null);
    const [isScrolledToLeft, setIsScrolledToLeft] = useState(false);
    const [isScrolledToLeftPopular, setIsScrolledToLeftPopular] = useState(false);

    const scrollRight = (containerRef: React.RefObject<HTMLDivElement>) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 500, behavior: "smooth" });
        }
    };

    const scrollLeft = (containerRef: React.RefObject<HTMLDivElement>) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -500, behavior: "smooth" });
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
        <div className="flex flex-col px-5">
            <h1 className="text-zinc-800 font-medium text-2xl">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('Hello! Welcome to Learnify')
                            .start();   
                    }}
                />
            </h1>

            <div className="mt-7 bg-light-blue py-3 px-3 relative">
                <h2 className="text-zinc-800 font-bold text-xl mb-2">Our Courses</h2>
                <div 
                    ref={courseContainerRef} 
                    className="bg-white border rounded-lg overflow-x-auto no-scrollbar whitespace-nowrap flex space-x-5 py-5 px-3"
                >
                    {courses.map((course, index) => (
                        <Course
                            key={index}
                            image={course.image}
                            title={course.title}
                            teacher={course.teacher}
                            rating={course.rating}
                            price={course.price}
                        />
                    ))}
                </div>

                {isScrolledToLeft && (
                    <button
                        className="absolute top-1/2 left-0 transform -translate-y-1/3 bg-zinc-800 text-zinc-200 p-3 rounded-full"
                        onClick={() => scrollLeft(courseContainerRef)}
                    >
                        <FaAngleLeft className="text-2xl" />
                    </button>
                )}

                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/3 bg-zinc-800 text-zinc-200 p-3 rounded-full"
                    onClick={() => scrollRight(courseContainerRef)}
                >
                    <FaAngleRight className="text-2xl font-light" />
                </button>
            </div>

            <div className="mt-7 bg-light-blue py-3 px-3 relative">
                <h2 className="text-zinc-800 font-bold text-xl mb-2">Popular Courses</h2>
                <div 
                    ref={popularCourseContainerRef} 
                    className="bg-white border rounded-lg overflow-x-auto no-scrollbar whitespace-nowrap flex space-x-5 py-5 px-3"
                >
                    {popularCourses.map((course, index) => (
                        <Course
                            key={index}
                            image={course.image}
                            title={course.title}
                            teacher={course.teacher}
                            rating={course.rating}
                            price={course.price}
                        />
                    ))}
                </div>

                {isScrolledToLeftPopular && (
                    <button
                        className="absolute top-1/2 left-0 transform -translate-y-1/3 bg-zinc-800 text-zinc-200 p-3 rounded-full"
                        onClick={() => scrollLeft(popularCourseContainerRef)}
                    >
                        <FaAngleLeft className="text-2xl" />
                    </button>
                )}

                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/3 bg-zinc-800 text-zinc-200 p-3 rounded-full"
                    onClick={() => scrollRight(popularCourseContainerRef)}
                >
                    <FaAngleRight className="text-2xl font-light" />
                </button>
            </div>
        </div>
    );
}

export default Home;