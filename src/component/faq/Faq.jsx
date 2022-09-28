import { FaPlus } from 'react-icons/fa'
import './faq.scss'
import faq from "../../images/faq/faq.png"
import FaqComponent from './FaqComponent'
import { icons } from 'react-icons/lib'

const Faq = () => {
  return (
    <div className='faq'>
        <div className="left">
            <img src={faq} alt="FAQ Image" />
        </div>
        <div className="right">
            <h2 className='faq-heading'>Frequently Ask Questions?</h2>
            <FaqComponent title={`How does Tactic Manager work?`} icon={<FaPlus className='icon' />} faqBody={` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, perferendis? Reprehenderit itaque incidunt blanditiis,`} />

            <FaqComponent title={`How does Tactic Manager work?`} icon={<FaPlus className='icon' />} faqBody={` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, perferendis? Reprehenderit itaque incidunt blanditiis,`} />

            <FaqComponent title={`How does Tactic Manager work?`} icon={<FaPlus className='icon' />} faqBody={` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, perferendis? Reprehenderit itaque incidunt blanditiis,`} />

            <FaqComponent title={`How does Tactic Manager work?`} icon={<FaPlus className='icon' />} faqBody={` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, perferendis? Reprehenderit itaque incidunt blanditiis,`} />
          
        </div>
    </div>
  )
}

export default Faq