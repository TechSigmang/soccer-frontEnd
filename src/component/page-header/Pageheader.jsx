import  './pageheader.scss'
import {propTypes} from 'prop-types'

const Pageheader = ({text}) => {
  return (
    <div className='pageheader'>
        <h2 className='page-title'>{text}</h2>
    </div>
  )
}

Pageheader.defaultProps = {
  text:''
}





export default Pageheader