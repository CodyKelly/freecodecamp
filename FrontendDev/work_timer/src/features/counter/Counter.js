import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectValues,
  selectEnabled,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter(props) {
  const values = useSelector(selectValues);
  const enabled = useSelector(selectEnabled)
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(props.id))}
          disabled={!enabled}
        >
          -
        </button>
        <span className={styles.value}>{values[props.id]}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment(props.id))}
          disabled={!enabled}
        >
          +
        </button>
      </div>
    </div>
  );
}
