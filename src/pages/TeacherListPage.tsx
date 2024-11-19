import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface Teacher {
  id: number;
  name: string;
  profileImage: string;
  rating: number;
  location: string;
  onlineSchedule: string[] | null; 
  onsiteSchedule: string[] | null; 
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: 'Richard Gunawan',
    profileImage: '/assets/teachers/richard-gunawan.jpg',
    rating: 4.8,
    location: 'Grogol Petamburan, West Jakarta',
    onlineSchedule: [
      'Monday, Dec 1, 2024 10:00 AM',
      'Tuesday, Dec 2, 2024 2:00 PM',
      'Wednesday, Dec 3, 2024 9:00 AM',
      'Thursday, Dec 4, 2024 1:00 PM',
      'Friday, Dec 5, 2024 3:00 PM',
      'Saturday, Dec 6, 2024 11:00 AM',
      'Sunday, Dec 7, 2024 5:00 PM',
    ],
    onsiteSchedule: [
      'Monday, Dec 1, 2024 9:00 AM',
      'Tuesday, Dec 2, 2024 11:00 AM',
      'Wednesday, Dec 3, 2024 2:00 PM',
      'Thursday, Dec 4, 2024 4:00 PM',
      'Friday, Dec 5, 2024 10:00 AM',
      'Saturday, Dec 6, 2024 1:00 PM',
      'Sunday, Dec 7, 2024 6:00 PM',
    ],
  },
  {
    id: 2,
    name: 'Jane Winata',
    profileImage: '/assets/teachers/jane-winata.jpg',
    rating: 4.6,
    location: 'Setiabudi, South Jakarta',
    onlineSchedule: [
      'Monday, Dec 8, 2024 9:00 AM',
      'Tuesday, Dec 9, 2024 11:00 AM',
      'Wednesday, Dec 10, 2024 3:00 PM',
      'Thursday, Dec 11, 2024 4:00 PM',
      'Friday, Dec 12, 2024 12:00 PM',
      'Saturday, Dec 13, 2024 10:00 AM',
      'Sunday, Dec 14, 2024 5:00 PM',
    ],
    onsiteSchedule: null,
  },
  {
    id: 3,
    name: 'Johanes Johnson',
    profileImage: '/assets/teachers/lino-halim.jpg',
    rating: 4.7,
    location: 'Kemanggisan, West Jakarta',
    onlineSchedule: null,
    onsiteSchedule: [
      'Monday, Dec 15, 2024 8:00 AM',
      'Tuesday, Dec 16, 2024 10:00 AM',
      'Wednesday, Dec 17, 2024 1:00 PM',
      'Thursday, Dec 18, 2024 3:00 PM',
      'Friday, Dec 19, 2024 2:00 PM',
      'Saturday, Dec 20, 2024 11:00 AM',
      'Sunday, Dec 21, 2024 5:00 PM',
    ],
  },
];

const TeacherList: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [scheduleType, setScheduleType] = useState<'Online' | 'Onsite'>('Online');
  const [selectedTeacherId, setSelectedTeacherId] = useState<number | null>(null);

  const { course } = location.state || {}; 

  const handleBookingFormPage = () => {
    if (!selectedTeacherId) return;
  
    const teacherIdAsNumber = Number(selectedTeacherId);
    const selectedTeacher = teachers.find(teacher => teacher.id === teacherIdAsNumber);

    let selectedSchedule = null;
    let scheduleType: 'Online' | 'Onsite' | null = null;
  
    if (selectedTeacher?.onlineSchedule) {
      selectedSchedule = selectedTeacher?.onlineSchedule[0]; 
      scheduleType = 'Online';
    } else if (selectedTeacher?.onsiteSchedule) {
      selectedSchedule = selectedTeacher?.onsiteSchedule[0]; 
      scheduleType = 'Onsite';
    }
  
    if (!scheduleType) return; 
  
    navigate('/booking-form', {
      state: {
        teacherId: selectedTeacherId,
        scheduleType,
        session: selectedSchedule,
        teacherName: selectedTeacher?.name,
        teacherRating: selectedTeacher?.rating,
        teacherProfileImage: selectedTeacher?.profileImage,
        teacherLocation: selectedTeacher?.location,
        course,
      },
    });
  };
  

  const handleScheduleTypeChange = (type: 'Online' | 'Onsite') => {
    setScheduleType(type);
    setSelectedTeacherId(null); 
  };

  const handleTeacherSelect = (teacherId: number) => {
    setSelectedTeacherId(teacherId);
  };

  const filteredTeachers = teachers.filter((teacher) =>
    scheduleType === 'Online' ? teacher.onlineSchedule : teacher.onsiteSchedule
  );

  const selectedTeacher = teachers.find(teacher => teacher.id === selectedTeacherId);

  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Teacher List</h1>
        <div className="mb-8 flex justify-center space-x-6">
            <button
                className={`px-12 py-2 ${
                    scheduleType === 'Online'
                    ? 'bg-gradient-to-r from-dark-blue to-dark-moderate-blue text-white'
                    : 'bg-gray-300 text-gray-800'
                } rounded-full shadow-md hover:bg-gradient-to-r hover:from-dark-moderate-blue hover:to-azure hover:text-white transition duration-300 ease-in-out transform hover:scale-105`}
                onClick={() => handleScheduleTypeChange('Online')}
                >
                Online
                </button>

                <button
                className={`px-12 py-2 ${
                    scheduleType === 'Onsite'
                    ? 'bg-gradient-to-r from-dark-blue to-dark-moderate-blue text-white'
                    : 'bg-gray-300 text-gray-800'
                } rounded-full shadow-md hover:bg-gradient-to-r hover:from-dark-moderate-blue hover:to-azure hover:text-white transition duration-300 ease-in-out transform hover:scale-105`}
                onClick={() => handleScheduleTypeChange('Onsite')}
                >
                Onsite
            </button>
        </div>

      <div className="mb-6">
        <h2 className="font-medium mb-2">Choose Teacher:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className={`border rounded-lg shadow p-4 flex flex-col items-center cursor-pointer ${selectedTeacherId === teacher.id ? 'bg-blue-100' : 'bg-white'}`}
              onClick={() => handleTeacherSelect(teacher.id)}
            >
              <img
                src={teacher.profileImage}
                alt={teacher.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-lg font-semibold">{teacher.name}</h2>
              <p className="text-gray-600">Rating: {teacher.rating} ⭐</p>
              <p className="text-gray-500 flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 mr-2 text-gray-500" />
                {teacher.location}
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedTeacher && (
        <div className="mb-6">
          <h3 className="font-medium mb-4">Sessions ({scheduleType}):</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {(scheduleType === 'Online' ? selectedTeacher.onlineSchedule : selectedTeacher.onsiteSchedule)?.map((session, index) => (
              <div
                key={index}
                className="border p-4 rounded-md bg-soft-blue shadow"
              >
                <h4 className="font-semibold text-black">Session {index + 1}</h4>
                <p className="text-gray-600">{session}</p>
              </div>
            ))}
          </div>
          <button
            className="mt-4 bg-dark-blue rounded-lg shadow-lg text-white px-5 py-2 hover:bg-blue-950"
            onClick={handleBookingFormPage}
          >
            Book Now
          </button>
        </div>
      )}
    </div>
  );
};

export default TeacherList;
