'use client';
import { useState, useEffect } from 'react';

export const useCyclingTypewriter = ({ words, typeSpeed = 100, deleteSpeed = 50, delay = 2000 }) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            const updatedText = isDeleting ? currentWord.substring(0, text.length - 1) : currentWord.substring(0, text.length + 1);
            setText(updatedText);
            if (!isDeleting && updatedText === currentWord) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };
        const timeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delay]);
    return text;
};