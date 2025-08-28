'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
        };
        const onMouseEnter = () => setIsHovering(true);
        const onMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', moveCursor);
        document.querySelectorAll('a, button, .cursor-pointer').forEach(el => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.querySelectorAll('a, button, .cursor-pointer').forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return (
        <div ref={cursorRef} className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[999] hidden md:block">
            <motion.div
                className="w-8 h-8 rounded-full border-2 border-slate-500 transition-transform duration-200"
                animate={{ scale: isHovering ? 1.5 : 1 }}
            />
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
    );
};