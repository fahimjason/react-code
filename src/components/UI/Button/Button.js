import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
<<<<<<< HEAD
=======
  console.log('Button RUNNING');
>>>>>>> 10-a-look-behind-the-scenes
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

<<<<<<< HEAD
export default Button;
=======
export default React.memo(Button);
>>>>>>> 10-a-look-behind-the-scenes
