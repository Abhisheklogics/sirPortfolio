'use client'

import { useEffect } from "react"

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function publication()
{
  useEffect(()=>{
              AOS.init({
                duration: 800,
               
              })
            },[])
    return(
        <>
       <div className="justify-items-center items-center h-fit bg-gray-100 w-full mt-10 p-4">
        <h1 className="heading text-xl md:text-2xl hover:text-blue-500 font-bold text-center  mt-[00px]">
          <span>ALL</span> PATENTS
        </h1>
         <div data-aos="fade-right" className="box bg-white dark:bg-gray-700 w-[700px] rounded-lg mt-4 p-6 transition duration-300 ">
            <i className="fas fa-atom text-4xl text-indigo-500 mb-4"></i> {/* Replace with your icon */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2  hover:text-blue-500 ">Smart Air : Transforming Air Quality Monitoring with IoT, AI and Drone Technology</h3>
            <p className="flex gap-4"><span className="hover:text-blue-500">Sanjay saini</span> <span className="hover:text-blue-500">Amarjeet Singh Chauhan</span> <span className="hover:text-blue-500">Mohit Yadav</span></p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
            The book "Smart Air: Transforming Air Quality Monitoring with IoT, AI, and Drone Technology" explores how cutting-edge innovations in technology have revolutionized the way air quality is monitored. This book examines how big data and cloud computing provide effective processing and storage of enormous amounts of air quality data, while IoT devices...
            </p>
            <button className="bg-blue-500 text-white mt-2 p-2 hover:text-black  rounded hover:shadow-md">Veiw</button>
          </div>
          <div data-aos="fade-left" className="box bg-white dark:bg-gray-700 w-[700px]  mt-4 rounded-lg  p-6 transition duration-300 ">
            <i className="fas fa-atom text-4xl text-indigo-500 mb-4"></i> {/* Replace with your icon */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2  hover:text-blue-500 ">HIGH SPEED VTOL REMOTE CONTROLLED DRONE</h3>
            <p className="flex gap-4"> <span className="hover:text-blue-500 ">Amarjeet Singh Chauhan</span> <span className="hover:text-blue-500">Mohit Yadav</span> <span className="hover:text-blue-500">Aditya Vardhan</span> <span>Sukdev Roy</span></p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
            Certified that the design of which a copy is annexed hereto has been registered as of the number and date given above in class 12-07 in respect of the application of such design to HIGH SPEED VTOL REMOTE CONTROLLED DRONE in the name of 1.Amarjeet Singh Chauhan 2. Mohit Yadav 3.Aditya Vardhan 4.Varun Shrivastav 5.Deepak Kumar 6.Aman Sharma 7.Sumit Sharma...
            </p>
            <button className="bg-blue-500 text-white mt-2 p-2 hover:text-black  rounded hover:shadow-md">Veiw</button>
          </div>
          <div data-aos="fade-left" className="box bg-white dark:bg-gray-700 w-[700px]  mt-4 rounded-lg  p-6 transition duration-300 ">
            <i className="fas fa-atom text-4xl text-indigo-500 mb-4"></i> {/* Replace with your icon */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2  hover:text-blue-500 ">HIGH SPEED VTOL REMOTE CONTROLLED DRONE</h3>
            <p className="flex gap-4"> <span className="hover:text-blue-500 ">Amarjeet Singh Chauhan</span> <span className="hover:text-blue-500">Mohit Yadav</span> <span className="hover:text-blue-500">Aditya Vardhan</span> <span>Sukdev Roy</span></p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
            Certified that the design of which a copy is annexed hereto has been registered as of the number and date given above in class 12-07 in respect of the application of such design to HIGH SPEED VTOL REMOTE CONTROLLED DRONE in the name of 1.Amarjeet Singh Chauhan 2. Mohit Yadav 3.Aditya Vardhan 4.Varun Shrivastav 5.Deepak Kumar 6.Aman Sharma 7.Sumit Sharma...
            </p>
            <button className="bg-blue-500 text-white mt-2 p-2 hover:text-black  rounded hover:shadow-md">Veiw</button>
          </div>
          </div>
         </>
    )
}