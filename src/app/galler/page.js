'use client'

import { useEffect } from "react";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Image from 'next/image';
import projectImg from '../../../public/as.jpg'; // Replace with actual project images

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    arrows: false,
    dots: true,
  };

  const projects = [
    {
      title: "Autonomous Drone Navigation with AI & SLAM",
      description: "A research prototype enabling real-time 3D mapping and autonomous flight control using Python, ROS, and OpenCV.",
      link: "/projects/drone-navigation",
      image: projectImg
    },
    {
      title: "Smart IoT-Based Air Quality Dashboard",
      description: "Built with ESP32, Node.js, and Grafana to monitor PM2.5, NO2, and CO levels in real time with MQTT communication.",
      link: "/projects/air-quality-dashboard",
      image: projectImg
    },
    {
      title: "Distributed Blockchain Voting System",
      description: "A secure voting platform built with Solidity, Ethereum, and IPFS ensuring transparency and immutability in the voting process.",
      link: "/projects/blockchain-voting",
      image: projectImg
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        <span className="text-blue-600">Research</span> & Projects
      </h2>

      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {projects.map((project, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base text-justify">
                    {project.description}
                  </p>
                  <Link href={project.link}   className="inline-block mt-auto text-blue-600 font-medium hover:underline">
                
                      View Project →
                 
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
