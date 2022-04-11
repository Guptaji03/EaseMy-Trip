import React from 'react';
import styles from './css/bookingDetails.module.css';
import { FaPlaneDeparture } from 'react-icons/fa';
import { BaggageList } from './BaggageList'
import { useSelector } from 'react-redux';


export const BookingDetails = () => {

    const [baggageActive, setBaggageActive] = React.useState(false);

    const data = useSelector(state => state.flightCheckout.ticket)

    return (
        <div className={styles.outerDiv}>
            <div className={styles.firstPara}>
                {/* <div className={styles.edt}></div> */}
                <p style={{ fontWeight: '500', paddingTop: '10px' }}>Booking Details</p>
            </div>
            <div className={styles.flightsContainer}>
                <div className={styles.place}>
                    <div style={{ fontSize: "1.8rem" }}>
                        <FaPlaneDeparture />
                    </div>

                    <p style={{ fontSize: "18px", fontWeight: "420" }}>{data.from_location}-{data.to_location} <span className={styles.span1}> |{data.departure_date}</span></p>

                </div>
                <div className={styles.details}>
                    <div className={styles.flightName}>
                        <div style={{ display: 'flex', placeItems: "center", gap: "1em" }}>
                            <img className={styles.logoCompany} src={data.company_icon} alt="" />
                            <div className={styles.nameNumber}>
                                <p className={styles.name}>{data.company_name}</p>
                                <p className={styles.number}>I5-753
                                </p>
                            </div>
                        </div>
                        <div className={styles.lowFare}>
                            Low Fare
                        </div>
                    </div>
                    <div className={styles.flightTime}>
                        <div className={styles.board}>
                            <strong>{data.departure_time[0]}{data.departure_time[1]}:{data.departure_time[2]}{data.departure_time[3]}</strong>
                            <p>{data.from_location} ({data.from_location_code})</p>
                            <p>{data.day.slice(0, 3)}-{data.departure_date}</p>
                            <p>Terminal - 3</p>
                        </div>
                        <div className={styles.beforeAfter}>
                            <p className={styles.duration}>01h 50m</p>
                            <hr className={styles.hrDetails} />
                            {/* <FaPlaneDeparture style={{ zIndex: "1", marginRight: "45px" }} /> */}
                            <p className={styles.refund}>REFUNDABLE</p>
                        </div>
                        <div className={styles.board}>
                            <strong>{data.arrival_time[0]}{data.arrival_time[1]}:{data.arrival_time[2]}{data.arrival_time[3]}</strong>
                            <p>{data.to_location} ({data.to_location_code})</p>
                            <p>{data.day.slice(0, 3)}-{data.departure_date}</p>
                            <p>Terminal - 1</p>
                        </div>
                    </div>

                </div>
                <div style={{ marginLeft: '1.5em' }}>
                    <p className={baggageActive ? styles.baggage_active : styles.baggage} onClick={() => setBaggageActive(!baggageActive)}>Baggage</p>

                    {
                        baggageActive ? <BaggageList /> : null
                    }
                </div>
            </div>
        </div >
    )
}
