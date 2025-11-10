import React, { useEffect, useState } from 'react'
import Digits from '../Digits'

function Clock() {

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [day, setDay] = useState(0);
    const [date, setDate] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [amPm, setAmPm] = useState("AM");

    const timeupdate = () => {
        const now = new Date();
        let hours = now.getHours();
        setAmPm(hours >= 12 ? "PM" : "AM");
        hours = hours % 12 || 12;

        setHour(String(hours).padStart(2, "0"));
        setMinute(String(now.getMinutes()).padStart(2, "0"));
        setSecond(String(now.getSeconds()).padStart(2, "0"));


        // day.textContent = days[now.getDay()];
        // date.textContent = String(now.getDate()).padStart(2, "0");
        // month.textContent = months[now.getMonth()];
        // year.textContent = String(now.getFullYear());
        // document.querySelector("#am-pm").textContent = amPm
    }

    useEffect(() => (
        timeupdate()
    ), [second]);

    setInterval(timeupdate, 1000)

    useEffect(() => {
        const now = new Date();
        setDay(days[now.getDay()]);
        setDate(now.getDate());
        setMonth(months[now.getMonth()]);
        setYear(now.getFullYear());
    }, [hour])


    return (
        <div className=''>
            <div className='text-(--text-color) flex flex-col h-dvh'>
                <div className='flex justify-evenly w-full items-center lg:h-3/5 h-1/2 text-5xl lg:text-7xl'>
                    <Digits value={hour} className='text-(--text-color) ' /> :
                    <Digits value={minute} className='text-(--text-color)' /> :
                    <Digits value={second} className='text-(--text-color)' />
                </div>
                <div className='flex justify-center items-center h-3/12 text-2xl lg:text-4xl gap-[1%]'>
                    <span>{day},</span>
                    <span>{date}</span>
                    <span>{month}</span>
                    <span>{year}</span>
                </div>
            </div>

        </div>
    )
}

export default Clock