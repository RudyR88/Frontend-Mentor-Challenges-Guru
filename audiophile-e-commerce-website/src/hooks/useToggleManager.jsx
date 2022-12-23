import { useState } from 'react';

export default function useToggleManager () {
    const [toggle, setToggle] = useState(false);

    const toggleToggle = () => {
        setToggle(prev => !prev);
    }

    const closeToggle = () => {
        setToggle(false);
    }

    return [toggle, toggleToggle, closeToggle];
}