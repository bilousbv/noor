import React from 'react'

const TimeTile = ({ label, value }) => (
    <div className="bg-[#fffc] text-[#1b281d] px-[0.25rem] py-[0.125rem] rounded-[3px] flex flex-col">
        <span className="text-sm/[1.3]">{value}</span>
        <span className="text-[0.5rem]/[1.3]">{label}</span>
    </div>
);

export default TimeTile
