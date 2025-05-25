'use client';

import { useEffect } from "react";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Image from 'next/image';
import projectImg from '../../../public/as.jpg'; // Replace with real images

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    arrows: true,
    dots: true,
  };

  const projects = [
    {
      title: "Autonomous Drone Navigation with AI & SLAM",
      description:
        "This project explores autonomous drone flight using real-time SLAM and AI-based decision-making with ROS, Python, and OpenCV. Focused on indoor navigation and disaster site mapping.",
      lead: "By Dr. Amarjeet Singh Chauhan & Team",
      domain: "AI | Robotics | SLAM",
      link: "/projects/drone-navigation",
      image: projectImg,
    },
    {
      title: "Smart IoT-Based Air Quality Dashboard",
      description:
        "An end-to-end air quality monitoring system using ESP32, sensors, Node.js backend, and Grafana dashboard. Supports MQTT-based real-time data transmission and analytics.",
      lead: "By Dr. Sanjay Saini, Amarjeet Singh Chauhan",
      domain: "IoT | Environment | Cloud",
      link: "/projects/air-quality-dashboard",
      image: projectImg,
    },
    {
      title: "Distributed Blockchain Voting System",
      description:
        "Developed a secure and transparent e-voting platform using Ethereum Smart Contracts, IPFS for file storage, and React for frontend visualization.",
      lead: "By Aditya Vardhan & Blockchain Lab",
      domain: "Blockchain | Cybersecurity",
      link: "/projects/blockchain-voting",
      image: projectImg,
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 px-4 md:mt-[-30px] md:px-8" data-aos="fade-up" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
        <span className="text-blue-600">Research</span> & Project Gallery
      </h2>

      <div className="max-w-5xl mx-auto ">
        <Slider {...settings}>
          {projects.map((project, idx) => (
            <div key={idx} className="px-4">
              <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full max-h-[300px]"
                    priority={idx === 0}
                  />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-500 font-medium mb-1">{project.domain}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 italic mb-3">{project.lead}</p>
                  <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base leading-relaxed text-justify">
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    className="mt-4 inline-block text-sm text-blue-600 hover:underline font-medium"
                  >
                    View Full Details →
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
