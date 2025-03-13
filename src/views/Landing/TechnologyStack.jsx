import { FaAngular, FaJs, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiFlutter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

const frontenedicons = [
  FaAngular,
  FaPython,
  FaReact,
  FaJs,
  FaPhp,
  RiTailwindCssFill,
  AiOutlineConsoleSql,
  FaNode,
  FaBootstrap,
  SiFlutter,
];

const TechnologyStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) { 
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="px-3 py-3 border rounded-lg">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className={`text-3xl font-semibold text-[#2e5090] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Technology Stack
        </h1>
        <p className={`text-xl transition-all text-center duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Our technology stack empowers us to create advanced web solutions that
          drive innovation and deliver results.
        </p>
      </div>

      <div className="mt-3">
        <div className="flex flex-wrap mt-3 p-10 gap-14 rounded-lg bg-[#2e5090]">
          {frontenedicons.map((Icon, index) => (
            <Icon
              key={index}
              className={`mx-auto text-4xl text-white transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
