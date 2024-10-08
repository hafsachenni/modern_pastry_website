import React from 'react';
import {images} from '../../constants';

const SubHeading = ({title}) => {
  return (
    <div style={{marginBottom: '1rem'}}>
      <p className='p__cormorant'>{title}</p>
      <img src={images.bordure} alt='bordure' className='spoon__img'/>
    </div>
  )
}

export default SubHeading
