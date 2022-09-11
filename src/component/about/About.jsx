import { FaChevronRight, FaRegArrowAltCircleRight} from 'react-icons/fa'
import './about.scss'
import about from "../../images/slider/ab3.jpeg"

const About = () => {
  return (
    <div className='about'>
        <div className="left">
            <img src={about} alt="" />
        </div>
        <div className="right">
            <h2>App at a glance</h2>
            <hr />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam qui vitae beatae necessitatibus nobis ad accusantium ut incidunt cupiditate dolore quas quisquam, esse possimus soluta. Consequuntur ratione accusantium obcaecati.
            </p>
            <ul>
                <li><FaRegArrowAltCircleRight /> Intensive  Soccer Training</li>
                <li><FaRegArrowAltCircleRight /> Quality training materials</li>
                <li><FaRegArrowAltCircleRight /> Maximum guidance from wordl</li>
            </ul>

            <button>Read More <FaChevronRight /> </button>
        </div>
    </div>
  )
}

export default About