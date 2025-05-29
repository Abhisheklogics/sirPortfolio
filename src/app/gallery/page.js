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
    autoplaySpeed: 6000,
    swipeToSlide: true,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
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
    <section
      className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-6 md:px-12 md:mt-[-30px]"
      data-aos="fade-up"
      id="projects"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-14 tracking-tight">
        <span className="text-blue-600">Research</span> & Project Gallery
      </h2>

      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {projects.map((project, idx) => (
            <div key={idx} className="px-4">
              <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden md:flex md:gap-6 hover:shadow-2xl transition-shadow duration-500">
                {/* Image */}
                <div className="md:w-1/2 relative min-h-[300px] md:min-h-[400px] flex-shrink-0 overflow-hidden rounded-l-2xl group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay gradient on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-l-2xl"></div>
                </div>

                {/* Text Content */}
                <div className="p-8 md:w-1/2 flex flex-col justify-center space-y-5">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold tracking-wide uppercase">
                    {project.domain}
                  </p>
                  <p className="italic text-gray-600 dark:text-gray-400 text-sm">{project.lead}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed text-justify">
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    className="inline-block mt-4 text-blue-600 font-semibold text-sm hover:underline transition-colors duration-300"
                    aria-label={`View full details of ${project.title}`}
                  >
                    View Full Details &rarr;
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
