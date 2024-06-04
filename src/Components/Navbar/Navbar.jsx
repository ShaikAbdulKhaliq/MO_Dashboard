import React, { useEffect, useState } from 'react'
import styles from "./Navbar.module.css"
import Logo from "../../assets/Svg/logo.svg"
import pinlocation from "../../assets/Svg/pinlocation.svg"
import sunnyday from "../../assets/Svg/sunnyday1.svg"
import Line from "../../assets/Svg/Line.svg"
import Profile from "../../assets/Svg/Profile.svg"
const Navbar = () => {

    const [currentTime, setCurrentTime] = useState(new Date());
    const [day, setDay] = useState('');
    const [date, setDate] = useState('');
    const [timesecn,settimesecn]=useState("")
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(timer);
    }, []);

    // Custom function to format time without leading zero for hours
    const formatTime = (date) => {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12; // Convert 24-hour format to 12-hour format
        hours = hours ? hours : 12; // The hour '0' should be '12'

        const minutesStr = minutes < 10 ? '0' + minutes : minutes;

        return `${hours}:${minutesStr} ${ampm}`;
    };


    useEffect(() => {
        const updateDateAndDay = () => {
            const now = new Date();
            const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDY', 'FRIDAY', 'SATURDAY'];
            const dayString = daysOfWeek[now.getDay()];

            const options = { month: 'long', day: 'numeric' };
            const dateString = now.toLocaleDateString('en-US', options).replace(/, \d{4}/, '');

            setDay(dayString);
            setDate(dateString);
        };

        // Update immediately and then every second
        updateDateAndDay();
        const timer = setInterval(updateDateAndDay, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(timer);
    }, []);

    const timeString = formatTime(currentTime);

    return (
        <div className={styles.Navbar_container}>
            <div className={styles.Navbar_leftside_content}>
                <div className={styles.Navbar_Logo_container}>
                    <img src={Logo} alt="MO_logo" className={styles.Navbar_logo} />
                </div>
                <div className={styles.Navbar_userDetails}>
                    <p>Welcome David!</p>
                    <span>
                        <img src={pinlocation} alt="pinlocation_icon" />
                        Lower Manhattan, New York City
                    </span>
                </div>
                <div className={styles.Navbar_rightside_container}>
                    <div>
                        <img src={sunnyday} alt="sunnyday_logo" className={styles.sunnyday_logo}/>
                    </div>
                    <div className={styles.Navbar_timeString_userlogo}>
                        <div className={styles.Navbar_date_time}>
                            <div className={styles.Navbar_timestring}>{timeString}</div>
                            <div className={styles.Navbar_date_day}>
                                <p>{day}</p>
                                <p>{date}</p>
                            </div>
                        </div>
                        <div className={styles.Line}>
                            <img src={Line} alt="big_line" />
                        </div>
                    </div>
                    <img src={Profile} alt="profile_icon" id={styles.Navbar_profile_icon}/>
                </div>
            </div>

        </div>
    )
}

export default Navbar