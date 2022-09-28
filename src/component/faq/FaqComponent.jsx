import  './faq.scss'

const FaqComponent = ({title, icon, faqBody}) => {
  return (
    <div className="faq-card">
                <div className="title">
                    <h2>{title}</h2>
                    {icon}
                </div>
                <div className="faq-body">
                   {faqBody}
                </div>
            </div>
  )
}

export default FaqComponent