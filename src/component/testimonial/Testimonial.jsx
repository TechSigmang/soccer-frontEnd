import  {} from 'react-icons/fa'
import './testimonia.scss'
import doctor from "../../images/bg/doctor.jpg"

const Testimonial = () => {
  return (
    <div className='testimonia'>
        <h2>Testimonials</h2>
        <hr />
        <p>This are what our trainees/student are saying, singup today, and you will also have reason to give testimony.</p>
        <div className="testimonia-items">
        <div className="testimia-card">
           <div className="testimonia-img">
           <img src={doctor} alt="" />
           </div>
            <div className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </div>
            <div className="names">John Doe</div>
            <div className="role">Trainee</div>
        </div>

        <div className="testimia-card">
        <div className="testimonia-img">
           <img src={doctor} alt="" />
           </div>
            <div className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt blanditiis repellendus labore laborum nemo doloremque cum dolore dolores magnam quod, suscipit fuga nisi praesentium molestias ipsam. Corrupti officiis autem eos.</div>
            <div className="names">Mike Carignton</div>
            <div className="role">Trainee</div>
        </div>

        <div className="testimia-card">
        <div className="testimonia-img">
        <img src={doctor} alt="" />
           </div>
            <div className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt blanditiis repellendus labore laborum nemo doloremque cum dolore dolores magnam quod, suscipit fuga nisi praesentium molestias ipsam. Corrupti officiis autem eos.
            
            </div>
            <div className="names">Elizabeth Lackson</div>
            <div className="role">Trainee</div>
        </div>
        </div>

    </div>
  )
}

export default Testimonial