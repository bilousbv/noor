import React, {useEffect, useState} from 'react'
import TimeTile from './TimeTile.jsx';

const Header = () => {
    const [timeLeft, setTimeLeft] = useState(6 * 60 * 60); // 6 hours in seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return {
            hrs: hrs.toString().padStart(2, '0'),
            mins: mins.toString().padStart(2, '0'),
            secs: secs.toString().padStart(2, '0'),
        };
    };

    const { hrs, mins, secs } = formatTime(timeLeft);

    return (
        <header className="px-[0.625rem] bg-[#1f2a1c] ">
            <div className="font-roboto text-white text-center p-[0.375rem] flex flex-row justify-center items-center gap-6">
                <span className="text-[0.688rem]/[1] xs:text-sm">EXISTING CUSTOMER DEAL ENDING IN 6 HOURS</span>
                <div className="flex gap-[0.625rem] items-center">
                    <TimeTile value={hrs} label="Hrs" />
                    <span className="text-xl">:</span>
                    <TimeTile value={mins} label="Min" />
                    <span className="text-xl">:</span>
                    <TimeTile value={secs} label="Sec" />
                </div>
            </div>
        </header>
    )
}
export default Header
