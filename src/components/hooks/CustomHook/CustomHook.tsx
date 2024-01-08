import React, { FC } from 'react';
import styles from './CustomHook.module.css';
import { CustomHookProps } from './CustomHookProps.types';

const CustomHook: FC<CustomHookProps> = ({initialValue}: CustomHookProps) => (  
  <div className={styles.CustomHook} data-testid="CustomHook">
    CustomHook Component
    <p>Initial Value: {initialValue}</p>
  </div>
);

export default CustomHook;
