import React, { useEffect, useState} from 'react';
import axios from 'axios';
import checkoutstyles from './checkoutstyles.module.css';
import { useSelector } from 'react-redux';
import { flightCheckoutActions } from '../../store/flightCheckoutSlice';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
   const data = useSelector(state=>state.flightCheckout.ticket)

   const [insurance, setInsurance] = useState(false)

  const navigate = useNavigate();

    return (
        <div className={checkoutstyles.body}>
            <h1>CheckOut</h1>
            <div className={checkoutstyles.body1}>
                <div className={checkoutstyles.body2}>
                    <div className={checkoutstyles.detail}>

                        {/* the flight detail */}
                        <div className={checkoutstyles.detail_inner}>
                            <div className={checkoutstyles.flightdetail}>

                                <div className={checkoutstyles.flightdetail_title}>

                                    <span>Flight Detail</span>
                                </div>
                                <div className={checkoutstyles.flightdetail_body1}>
                                    <div className={checkoutstyles.flightdetail_body2}>
                                        <div className={checkoutstyles.flightdetail_body_tag} >DEPART</div>

                                        <div className={checkoutstyles.flightdetail_body_info}>
                                            <div className={checkoutstyles.flightdetail_clr}></div>

                                            <div className={checkoutstyles.flightdetail_body_info_des}>
                                                <span className={checkoutstyles.flightdetail_body_info_des_name}>{data.from_location}-{data.to_location} |</span>
                                                <span className={checkoutstyles.flightdetail_body_info_des_date}>  {data.departure_date}</span>
                                            </div>

                                            <div className={checkoutstyles.flightdetail_fligt_detail1}>
                                                <div className={checkoutstyles.flightdetail_fligt_detail_img}>
                                                    <div className={checkoutstyles.flightdetail_fligt_detail_img_logo}>
                                                        <img alt="Flight" width="28" src={data.company_icon} />
                                                    </div>

                                                    <div className={checkoutstyles.flightdetail_fligt_detail_img_logo_info}>
                                                        <span className={checkoutstyles.flightdetail_fligt_detail_img_logo_info1}>{data.company_name}</span>
                                                        <span className={checkoutstyles.flightdetail_fligt_detail_img_logo_info2}>I5-755</span>
                                                        <span className={checkoutstyles.flightdetail_fligt_detail_img_logo_tag}>Low Fare</span>
                                                    </div>


                                                </div>
                                            </div>

                                            <div className={checkoutstyles.flightdetail_fligt_detail2}>
                                                <div className={checkoutstyles.flightdetail_fligt_1}>
                                                    <div className={checkoutstyles.flightdetail_fligt_1cm}>
                                                        <span className={checkoutstyles.flightdetail_fligt_1cm_time}>{data.departure_time[0]}{data.departure_time[1]}: {data.departure_time[2]}{data.departure_time[3]}</span>
                                                    </div>

                                                    <div className={checkoutstyles.flightdetail_fligt_airdt}>
                                                        <div className={checkoutstyles.flightdetail_fligt_flc}>
                                                            <span>{data.from_location}</span>
                                                            <span>({data.from_location_code})</span>
                                                        </div>
                                                        <span>{data.departure_date}</span>
                                                        <span>Termial-3</span>
                                                    </div>
                                                </div>

                                                <div className={checkoutstyles.flightdetail_fligt_3}>
                                                    <div className={checkoutstyles.flightdetail_fligt_3stp}>
                                                        <span>{`${data.duration} h`}</span>
                                                    </div>

                                                    <div className={checkoutstyles.flightdetail_fligt_3lindvd}>
                                                        <div className={checkoutstyles.flightdetail_fligt_3fli}></div>
                                                    </div>

                                                    <div className={checkoutstyles.flightdetail_fligt_3refund}>
                                                        <span>REFUNDABLE</span>
                                                    </div>
                                                </div>

                                                <div className={checkoutstyles.flightdetail_fligt_1}>
                                                    <div className={checkoutstyles.flightdetail_fligt_1cm}>
                                                        <span className={checkoutstyles.flightdetail_fligt_1cm_time}>{data.arrival_time[0]}{data.arrival_time[1]}: {data.arrival_time[2]}{data.arrival_time[3]}</span>
                                                    </div>

                                                    <div className={checkoutstyles.flightdetail_fligt_airdt}>
                                                        <div className={checkoutstyles.flightdetail_fligt_flc}>
                                                            <span>{data.to_location}</span>
                                                            <span>{data.to_location_code}</span>
                                                        </div>
                                                        <span>{data.arrival_date}</span>
                                                        <span>Termial-1</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Medical policy div */}


                        <div className={checkoutstyles.medical_bor}>
                            <div className={checkoutstyles.medical_tr_covr}>
                                <div className={checkoutstyles.medical_tr_covr_logo}>
                                    <img src="https://flight.easemytrip.com/Content/img/coverage-icon-v1.svg" alt="Flight Cancellation" />
                                    <div className={checkoutstyles.medical_tr_covr_info}>
                                        <div className={checkoutstyles.medical_tr_covr_flco}>
                                            FREE Medical Refund Policy
                                            <img src="https://flight.easemytrip.com/Content/img/blueticknw.svg" alt="Tick" />
                                            <a className={checkoutstyles.medical_tr_covr_flco_policy} href="https://www.easemytrip.com/pdf/Domestic-Flight-CancellationInsurance.pdf" target="_new" download="">Policy Coverage</a>
                                        </div>
                                    </div>
                                </div>
                                <span className={checkoutstyles.medical_tr_covr_span}>Get full airline refund, if you cancel tickets due to illness or sickness. This  service is provided at sickness. This service is provided at <strong>ZERO additional charges</strong>.</span>

                            </div>

                            <div className={checkoutstyles.medical_insurance}>
                                <div className={checkoutstyles.medical_insurance_yes}>
                                    <input type="radio" name='yesmedical' />
                                    <label className={checkoutstyles.medical_insurance_lable}>Yes, I want to add Medical Refund Policy (FREE) to this flight</label>
                                    <span className={checkoutstyles.medical_insurance_checkmate}> </span>
                                </div>

                                <div className={checkoutstyles.medical_insurance_yes}>
                                    <input type="radio" name='yesmedical' />
                                    <label className={checkoutstyles.medical_insurance_lable}>No, I want to add Medical Refund Policy (FREE) to this flight</label>
                                    <span className={checkoutstyles.medical_insurance_checkmate}> </span>
                                </div>
                            </div>
                        </div>

                        {/* Good to know block */}

                        <div className={checkoutstyles.gooto_know}>
                            <div className={checkoutstyles.goodto_know_logo}>
                                <div className={checkoutstyles.goodto_know_logothumb}>
                                    <img src="https://flight.easemytrip.com/m_content/img/f-icon-9.png" width="34" />
                                </div>

                                <div className={checkoutstyles.goodto_know_logotext}>
                                    <h2>Good to know</h2>
                                    <p> Information you should know </p>

                                </div>
                            </div>

                            <div className={checkoutstyles.goodto_know_list}>
                                <ul className={checkoutstyles.goodto_know_listul}>
                                    <li>15 Kgs  per passenger check-in Baggage included for your selected fligth</li>
                                    <li>Airline Cancellation Fee is Rs 3000 per passenger for yoyr selcted filght</li>
                                    <li>Certify your health status through the Aarogya Setu app or the self-declaration form the airport</li>
                                    <li>Remember to web check-in before arriving at the airport</li>
                                    <li>Face masks are compulsory</li>

                                </ul>
                            </div>
                        </div>

                        {/* Important Information  */}

                        <div className={checkoutstyles.infomation}>
                            <h2>Important Information</h2>

                            <ul className={checkoutstyles.infomation_listul}>
                                <li>All passengers entering Maharashtra have to carry a negative RT-PCR test report along with a sample taken within 72 hours post arrival. RT-PCR Test timeline begins from the report allocation time. Passengers travelling to Maharashtra will not be permitted to board the flights if they are not carrying a valid test report. Fully vaccinated passengers don't have to carry a negative report if they are travelling within Maharashtra. They can travel with a final COVID vaccination certificate.</li>
                                <li>Passengers who have completed their vaccination (both the doses) can enter the state of Maharashtra after completing 15 days from receipt of the 2nd dose of vaccination. No negative RT-PCR test is required for fully vaccinated passengers.</li>


                            </ul>
                        </div>

                        {/* travel insurance */}

                        <div className={checkoutstyles.insurance}>
                            <div className={checkoutstyles.insurance_body}>
                                <div style={{ width: "100%", display: "block" }}>
                                    <div className={checkoutstyles.insurance_title}>
                                        <div className={checkoutstyles.insurance_title_logo}>
                                            <label for="logo" className={checkoutstyles.insurance_title_logo1}></label>
                                        </div>

                                        <div className={checkoutstyles.insurance_title_text}>
                                            <label className={checkoutstyles.insurance_title_textl1}>Add Travel Insurance and Secure your Trip with ACKO Travel Insurance for Rs.199/Person</label>
                                            <br />
                                            <span>(Upon Selecting Travel Insurance ,You accept the Terms and Conditions of the travel insurance policy)</span>
                                        </div>

                                        <div className={checkoutstyles.insurance_title_logo2}>
                                            <img alt="ACKO" width="55" src="https://flight.easemytrip.com/Content/img/acko-logo.png" />
                                        </div>
                                    </div>

                                    <div className={checkoutstyles.insurance_card}>
                                        <div className={checkoutstyles.insurance_card1}>
                                            <img className={checkoutstyles.insurance_card1_logo} alt="Flight" width="36" src="https://www.easemytrip.com/images/insurance/hospitalization-injury-v2.svg" />
                                            <br />
                                            <div className={checkoutstyles.insurance_card1_price}>
                                                <label>Sum Insured : INR 10,000</label>
                                            </div>
                                        </div>

                                        <div className={checkoutstyles.insurance_card1}>
                                            <img className={checkoutstyles.insurance_card1_logo} alt="Flight" width="36" src="https://www.easemytrip.com/images/insurance/trip-cancellation-v2.svg" />
                                            <br />
                                            <div className={checkoutstyles.insurance_card1_price}>
                                                <label>Sum Insured : INR 20,000</label>
                                            </div>
                                        </div>

                                        <div className={checkoutstyles.insurance_card1}>
                                            <img className={checkoutstyles.insurance_card1_logo} alt="Flight" width="36" src="https://www.easemytrip.com/images/insurance/trip-delay-v2.svg" />
                                            <br />
                                            <div className={checkoutstyles.insurance_card1_price}>
                                                <label>Sum Insured : INR 10,000</label>
                                            </div>
                                        </div>

                                        <div className={checkoutstyles.insurance_card1}>
                                            <img className={checkoutstyles.insurance_card1_logo} alt="Flight" width="36" src="https://www.easemytrip.com/images/insurance/delay-checked-in-baggage-v2.svg" />
                                            <br />
                                            <div className={checkoutstyles.insurance_card1_price}>
                                                <label>Sum Insured : INR 10,000</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div> 

                                        <div className={checkoutstyles.insurance_option}>
                                            <div className={checkoutstyles.insurance_option_yes}>
                                                <input type="radio" name="insurance" onClick={() => { setInsurance(true) }} />
                                                <label for="insurance">
                                                    Yes, I want to secure my trip with insurance.
                                                </label><br />
                                            </div>

                                            <div className={checkoutstyles.insurance_option_div}>More than 36% of our customers choose to secure their trip.</div>

                                            <div className={checkoutstyles.insurance_option_no }>
                                                <input type="radio" name="insurance" onClick={() => { setInsurance(false) }} />
                                                <label for="insurance">
                                                    No, I do not want to insure my trip
                                                </label><br />
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>


                        </div>

                        {/* the email fill form */}

                        <div className={checkoutstyles.email_form}>
                            <form>
                                <div className={checkoutstyles.email_form_header}>
                                    Contact Information
                                    <br />
                                    <span>Your ticket will be sent to this email address</span>
                                </div>

                                <input type="email" className={checkoutstyles.email_form_box} autocomplete="off" name="txtEmailId" id="txtEmailId" required="" placeholder="Enter Email Address" ></input>
                                <br />
                                <label className={checkoutstyles.email_form_boxL}>Please enter your email address *</label>

                                
                            </form>
                        </div>

                        {/* the add passenger details */}

                        <form>
                            <div className={checkoutstyles.userDetail}>
                                <div className={checkoutstyles.userDetail_header}>

                                    <span>Travellers Details</span>

                                    <div className={checkoutstyles.userDetail_header_info}>
                                        <div className={checkoutstyles.userDetail_header_info_tv}>
                                            <img src="//flight.easemytrip.com/M_Content/img/g-id-icon.png" />
                                            Name should be same as in Government ID proof
                                        </div>
                                    </div>
                                </div>
                                <div className={checkoutstyles.userDetail_box}>
                                    <div className={checkoutstyles.userDetail_box1}>
                                        <label className={checkoutstyles.userDetail_box1}>
                                            <input type="checkbox" checked="checked"></input>
                                            <span>User Detail</span>

                                        </label>
                                    </div>

                                    <div className={checkoutstyles.userDetail_boxInput}>
                                        <div className={checkoutstyles.userDetail_boxInputselect}>

                                            <label>Title</label><br />
                                            <select name="cars">
                                                <option value="Title">Title</option>
                                                <option value="Mr">Mr</option>
                                                <option value="Mrs">Mrs</option>
                                                <option value="other">other</option>
                                            </select>
                                        </div>


                                        <div className={checkoutstyles.userDetail_boxInput1}>
                                            <label>First Name</label><br />
                                            <input type="text" autocomplete="off" name="userDetail_fname" required="" placeholder="Enter First Name" ></input>
                                        </div>

                                        <div className={checkoutstyles.userDetail_boxInput1}>
                                            <label>Last Name</label><br />
                                            <input type="text" autocomplete="off" name="userDetail_lname" required="" placeholder="Enter Last Name" ></input>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Phone number entry */}

                            <div className={checkoutstyles.userDetail_phone}>
                                <div className={checkoutstyles.userDetail_phone_head}>
                                    Contact Details
                                    <b />
                                    <span>Your Mobile number will be used only for sending flight related communication</span>
                                </div>
                                <div className={checkoutstyles.userDetail_phone_body}>
                                    <input type="text"  placeholder='Enter your mobile numuber' />
                                </div>

                                {/* <div className={checkoutstyles.email_form_boxbutton}>
                                    <span >Continue Booking</span>
                                    <input type="submit" style={{ display: "none" }}></input>
                                </div> */}

                                <div className={checkoutstyles.email_form_boxbutton}>
                                    <button  onClick = {() => navigate("/check")}>Continue Booking</button>
                                </div>
                            </div>

                        </form>


                    </div>
                    <div className={checkoutstyles.sideBar}>
                        <div className={checkoutstyles.sideBar_body}>
                            <div className={checkoutstyles.sideBar_fd_r}>
                                <div className={checkoutstyles.sideBar_bor}>
                                    <div className={checkoutstyles.sideBar_bor_head}>
                                        <div className={checkoutstyles.sideBar_bor_head_logo}>
                                            <span>Price Summary</span>
                                        </div>
                                        <div className={checkoutstyles.sideBar_bor_head_count}>
                                            <div className={checkoutstyles.sideBar_bor_head_countA}>
                                                1
                                            </div>
                                            <div className={checkoutstyles.sideBar_bor_head_countC}>
                                                0
                                            </div>
                                            <div className={checkoutstyles.sideBar_bor_head_counti}>
                                                0
                                            </div>
                                        </div>
                                    </div>

                                    <div className={checkoutstyles.sideBar_bor_table}>
                                        <div className={checkoutstyles.sideBar_bor_tableR1}>
                                            <div className={checkoutstyles.sideBar_bor_tableR1C1}>
                                                Adult
                                            </div>
                                            <div className={checkoutstyles.sideBar_bor_tableR1C2}>
                                                Rs {data.price}
                                            </div>
                                        </div>

                                        <div className={checkoutstyles.sideBar_bor_tableR1}>
                                            <div className={checkoutstyles.sideBar_bor_tableR1C1}>
                                                Total tax
                                            </div>
                                            <div className={checkoutstyles.sideBar_bor_tableR1C2}>
                                                Rs 675
                                            </div>
                                        </div>

                                        <div className={checkoutstyles.sideBar_bor_tableR1}>
                                            <div className={checkoutstyles.sideBar_bor_tableR1C1}>
                                                Medical Refund Policy
                                            </div>
                                            <div className={checkoutstyles.sideBar_bor_tableR1C2}>
                                                Rs 0
                                            </div>
                                        </div>

                                        <div className={checkoutstyles.sideBar_bor_tableR1}>
                                            <div className={checkoutstyles.sideBar_bor_tableR1C1}>
                                                Medical Insurance
                                            </div>
                                            <div className={checkoutstyles.sideBar_bor_tableR1C2}>
                                                Rs {insurance ? 199 : 0 }
                                            </div>
                                        </div>

                                        <div className={checkoutstyles.sideBar_bor_tableR1}>
                                            <div className={checkoutstyles.sideBar_bor_tableR2C1}>
                                                Grand Total
                                            </div>
                                            <div className={checkoutstyles.sideBar_bor_tableR2C2}>
                                                Rs {insurance ? Number(data.price) + 675 + 199 : Number(data.price) + 675 }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={checkoutstyles.sideBar_coupon}>
                                    <div className={checkoutstyles.sideBar_coupon_head}>
                                        Have a coupon code / Gift Voucher No ??
                                    </div>

                                    <div className={checkoutstyles.sideBar_coupon_input}>
                                        <input placeholder="EMTNCF" />
                                        <button>CLEAR</button>
                                    </div>

                                    <div className={checkoutstyles.sideBar_coupon_body}>
                                        <p>Congratulations! Zero Convenience Coupon has been applied successfully. You have saved Rs.300 per passenger per sector as convenience fees.</p>
                                    </div>


                                    <div className={checkoutstyles.sideBar_coupon_c1}>
                                        <input type="checkbox" name="vehicle2" value="Car" />
                                        <label for="vehicle2">ZERO Convenience Fees</label><br />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}



export default CheckOut;