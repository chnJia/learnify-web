import React from 'react';

// Define the Lesson type to specify the structure of the lessons
interface Lesson {
    session: string;
    topic: string;
    description: string;
    videoUrl: string;
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
}

interface OnlineCoursePageProps {
    course: Course; // Declare the course prop
}

const OnlineCoursePage: React.FC<OnlineCoursePageProps> = ({ course }) => {
    return (
        <div className="p-4 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold text-zinc-800">{course.title} - Online Sessions</h1>
            
            {/* Course Overview */}
            <div className="mt-6 bg-white p-4 rounded-md shadow-md">
                <img src={course.image} alt={course.title} className="w-full rounded-md" />
                <h2 className="font-semibold text-lg text-blue-600 mt-4">{course.title}</h2>
                <p className="text-sm text-gray-600">{course.description}</p>
                <p className="text-sm text-gray-600">Instructor: {course.teacher}</p>
                <p className="text-sm text-gray-600">Price: ${course.price}</p>
                <div className="flex items-center mt-2">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1">{course.rating}</span>
                </div>
            </div>
            
            {/* Lessons Grid with Video Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {course.lessons.map((lesson, index) => (
                    <div key={index} className="bg-white shadow-md rounded-md p-4">
                        <h3 className="font-semibold text-lg text-blue-600">{lesson.session}: {lesson.topic}</h3>
                        
                        {/* Video Card */}
                        <div className="mt-4 bg-gray-100 rounded-md p-2">
                            <video 
                                className="w-full h-48 object-cover rounded-md" 
                                controls
                                src={lesson.videoUrl}>
                                Your browser does not support the video tag.
                            </video>
                            <div className="mt-2">
                                <p className="text-sm text-gray-600">{lesson.description}</p>
                                <button 
                                    className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                                    Watch {lesson.session}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OnlineCoursePage;
