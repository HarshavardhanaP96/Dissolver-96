import aboutImg from "../assets/about.jpg"
// import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">About 
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:0.5}}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0, x:100}}
          transition={{duration:0.5}}
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              I am a full stack developer with a passion for creating efficient and user-friendly websites and web applications. My expertise spans a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity about how things work, evolving into a career where I continually strive to learn and tackle new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. 
              <br />
              <br />
              Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects. With a background in Mechanical Engineering, I have explored diverse fields from designing, analyzing, and fabricating UAVs (Unmanned Aerial Vehicles) and ATVs (All-Terrain Vehicles). I also have a strong affinity for physics and mathematics and enjoy teaching these subjects.
              <br />
              <br />
              In my free time, I love traveling, reading books, and trekking. Additionally, I enjoy playing badminton and chess.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
