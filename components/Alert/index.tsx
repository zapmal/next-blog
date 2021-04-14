import React from 'react';
import cn from 'classnames';

import styles from './alert.module.css';

interface Props {
  children: React.ReactChildren;
  type: string;
}

const Alert: React.FC<Props> = ({ children, type }) => {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}

export default Alert;
