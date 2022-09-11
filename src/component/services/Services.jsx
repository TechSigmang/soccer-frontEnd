import { FaPenAlt, FaFutbol, FaCertificate} from 'react-icons/fa'
import  './services.scss'

const Services = () => {
  return (
    <div className='services'>
      <h2>What we offer</h2>

     <div className="service-wrapper">
            <div className="card">
                <FaPenAlt  className='icon'/>
                <h2>Signup & Registration</h2>
                <div className="description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos natus optio sint, aperiam praesentium a autem consequatur dolorum, placeat minus aspernatur, ea totam sit nobis impedit nihil tempora iste repellat.
                </div>
            </div>
            <div className="card">
                <FaFutbol  className='icon'/>
                <h2>Daily Training and Guid</h2>
                <div className="description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos natus optio sint, aperiam praesentium a autem consequatur dolorum, placeat minus aspernatur, ea totam sit nobis impedit nihil tempora iste repellat.
                </div>
            </div>
            <div className="card">
                <FaCertificate  className='icon'/>
                <h2>Get Certified</h2>
                <div className="description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos natus optio sint, aperiam praesentium a autem consequatur dolorum, placeat minus aspernatur, ea totam sit nobis impedit nihil tempora iste repellat.
                </div>
            </div>
            </div>
    </div>
  )
}

export default Services
