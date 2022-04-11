import react from 'react';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BookingDetails } from './BookingDetails'
import styles from './css/payments.module.css';
import { PaymentMode } from './PaymentMode';
import { PriceSummary } from "./PriceSummary"
import { TravellerDetail } from './TravellerDetail';
import { Wallet } from './Wallet';

export const Payments = ({ isToken, setIsToken }) => {

    const data = useSelector(state => state.flightCheckout.ticket)
    const [isLogin, setIsLogin] = React.useState(true);
    const navigate = useNavigate()

    react.useEffect(() => {
        if (!isToken) {
            navigate('/login')
        }
    })

    return (
        <div className={styles.mainDiv}>
            <div className={styles.payments}>
                <div>
                    <BookingDetails />
                    <TravellerDetail />
                    {/* {
                        isLogin ? <Wallet /> : null
                    } */}
                    <PaymentMode />
                </div>
                <div>
                    <PriceSummary />
                </div>
            </div>
        </div>
    )
}
