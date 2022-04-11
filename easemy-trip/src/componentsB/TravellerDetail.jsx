import React from 'react';
import styles from './css/travellerDetail.module.css'

export const TravellerDetail = () => {
    return (
        <div className={styles.outerDiv}>
            <div className={styles.firstPara}>
                {/* <div className={styles.edt}></div> */}
                <p style={{ fontWeight: '500', paddingTop: '10px' }}>Traveller Details</p>
            </div>

            <div>
                <table className={styles.table}>
                    <tr>
                        <td className={styles.th}>E-mail</td>
                        <td className={styles.th}>Contact No.</td>
                        <td className={styles.th}>Adult (1)</td>
                        <td className={styles.th}>Child (0)</td>
                        <td className={styles.th}>Infant (0)</td>
                    </tr>

                    <tr>
                        <td className={styles.td}>bhaskarkumar0022@gmail.com</td>
                        <td className={styles.td}></td>
                        <td className={styles.td}>Bhaskar Kumar</td>
                        <td className={styles.td}></td>
                        <td className={styles.td}></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
