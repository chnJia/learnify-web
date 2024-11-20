import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface Lesson {
  session: string;
  topic: string;
  description: string;
  schedule: string;
}

interface Course {
  name: string;
  image: string;
  description: string;
  price: number;
  lessons: Lesson[];
}

interface BookingPageProps {
  teacherId: number;
  scheduleType: string;
  session: string;
  teacherName: string;
  teacherRating: number;
  teacherProfileImage: string;
  teacherLocation: string;
  course: Course;
}

const BookingPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        teacherId,
        scheduleType,
        session,
        teacherName,
        teacherRating,
        teacherProfileImage,
        teacherLocation,
        course,
    } = location.state || {};

    const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failed'>('pending');
    const [paymentType, setPaymentType] = useState<string>('Credit Card');
    const [isConfirmingPayment, setIsConfirmingPayment] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false); 

    const handlePayment = () => {
        setIsConfirmingPayment(true);
    };

    const confirmPayment = () => {
        setIsLoading(true);
        setIsConfirmingPayment(false);
      
        setTimeout(() => {
          setIsLoading(false);
          setPaymentStatus('success');
          setShowSuccess(true);
      
          setTimeout(() => {
            navigate('/', {
              state: { course, scheduleType, session },
            });
          }, 2000); 
        }, 2000); 
      };

    const cancelPayment = () => {
        setIsConfirmingPayment(false);
    };

    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Booking Form</h1>

        {teacherId && session && course ? (
            <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-semibold text-xl text-gray-800 mb-4">Course Details:</h3>
            <div className="flex items-center space-x-8 mb-6">
                <div className="w-1/2">
                {course.image && (
                    <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-60 object-cover rounded-lg shadow-md"
                    />
                )}
                </div>

                <div className="w-1/2">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h1>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                <p className="text-lg text-gray-900 font-semibold">
                    Price: IDR {new Intl.NumberFormat().format(course.price)}
                </p>
                </div>
            </div>

            <h3 className="font-semibold text-xl text-gray-800 mb-4">Teacher Details:</h3>
            <div className="flex items-center mb-6 space-x-4">
                <img
                src={teacherProfileImage}
                alt={teacherName}
                className="w-24 h-24 rounded-full border-2 border-gray-200 shadow-lg"
                />
                <div>
                <h3 className="text-xl font-semibold text-gray-800">{teacherName}</h3>
                <p className="text-sm text-gray-600">Rating: {teacherRating} ⭐</p>
                <p className="text-sm text-gray-500 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-gray-400" />
                    {teacherLocation}
                </p>
                </div>
            </div>

            <h3 className="font-semibold text-xl text-gray-800 mb-4">Course Sessions:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {course.lessons.map((lesson: Lesson, index: number) => (
                <div key={index} className="bg-soft-blue shadow-md rounded-lg p-4">
                    <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-800">{scheduleType}</h4>
                    </div>

                    <p className="text-lg font-semibold text-gray-800">
                    <strong>{lesson.session}</strong> - {lesson.topic}
                    </p>
                    <p className="text-sm text-gray-600">{lesson.description}</p>
                </div>
                ))}
            </div>

            {/* Name and Contact Information Fields */}
            <div className="mt-8 mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your name"
                    required
                />
            </div>

            <div className="mt-8 mb-6">
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                    Contact Number
                </label>
                <input
                    type="tel"
                    id="contact"
                    className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your contact number"
                    required
                />
            </div>

            {/* Address field only shown if scheduleType is "Onsite" */}
            {scheduleType === 'Onsite' && (
                <div className="mt-8 mb-6">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                    </label>
                    <input
                    type="text"
                    id="address"
                    className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your address"
                    required
                    />
                </div>
            )}

            {/* Payment Type Selection */}
            <div className="mt-6 mb-8">
                <label htmlFor="paymentType" className="block text-sm font-medium text-gray-700 mb-2">
                Select Payment Type
                </label>
                <div className="flex space-x-6">
                <button
                    type="button"
                    onClick={() => setPaymentType('Credit Card')}
                    className={`py-2 px-4 rounded-lg border-2 font-medium transition-all ${
                    paymentType === 'Credit Card'
                        ? 'bg-dark-blue text-white border-indigo-600'
                        : 'bg-white text-gray-800 border-gray-300'
                    }`}
                >
                    Credit Card
                </button>
                <button
                    type="button"
                    onClick={() => setPaymentType('PayPal')}
                    className={`py-2 px-4 rounded-lg border-2 font-medium transition-all ${
                    paymentType === 'PayPal'
                        ? 'bg-dark-blue text-white border-indigo-600'
                        : 'bg-white text-gray-800 border-gray-300'
                    }`}
                >
                    Bank Transfer
                </button>
                </div>
            </div>

            {/* Payment Confirmation Modal */}
            {isConfirmingPayment && !showSuccess && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Confirm Payment</h3>
                    <p className="text-gray-600">Are you sure you want to proceed with the payment via {paymentType}?</p>
                    <div className="flex justify-between mt-6">
                    <button
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                        onClick={cancelPayment}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                        onClick={confirmPayment}
                    >
                        Confirm
                    </button>
                    </div>
                </div>
                </div>
            )}

            {isLoading && !showSuccess && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Processing Payment...</h3>
                    <div className="loader"></div>
                </div>
                </div>
            )}

            {/* Success Confirmation Popup */}
            {showSuccess && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Successful!</h3>
                    <div className="text-green-600 text-4xl mb-4 flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 animate-ping"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path
                            d="M9 11l3 3L22 4"
                            fill="none"
                            />
                        </svg>
                    </div>
                    <p className="text-lg font-semibold text-green-600 mb-4">Your payment has been successfully processed.</p>
                    <button
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                    onClick={() => setShowSuccess(false)}
                    >
                    Close
                    </button>
                </div>
                </div>
            )}

            <button
                className="bg-dark-blue text-white px-6 py-3 rounded-lg hover:bg-blue-950"
                onClick={handlePayment}
            >
                Proceed to Payment
            </button>
            </div>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
};

export default BookingPage;