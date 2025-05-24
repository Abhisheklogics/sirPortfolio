'use client'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="service py-16 md:py-32 dark:bg-gray-900" id="service">
      <div data-aos="fade-right" className="container mx-auto px-6 md:px-12">
        <h1 data-aos="zoom-in-up" className="heading text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          <span className="text-blue-600">My</span> Skills and Expertise
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Skill Item */}
          <div data-aos="zoom-in-up" className="box bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105 cursor-pointer">
            <i className="fas fa-project-diagram text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center hover:text-blue-600">Swarm Intelligence</h3>
            <p className="text-gray-700 dark:text-gray-300 text-justify">
              Advanced research in collective intelligence algorithms inspired by natural systems such as flocks, swarms, and colonies, focusing on optimization and decision-making.
            </p>
          </div>

          <div data-aos="zoom-in-up" className="box bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105 cursor-pointer">
            <i className="fas fa-cogs text-4xl text-green-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center hover:text-blue-600">Evolutionary Computation</h3>
            <p className="text-gray-700 dark:text-gray-300 text-justify">
              Expertise in evolutionary algorithms like genetic algorithms, differential evolution, and genetic programming for solving complex multi-objective problems.
            </p>
          </div>

          <div data-aos="zoom-in-up" className="box bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105 cursor-pointer">
            <i className="fas fa-robot text-4xl text-yellow-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center hover:text-blue-600">Robotics & Autonomous Systems</h3>
            <p className="text-gray-700 dark:text-gray-300 text-justify">
              Applying optimization algorithms to robotics, autonomous vehicles, and intelligent control systems for real-time adaptive decision-making.
            </p>
          </div>

          <div data-aos="zoom-in-left" className="box bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105 cursor-pointer">
            <i className="fas fa-chart-line text-4xl text-red-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center hover:text-blue-600">Multi-Objective Optimization</h3>
            <p className="text-gray-700 dark:text-gray-300 text-justify">
              Skilled in balancing trade-offs between conflicting objectives using Pareto optimality, NSGA-II, and related algorithms.
            </p>
          </div>

          <div data-aos="zoom-in-left" className="box bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105 cursor-pointer">
            <i className="fas fa-brain text-4xl text-purple-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center hover:text-blue-600">Artificial Intelligence & Machine Learning</h3>
            <p className="text-gray-700 dark:text-gray-300 text-justify">
              Applying AI/ML techniques to enhance optimization algorithms and model complex systems in engineering and computer science.
            </p>
          </div>

          <div data-aos="zoom-in-left" className="box bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105 cursor-pointer">
            <i className="fas fa-network-wired text-4xl text-indigo-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center hover:text-blue-600">Real-Time Systems</h3>
            <p className="text-gray-700 dark:text-gray-300 text-justify">
              Experience designing and optimizing algorithms for real-time embedded systems with strict timing constraints.
            </p>
          </div>

          <div data-aos="zoom-in-left" className="box bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105 cursor-pointer">
            <i className="fas fa-cloud text-4xl text-cyan-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center hover:text-blue-600">Cloud Computing & Distributed Systems</h3>
            <p className="text-gray-700 dark:text-gray-300 text-justify">
              Utilizing cloud infrastructure and distributed architectures to deploy scalable optimization frameworks and data processing pipelines.
            </p>
          </div>

          <div data-aos="zoom-in-left" className="box bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105 cursor-pointer">
            <i className="fas fa-code text-4xl text-pink-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center hover:text-blue-600">Scientific Programming</h3>
            <p className="text-gray-700 dark:text-gray-300 text-justify">
              Proficient in Python, MATLAB, C++, and other tools for algorithm development, simulation, and data analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
