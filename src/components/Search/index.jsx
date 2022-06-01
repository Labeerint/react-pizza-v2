import debounce from 'lodash.debounce';
import React, { useCallback, useRef, useState } from 'react';
import styles from './Search.module.scss';

function Search({ setSearchValue }) {
    const [currentValue, setCurrentValue] = useState('')
    const inputRef = useRef()

    const onClickClear = () => {
        setSearchValue('')
        setCurrentValue('');
        inputRef.current.focus()
    }

    const onChangeValue = (e) => {
        setCurrentValue(e.target.value);
        debounceSearchValue(e.target.value)
    }

    const debounceSearchValue = useCallback(
        debounce(value => setSearchValue(value), 500)
    , [])



    return (
        <div className={styles.root}>
            <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 32 32"
                xmlSpace="preserve">
                <path d="M27.414 24.586l-5.077-5.077A9.932 9.932 0 0024 14c0-5.514-4.486-10-10-10S4 8.486 4 14s4.486 10 10 10a9.932 9.932 0 005.509-1.663l5.077 5.077a2 2 0 102.828-2.828zM7 14c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7z"></path>
            </svg>
            <input
                ref={inputRef}
                value={currentValue}
                onChange={onChangeValue}
                type="text"
                className={styles.input}
            />
            {currentValue && (
                <svg
                    className={styles.clear}
                    onClick={onClickClear}
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve">
                    <path
                        fill="#425661"
                        d="M256 7C118.467 7 7 118.468 7 256.002 7 393.533 118.467 505 256 505s249-111.467 249-248.998C505 118.468 393.533 7 256 7zm0 478.08c-126.31 0-229.08-102.771-229.08-229.078C26.92 129.692 129.69 26.92 256 26.92c126.309 0 229.08 102.771 229.08 229.082 0 126.307-102.771 229.078-229.08 229.078z"></path>
                    <path
                        fill="#425661"
                        d="M368.545 157.073L354.461 142.988 255.863 241.587 157.733 143.456 143.648 157.54 241.78 255.672 143.648 353.809 157.733 367.893 255.863 269.75 354.461 368.361 368.545 354.275 269.947 255.672z"></path>
                </svg>
            )}
        </div>
    );
}

export default Search;
