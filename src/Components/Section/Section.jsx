import React from 'react'
import styles from "./Section.module.css"
import calendar from "../../assets/Svg/SunriseSunsetsvgs/calender.svg"
import mask from "../../assets/Svg/SunriseSunsetsvgs/mask.svg"
import artboard from "../../assets/Svg/SunriseSunsetsvgs/artboard.svg"
import show from "../../assets/Svg/SunriseSunsetsvgs/show.svg"
import Dry_Machine from "../../assets/Svg/Dry_Machine.svg"
import circle from "../../assets/Svg/percentage_circle.svg"
import netflix from "../../assets/Svg/netflix logo.svg"
import nbc from "../../assets/Svg/Nbc_logo.svg"
import museo from "../../assets/Svg/museo_logo.svg"
import reve from "../../assets/Svg/reve_logo.svg"
import izak_app from "../../assets/Svg/izak_app.svg"
import reve_app from "../../assets/Svg/revee_app.svg"
import hear_here_app from "../../assets/Svg/hear,here 1.svg"
import gofema from "../../assets/Svg/gofema 1.svg"
import clink from "../../assets/Svg/clink 1.svg"
const Section = () => {
    return (
        <div className={styles.Section_continaer}>
            <div className={styles.Section_main_content}>
                <p className={styles.para1}>La Joie De Vivre, A New Bookstore Cafe, Opens In Manhattan</p>
                <p className={styles.para2}>A new independent French and English languages bookstore and café just</p>
                <p className={styles.para3}>opened in Manhattan. And the vibes are parfaite.</p>
            </div>
            <div className={styles.para_view_btn}><span>View</span></div>
            <div className={styles.Sunrise_Sunset_container}>
                <div className={styles.Icon_container}>
                    <img src={calendar} alt="Sunrise_sunset_icons" />
                    <span>9:15 am</span>
                </div>
                <div className={styles.Icon_container}>
                    <img src={artboard} alt="Sunrise_sunset_icons" />
                    <span>3:00 pm</span>
                </div>
                <div className={styles.Icon_container}>
                    <img src={mask} alt="Sunrise_sunset_icons" />
                    <span>2:00 pm</span>
                </div>
                <div className={styles.Icon_container}>
                    <img src={artboard} alt="Sunrise_sunset_icons" />
                    <span>3:00 pm</span>
                </div>
                <div className={styles.Icon_container}>
                    <img src={show} alt="Sunrise_sunset_icons" />
                    <span>4:15 pm</span>
                </div>
                <div className={styles.Icon_container}>
                    <img src={artboard} alt="Sunrise_sunset_icons" />
                    <span>3:00 pm</span>
                </div>
                <div className={styles.Icon_container}>
                    <img src={show} alt="Sunrise_sunset_icons" />
                    <span>4:15 pm</span>
                </div>
                <div className={styles.Icon_container}>
                    <img src={mask} alt="Sunrise_sunset_icons" />
                    <span>2:00 pm</span>
                </div>
                <div className={styles.Icon_container}>
                    <img src={show} alt="Sunrise_sunset_icons" />
                    <span>4:15 pm</span>
                </div>
                <div className={styles.Icon_container}>
                    <img src={calendar} alt="Sunrise_sunset_icons" />
                    <span>9:15 am</span>
                </div>
                <div className={styles.Icon_container}>
                    <img src={show} alt="Sunrise_sunset_icons" />
                    <span>4:15 pm</span>
                </div>
                <div className={styles.Icon_container}>
                    <img src={mask} alt="Sunrise_sunset_icons" />
                    <span>2:00 pm</span>
                </div>
                <div className={styles.Icon_container}>
                    <img src={artboard} alt="Sunrise_sunset_icons" />
                    <span>3:00 pm</span>
                </div>
                <div className={styles.Icon_container}>
                    <img src={mask} alt="Sunrise_sunset_icons" />
                    <span>2:00 pm</span>
                </div>
                <div className={styles.Icon_container}>
                    <img src={artboard} alt="Sunrise_sunset_icons" />
                    <span>3:00 pm</span>
                </div>
                <div className={styles.Icon_container}>
                    <img src={calendar} alt="Sunrise_sunset_icons" />
                    <span>9:15 am</span>
                </div>
            </div>
            <span className={styles.Updates_header}>Updates for you</span>
            <div className={styles.update_container_header}>
                <div className={styles.updates_container}>
                    <div className={styles.Updates_types}>
                        <img src={Dry_Machine} alt="dry_machine" />
                        <div className={styles.update_dry_machine_content}>
                            <span className={styles.update_dry_machine_content_para1}>Dryer cycle</span>
                            <span className={styles.update_dry_machine_content_para2}>Ends in 5 mins</span>
                        </div>
                    </div>

                </div>
                <div className={styles.updates_container}>
                    <div className={styles.Updates_types}>
                        <img src={circle} alt="dry_machine" />
                        <div className={styles.update_dry_machine_content}>
                            <span className={styles.update_dry_machine_content_para1}>$5213 of $10000 raised</span>
                            <span className={styles.update_dry_machine_content_para2}>Raising funds for SNAAP</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.Shows_container}>
                <span className={styles.show_header_content}>Pick up where you left off</span>
                <div className={styles.about_show_container}>
                    <div className={styles.About_show}>
                        <div className={styles.shows_name}>
                            <img src={netflix} alt="netflix_logo" className={styles.netflix_logo} />
                            <div className={styles.shows_desc}>
                                <p className={styles.show_left}>Continue watching</p>
                                <p className={styles.show_episode}>S2 EP 3: The Pollywog </p>
                                <p className={styles.show_time}>Ends in 20 mins</p>
                            </div>
                            <div className={styles.loader_header}>
                                <div className={styles.loader}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.About_show}>
                        <div className={styles.shows_name1}>
                            <img src={nbc} alt="netflix_logo" className={styles.netflix_logo} />
                            <div className={styles.shows_desc1}>
                                <div className={styles.show_auction}>
                                    <p className={styles.show_left}>Continue to Bid</p>
                                    <p className={styles.show_episode}>Primavera Art Auction </p>
                                    <p className={styles.show_time}>Ends in 20 mins</p>
                                </div>
                                <div> <img src={museo} alt="museo_logo" className={styles.museo_logo} /> </div>

                            </div>
                            <div className={styles.loader_header}>
                                <div className={styles.loader}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.About_show}>
                        <div className={styles.shows_name2}>
                            <img src={nbc} alt="netflix_logo" className={styles.netflix_logo} />
                            <div className={styles.shows_desc1}>
                                <div className={styles.show_auction}>
                                    <p className={styles.show_left}>Continue watching</p>
                                    <p className={styles.show_episode}>The Tonight Show </p>
                                    <p className={styles.show_time}>Ends in 30 mins</p>
                                </div>
                                <div> <img src={reve} alt="museo_logo" className={styles.museo_logo} /> </div>

                            </div>
                            <div className={styles.loader_header}>
                                <div className={styles.loader}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.appheader_container}>
            <p className={styles.apps_header}>Apps</p>
            </div>
                <div className={styles.App_container}>
                <div className={styles.diff_Apps}>
                    <div className={styles.diff_app_name_container}>
                        <img src={izak_app} alt="izak_app" />
                    </div>
                    <div className={styles.diff_app_name_container}>
                        <img src={museo} alt="izak_app" />
                    </div>
                    <div className={styles.diff_app_name_container}>
                        <img src={reve_app} alt="izak_app" />
                    </div>
                    <div className={styles.diff_app_name_container}>
                        <img src={hear_here_app} alt="izak_app" />
                    </div>
                    <div className={styles.diff_app_name_container}>
                        <img src={gofema} alt="izak_app" />
                    </div>
                    <div className={styles.diff_app_name_container}>
                        <img src={clink } alt="izak_app" />
                    </div>
                    <div className={styles.diff_app_name_container}>
                        <img src={hear_here_app} alt="izak_app" />
                    </div>
                    <div className={styles.diff_app_name_container}>
                        <img src={reve_app} alt="izak_app" />
                    </div>
                    <div className={styles.diff_app_name_container}>
                        <img src={museo} alt="izak_app" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section