import { useState, useEffect } from "react"
import Typewriter from 'typewriter-effect';
import Course from "../components/Courses";

const Home = () => {
    const courses = [
        {
            image: "assets/react-js-banner.jpg",
            title: "Programming With React",
            teacher: "Richard Gunawan",
            rating: 4.5,  
            price: 480000,
        },
        {
            image: "assets/AlgebraMath.jpeg",
            title: "Mastering Algebra",
            teacher: "Janneth Christopher",
            rating: 4.7,  
            price: 320000,
        },
        {
            image: "assets/Biology.jpg",
            title: "Biology for Senior High 1",
            teacher: "Dian Indrajani",
            rating: 4.0,  
            price: 299000,
        },
    ];
      
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

            <div className="mt-5 bg-soft-blue py-3 px-3 rounded-lg">
                <h1 className="text-zinc-800 font-bold text-xl mb-2">Upcoming Schedule</h1>
                <p>There's no upcoming schedule for now</p>
            </div>

            <div className="mt-7 bg-light-blue py-3 px-3">
                <div className="bg-white border rounded-lg flex space-x-5 overflow-x-auto py-5 px-3">
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
            </div>
        </div>
    )
}

export default Home;