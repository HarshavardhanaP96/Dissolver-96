import logo from "../assets/HP.png"
import { FaHackerrank, FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { TbBrandLeetcode } from "react-icons/tb"


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-20" src={logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/harshavardhanap/" target="_blank"><FaLinkedin/></a>
          <a href="https://github.com/HarshavardhanaP96" target="_blank"><FaGithub/></a>
          <a href="https://x.com/dissolver_96" target="_blank"><FaSquareXTwitter/></a>
          <a href="https://www.instagram.com/_illusionarysoul/" target="_blank"><FaInstagram/></a>
          <a href="https://leetcode.com/u/harsha_157/" target="_blank"><TbBrandLeetcode/></a>
          <a href="https://www.hackerrank.com/profile/harshap_157" target="_blank"><FaHackerrank /></a>
        
        </div>
    </nav>
  )
}

export default Navbar
