import React from 'react';
import styles from './Button.module.scss';

export function Button({ action, size, theme, text }) {
    const sizeClass = size === 'small' ? styles['btn-small'] : size === 'medium' ? styles['btn-medium'] : styles['btn-large'];
    const themeClass = theme === 'light' ? styles['btn-light'] : styles['btn-dark'];

    return (
        <button 
            className={`${styles.btn} ${sizeClass} ${themeClass}`} 
            onClick={action}
        >
            {text}
        </button>
    );
}
