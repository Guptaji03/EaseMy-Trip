import React from 'react';
import styles from './css/priceSummary.module.css';
import { HiOutlineCurrencyRupee } from 'react-icons/hi'
import { IoMdMan } from 'react-icons/io';
import { FaChild, FaBaby } from 'react-icons/fa'
import { useSelector } from 'react-redux';

export const PriceSummary = () => {

    const data = useSelector(state => state.flightCheckout.ticket)


    return (
        <div className={styles.outerDiv}>
            <div className={styles.flexdiv}>
                <div className={styles.summary1}>
                    <HiOutlineCurrencyRupee className={styles.icon} />
                    <p style={{
                        fontWeight: '350',
                        fontSize: '1.2em'
                    }}>Price Summary</p>
                </div>
                <div className={styles.summary}>
                    <div style={{ display: 'flex', placeItems: 'center' }}>
                        <IoMdMan />
                        <p>0</p>
                    </div>
                    <div style={{ display: 'flex', placeItems: 'center' }}>
                        <FaChild />
                        <p>1</p>
                    </div>
                    <div style={{ display: 'flex', placeItems: 'center' }}>
                        <FaBaby />
                        <p>0</p>
                    </div>

                </div>
            </div>

            <div className={styles.priceForIndividual}>
                <p className={styles.detail}>Adult x 1</p>
                <p className={styles.price}>₹ {data.price}</p>
            </div>

            <div className={styles.priceForIndividual}>
                <p className={styles.detail}>Total Taxes</p>
                <p className={styles.price}>₹ 675</p>
            </div>

            <div className={styles.priceForIndividual}>
                <p className={styles.detail}>Insurance</p>
                <p className={styles.price}>₹ 199</p>
            </div>

            <div className={styles.priceForIndividual}>
                <p className={styles.detail}>Medical Refund Policy</p>
                <p className={styles.price}>₹ 0</p>
            </div>

            <div className={styles.priceForIndividual}>
                <p className={styles.grandTotal}>Grand Total</p>
                <p className={styles.grandTotal}>₹ {+data.price + 675 + 199}</p>
            </div>
        </div >
    )
}
