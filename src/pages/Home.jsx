import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/images/banner.jpg";
import featuredImage from "../assets/images/featured.jpg";
import uvaLogo from "../assets/images/uva.png";
import international from "../assets/images/inter.jpeg";
import alumni from "../assets/images/alumni.jpg";
import innovation from "../assets/images/innovation.jpeg";

const Home = () => {
  const navigate = useNavigate();

  const faculties = [
    { name: "Architecture", path: "/architecture" },
    { name: "Engineering", path: "/engineering" },
    { name: "Business", path: "/business" },
    { name: "Information Technology", path: "/information-technology" },
    { name: "Medicine", path: "/medicine" },
    { name: "Graduate Studies", path: "/graduate-studies" },
  ];

  const events = [
    {
      date: "Dec 5th",
      title: "ERU Symposium 2023",
      details: "5th, 6th December 2023",
    },
    {
      date: "July 27th",
      title: "EXMO2023",
      details: "27th July 2023",
    },
    {
      date: "Jan 30th",
      title: "Convocation for External Degrees",
      details: "30th January 2023",
    },
  ];

  const items = [
    {
      label: "Courses",
      icon: "🎓",
      link: "/courses",
    },
    {
      label: "Vacancies",
      icon: "🔍",
      link: "/vacancies",
    },
    {
      label: "Procurements",
      icon: "📋",
      link: "/procurements",
    },
  ];

  const [activeTab, setActiveTab] = useState("International");

  const tabs = [
    {
      label: "International",
      title: "Why Choose Us?",
      content: `
        Uva University, rooted in Sri Lanka's oldest educational traditions, has evolved into a prominent institution offering diverse and engaging courses for both local and international students. Committed to holistic education, the university emphasizes critical thinking, creativity, and leadership, supported by modern facilities and teaching methods. Its global vision is reflected in international collaborations, student exchange programs, and research initiatives, providing students with valuable global exposure. Through these efforts, Uva University ensures its students are well-prepared to succeed locally and internationally.
      `,
      image: international,
    },
    { label: "Alumni", title: "Alumni",content: "As valued alumni and supporters, your ongoing involvement is crucial to the university's continued success. Whether through practical assistance, advisory roles, or financial contributions, your support significantly enhances the experience of both current and future students. We warmly invite all former students, staff, and individuals or organizations with an interest in the university to join our vibrant community and continue shaping its future.Your engagement helps strengthen the university's mission and creates opportunities for future generations of students to thrive in a dynamic and supportive environment.",image:alumni },
    { label: "Innovation",title: "IIVCC", content: "The Innovation, Invention, and Venture Creation Council (IIVCC) at UVA Uni, Sri Lanka, serves as a platform that fosters collaboration between academia, industry, and both the public and private sectors. By facilitating innovative practices, inventions, and venture creation, the IIVCC plays a vital role in addressing the educational, socio-cultural, environmental, and economic challenges of the 21st century, driving positive change and impact across multiple sectors.Through its dynamic initiatives, the IIVCC empowers students, researchers, and entrepreneurs to bring their ideas to life, fostering a culture of creativity and practical problem-solving that benefits both local and global communities.",image: innovation},
  ];

  

  // States for animated statistics
  const [stats, setStats] = useState({ satisfaction: 0, graduates: 0, programs: 0, faculty: 0 });

  useEffect(() => {
    const targetValues = { satisfaction: 99, graduates: 4000, programs: 25, faculty: 270 };
    const interval = setInterval(() => {
      setStats((prev) => ({
        satisfaction: Math.min(prev.satisfaction + 1, targetValues.satisfaction),
        graduates: Math.min(prev.graduates + 40, targetValues.graduates),
        programs: Math.min(prev.programs + 1, targetValues.programs),
        faculty: Math.min(prev.faculty + 5, targetValues.faculty),
      }));
    }, 30); // Adjust speed of animation

    return () => clearInterval(interval); // Cleanup the interval
  }, []);


  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[500px] text-white flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(43, 43, 43, 0.8), rgba(237, 138, 54, 0.8)), url(${bannerImage})`,
        }}
      >
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            A Future-Focused Education
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Explore our programs designed for success.
          </p>
          <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded font-semibold">
            Discover More
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-800 text-white py-12">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h2 className="text-4xl font-bold">{stats.satisfaction}%</h2>
            <p>Student Satisfaction</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">{stats.graduates}+</h2>
            <p>Graduates</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">{stats.programs}+</h2>
            <p>Programs</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">{stats.faculty}+</h2>
            <p>Expert Faculty</p>
          </div>
        </div>
      </section>

      {/* Important Events Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Important Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-lg shadow p-6 flex flex-col justify-between"
              >
                <div className="mb-4">
                  <span className="bg-red-500 text-white py-1 px-3 rounded-md text-sm font-bold">
                    {event.date}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{event.title}</h3>
                  <p className="text-gray-700 mt-2">{event.details}</p>
                </div>
                <button className="text-red-600 font-bold hover:underline mt-4">
                  Read More &gt;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Programs We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded shadow hover:shadow-lg transition"
              >
                <img
                  src={featuredImage}
                  alt="Degree"
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">Program Title</h3>
                <p>External General Degree</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-800 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-white text-center transform transition-transform hover:scale-110 cursor-pointer"
            onClick={() => navigate(item.link)}
          >
            <div
              className="bg-gradient-to-br from-white to-white p-6 rounded-full shadow-lg flex items-center justify-center w-20 h-20 mb-4"
              style={{
                animation: `bounce 2s infinite ${index * 0.3}s`,
              }}
            >
              <span className="text-4xl">{item.icon}</span>
            </div>
            <p className="text-lg font-semibold">{item.label}</p>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </section>

      {/* Faculties Section */}
      <section className="bg-gray-100 p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Explore Our Faculties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {faculties.map((faculty, index) => (
              <button
                key={index}
                className="bg-gray-400 text-white font-bold py-4 px-6 rounded-lg hover:bg-gray-500 transition"
                onClick={() => navigate(faculty.path)}
              >
                {faculty.name}
              </button>
            ))}
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={uvaLogo}
                alt="University of Uva Logo"
                className="w-32 h-auto mx-auto lg:mx-0"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">University of UVA</h3>
              <p className="text-gray-700 leading-relaxed">
                Emboldened by the daring vision of becoming South Asia’s center of excellence
                in technology and related disciplines, the University of Uva prides
                itself in being a hub of innovation and creativity. Encouraging its students
                to think out of the box from day one, the curriculum of the university takes
                a futuristic approach. Backed by a faculty that is dedicated to delivering
                excellence in education, with the right infrastructure in place to facilitate
                a seamless learning experience, and a research program that has made a
                significant contribution to the global knowledge bank, the university is a
                fully equipped hub delivering excellence to its students and society.
              </p>
              <button
                onClick={() => navigate("/about")}
                className="text-red-600 font-bold mt-4 inline-block hover:underline"
              >
                Read More &gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-6 border-b pb-4">
          {tabs.map((tab) => (
            <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`text-base md:text-lg font-semibold px-4 py-2 ${
              activeTab === tab.label
                ? "text-blue-600 border-b-4 border-blue-600"
                : "text-gray-600"
            } transition`}
          >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
  {tabs.map(
    (tab) =>
      activeTab === tab.label && (
        <div
          key={tab.label}
          className="flex flex-col lg:flex-row items-center lg:items-start p-4 bg-gray-50 rounded shadow-md transition-opacity duration-500"
                  >
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-4 lg:mb-0">
            <img
              src={tab.image} 
              alt={tab.label}
              className="rounded shadow-md max-w-full h-auto"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 ">
              {tab.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{tab.content}</p>

            <button
              className="mt-4 bg-orange-500 text-white text-center px-4 py-2 rounded hover:bg-orange-600"
              onClick={() => {
                if (tab.label === "International") {
                  navigate("/international");
                } else if (tab.label === "Alumni") {
                  navigate("/alumni");
                } else if (tab.label === "Innovation") {
                  navigate("/innovation");
                }
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      )
  )}
</div>

      </div>
    </section>
    </main>
  );
};

export default Home;
