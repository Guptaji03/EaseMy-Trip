import React from "react";
// import Card from './Card'
import Discount from './Discount'
import style from "./home.module.css";
import img1 from "../Navbar/img1.PNG"
import TopFlight from "./TopFlight";
import Footer from "./Footer";

// import Searchbar from "../Search/Searchbar";
import Search from "../Search/Search";
import Carousel from "../crousel/Carousel";
const Home = () => {
  return (
    <>
      <Search/>
    <div className={style.container}>
      
      <div className={style.top}>

        <div className={style.info}>
          <span>Important Info: </span>
          To cancel/claim refund or reschedule/modify your booking.{" "}
          <span className={style.link1}>click here </span>
        </div>

        <div className={style.guide}>
          <span>Travel Guide:</span>
          <p>
            Get latest information on airlines & airports guidelines, state-wise
            quarantine rules, travel checklists, web-checkin etc.
            </p>
        </div>

      </div>

      <div className={style.bottom}>

        <div className={style.inner}>
          <span>FREE Full Refund due to Medical Reasons:</span> EaseMyTrip
          brings an extraordinary offer in these tough times! Get full refund
          for domestic ticket in case you cancel it due to medical sickness.
          Best Part - There are ZERO extra charges for this service.
          <span className={style.link}>(View Coverage)</span>{" "}
        </div>

      </div>
      <div className={style.exclusive}>
        <div className={style.headings}>
        <div> <h1>Exclusive offer</h1></div>
          <div className={style.h}>
            <h4 className={style.first}>BEST OFFERS  <hr />
            </h4>
            <h4>FLIGHT  <hr /></h4>
            <h4>HOTEL <hr /></h4>
            <h4>BUS <hr /></h4>
            <h4>HOLIDAY <hr /></h4>
          </div>
          </div>
          
       
        </div>
      <Discount/>
      <div className={style.heading_news} > <p> Top Flight Routes</p> <p> Travel News</p></div> 
      <TopFlight/>
      <br />
      <div>
        <h1>Travel Blog</h1> 
      </div>
      <div >

        <Carousel/>
      </div>
      
      <div className={style.search_flight_info}>
        <h3>Search Flights, Hotels, Bus and Holiday Packages</h3>
        <p>EaseMyTrip.com is one of the topmost travel companies of India and is a trusted name in the Indian travel industry. It is also known for providing the best travel deals to travelers. Being a strong network of 59,000 travel agents (as of November 20, 2021) and having more than 11 million direct customers, EaseMyTrip can satisfy all your travel needs. Here, You can book flight tickets, hotels, bus tickets, and holiday packages at a cost-effective price. So, why go anywhere else? Visit us for a memorable travel experience in your budget.</p>
      </div>

    </div>
     <br />
     <br />


     <img src={img1} alt="" />

     <Footer />
    </>
  );
};

export default Home;

// <div class="middle_sec">
// <h1><i class="fl_hp_i"></i>Search Lowest Airfare</h1>
// <div class="one-rou">
//                  <input name="Trip" id="Trip" class="hide-round one_rou_click" value="One" checked="checked" type="radio" style="display: none;">
//                  <input name="Trip" id="radio1" class="hide-round2 rund" value="Two" type="radio" style="display: none;">
//                  <input name="Trip" id="rdoMul" class="hide-round2 rund" value="Mul" type="radio" style="display: none;">
//                    <ul>
//                         <li class="border-lft flig-show click-one bg-color" onclick="setType('O');">One-Way </li>
//                         <li class="click-round flig-show" onclick="setType('R');">Round-Trip</li>
// 						<li class="click-mul border-rht mul-hid" onclick="setType('M')">Multi-City</li>
//                       </ul>
// </div>
// <div class="clr"></div>
// <div class="search_bg">
// <div class="mobile-wi1 flig-show1">
// <div class="s_col_1 mgr20">
//  <input id="FromSector" onkeydown="TocontrolTabClickFrom(event)" type="text" onchange="ChangeCabin();" class="hide-txtbox input_city ac_input" placeholder="From" autocomplete="off">
//  <!-- SearchThread(); -->
//                       <input style="padding: 23px 0 22px 20px;" id="FromSector_show" tabindex="1" onkeydown="TocontrolTabClickFrom(event)" type="text" onchange="ChangeCabin();" onblur="checkDOM()" class="autoFlll input_city ac_input ui-autocomplete-input" placeholder="From" autocomplete="off" onclick="MulticityClearText('fromautoFill', this.id,'F');">
// 					     <span id="FromSectorSpan" class="spnair" onclick="MulticityClearText('fromautoFill', 'FromSector_show','F');">Indira Gandhi International Airport</span> 
//                       <div class="drop-new"> 
//                         <!--drop down start-->
//                         <div id="ulfrom">
//                           <div class="aut-bx-m_not_use bx1" id="fromautoFill" style="display: none;"> </div>
//                         </div>
//                         <div class="clr"></div>
//                         <!--drop down end--> 
//                        </div>
// <div id="swap" onclick="swapValues('FromSector', 'Editbox13');swapValues('FromSector_show', 'Editbox13_show'); AnimateCss('FromSector_show', 'slide-right-in', 0, 500); AnimateCss('Editbox13_show', 'slide-left-in', 0, 500);return false;" class="swipe"></div>
// </div>
// <div class="s_col_1 mgr20">
// <input id="Editbox13" type="text" class="hide-txtbox input_city ac_input" onchange="ChangeCabin();" placeholder="To" autocomplete="off">
//                       <input style="padding: 23px 0 22px 20px;" id="Editbox13_show" type="text" class="autoFlll input_city ac_input ui-autocomplete-input" onchange="ChangeCabin();" placeholder="To" onblur="checkDOM()" autocomplete="off" onkeydown="TocontrolTabClickTo(event)" onclick="MulticityClearText('toautoFill', this.id,'I');">
// 					     <span id="Editbox13Span" class="spnair" onclick="MulticityClearText('toautoFill', 'Editbox13_show','I');">Chhatrapati Shivaji International Airport</span>
//                       <div class="drop-new">
//                         <div id="ulfrom">
//                           <div class="aut-bx-m_not_use bx1" id="toautoFill" style="display: none;"> </div>
//                         </div>
//                       </div>
//                       <div class="clr"></div>
// </div>
// <div class="s_col_2 mgr10 ccp">

// <div id="dvfarecal" runat="server" onclick="getTextboxName('ddate')">
//                           <input name="" autocomplete="off" type="text" class="input_cld" id="ddate" placeholder="Departure" <input="" readonly="">
//                         </div>
//                         <div id="dvcalendar" style="display: none"></div>
// </div>
// <div class="s_col_2 mgr10 retu-date-n op ccp" id="rdatelbl">
//  <div id="divRtnCal" onclick="getTextboxName('rdate')">
//                           <input autocomplete="off" name="" type="text" class="input_cld hide-ddate round-but1" id="rdate" placeholder="Return" style="" readonly=""><span id="cld_icon" class="dt_icn"></span>
//                         </div>
//                         <i class="rt_cross" style="display:none">×</i>
//                         <input type="hidden" name="hdn1" id="hdn1">
//                         <input id="hdn" type="hidden">
// </div>
// <div class="s_col_7 mgr10">
// <div class="dropdown_n">
// <a onclick="myFunction4()" class="dropbtn_n9"><span class="drpNoTrv">1 Traveller(s)</span></a>
//   <div id="myDropdown_n" class="dropdown-content-n">
//     <div class="innr_pnl">
//      <div class="main_dv">
//     <div class="ttl_col"><p>Adult</p><span>(12+ yrs)</span></div>
//     <div class="count_col">    
//     <div class="plu-mis-s">
//                         <div class="m1">
//                           <input type="button" value="-" class="minus_boxADt" field="quantity">
//                         </div>
//                         <div class="tx">
//                           <input type="text" name="quantity" value="1" class="numbe_box2" id="optAdult" readonly="">
//                         </div>
//                         <div class="pl">
//                           <input type="button" value="+" class="plus_box1" field="quantity">
//                         </div>
//                         <div class="clr"></div>
//                       </div>
//     </div>
//     </div>
//     <div class="main_dv">
//     <div class="ttl_col"><p>Children</p><span>(2-12 yrs)</span></div>
//     <div class="count_col">    
//     <div class="plu-mis-s">
//                         <div class="m1">
//                           <input type="button" value="-" class="minus_box1" field="quantity1">
//                         </div>
//                         <div class="tx">
//                           <input type="text" name="quantity1" value="0" class="numbe_box2" id="optChild" readonly="">
//                         </div>
//                         <div class="pl">
//                           <input type="button" value="+" class="plus_boxChd" field="quantity1">
//                         </div>
//                         <div class="clr"></div>
//                       </div>
//     </div>
//     </div>
//     <div class="main_dv">
//     <div class="ttl_col"><p>Infant(s)</p><span>(below 2 yrs)</span></div>
//     <div class="count_col">    
//     <div class="plu-mis-s">
//                         <div class="m1">
//                           <input type="button" value="-" class="minus_box1" field="quantity2">
//                         </div>
//                         <div class="tx">
//                           <input type="text" name="quantity2" value="0" class="numbe_box2" id="optInfant" readonly="">
//                         </div>
//                         <div class="pl">
//                           <input type="button" value="+" class="plus_box1Inf" field="quantity2">
//                         </div>
//                         <div class="clr"></div>
//                       </div>
//     </div>
//     </div>
// <div class="clr"></div>  
// <div class="groupBox">For 10 Passengers and above kindly send the email on <a href="mailto:groups@easemytrip.com" style="color: #2196f3;">groups@easemytrip.com</a></div> 
//  <div class="clr"></div>       
//     <a id="traveLer" class="dn_btn">Done</a>
//     </div>
//   </div>
// </div>
// </div>


// <div class="s_col_8 mgr10">
// <div class="dropdown_n">
// <a onclick="myFunction9()" class="dropbtn_n10"><span class="optclass-name"> Economy</span></a>
//   <div id="myDropdown_n9" class="dropdown-content-n">
//     <div class="innr_pnl">
//     <label class="cont_flt">
//                                                         Economy
//                                                         <input type="radio" value="0" name="optClass" checked="checked" onclick="fillOptClassName('Economy')">
//                                                         <span class="chk_flt"></span>
//                                                     </label>
//                                                     <label class="cont_flt">
//                                                         Prem.Economy
//                                                         <input type="radio" value="4" name="optClass" onclick="fillOptClassName('Prem.Economy')">
//                                                         <span class="chk_flt"></span>
//                                                     </label>
//                                                     <label class="cont_flt">
//                                                         Business
//                                                         <input type="radio" value="2" name="optClass" onclick="fillOptClassName('Business')">
//                                                         <span class="chk_flt"></span>
//                                                     </label>
//                                                     <label class="cont_flt optFrst" style="display: block;">
//                                                         First
//                                                         <input type="radio" value="1" name="optClass" onclick="fillOptClassName('First')">
//                                                         <span class="chk_flt"></span>
//                                                     </label>
//  <div class="clr"></div>     
//     <a id="tripType" class="dn_btn mgtv4">Done</a>
//     </div>
//   </div>
// </div>
// </div>



// <div class="s_col_v4 ripplen" id="search"><input name="" value="Search" style="-webkit-appearance: none;" type="button" class="src_btn" onclick="SearchFlightWithArmy();"></div>
// <div class="searh-sect" id="searchMultiCity"></div>
// <div class="clr"></div>
// <div id="wrapper"></div>
// </div>
// <!--Multicity-->
// <div class="mobile-wi1-multi mul-sho" style="display: none;">
// <div id="sector-sec1">
// <div class="s_col_1m mgr20">
// <input id="FromSector-mul1" type="text" onchange="ChangeCabin();" class="input_city hide-txtbox mul-ti ac_input" placeholder="Departure City" onclick="MulticityClearText('FromMulti1', this.id);" autocomplete="off">
// <input id="FromSector-mul1_show" type="text" onchange="ChangeCabin();" class="input_city autoFlll mul-ti ac_input ui-autocomplete-input" placeholder="Departure City" onclick="MulticityClearText('FromMulti1', this.id, 'F');" autocomplete="off">
//  <span id="FromSector-mul1Span" class="spnair"></span>
// <div class="drop-new">
// <div id="ulfrom">
//   <div class="aut-bx-m_not_use bx1" id="FromMulti1" style="display: none;"> </div>
// </div>
// <div class="clr"></div>
// <!--drop down end--> 
// </div>
// </div>
// <div class="s_col_1m mgr20">
// <input id="ToSector-mul1" type="text" class="input_city hide-txtbox mul-ti ac_input" placeholder="Destination City" autocomplete="off" onclick="MulticityClearText('ToMulti1',this.id);" onkeydown="TocontrolTabClickTo(event)">
//                       <input id="ToSector-mul1_show" type="text" class="input_city autoFlll mul-ti ac_input ui-autocomplete-input" onchange="ChangeCabin();" placeholder="Destination City" autocomplete="off" onclick="    MulticityClearText('ToMulti1', this.id);" onkeydown="TocontrolTabClickTo(event)" onblur="fillMultiCityTotxtBox();">
// 					  <span id="ToSector-mul1Span" class="spnair"></span>
//                       <div class="drop-new">
//                         <div id="ulfrom">
//                           <div class="aut-bx-m_not_use bx1" id="ToMulti1" style="display: none;"> </div>
//                         </div>
//                         <div class="clr"></div>
//                       </div>
// </div>
// <div class="s_col_2 mgr10 cpp">
// <div id="dvfarecal" onclick="getTextboxName('ddate')">
//                               <input name="" autocomplete="off" type="text" class="input_cld hasDatepicker" id="ddateMul1" placeholder="Choose Date" readonly="">
//                             </div>
//                             <div id="dvcalendar" style="display: none"></div>
// </div>
// <div class="s_col_v3 mgr10">
// <div class="dropdown_n">
// <a onclick="myFunction5()" class="dropbtn_n"><span class="drpNoTrv" id="spnmulTRV">1 Traveller(s)</span> <span class="optclass-nameMul">, Economy</span></a>
//   <div id="myDropdown_n2" class="dropdown-content-n">
//     <div class="innr_pnl">
//      <div class="main_dv">
//     <div class="ttl_col"><p>Adult</p><span>(12+ yrs)</span></div>
//     <div class="count_col">    
//     <div class="plu-mis-s">
//                         <div class="m1">
//                           <input type="button" value="-" class="minus_boxADt" field="quantity">
//                         </div>
//                         <div class="tx">
//                           <input type="text" name="quantity" value="1" class="numbe_box2" id="optAdultMul" readonly="">
//                         </div>
//                         <div class="pl">
//                           <input type="button" value="+" class="plus_box1" field="quantity">
//                         </div>
//                         <div class="clr"></div>
//                       </div>
//     </div>
//     </div>
//     <div class="main_dv">
//     <div class="ttl_col"><p>Children</p><span>(2+ 12 yrs)</span></div>
//     <div class="count_col">    
//     <div class="plu-mis-s">
//                         <div class="m1">
//                           <input type="button" value="-" class="minus_box1" field="quantity1">
//                         </div>
//                         <div class="tx">
//                           <input type="text" name="quantity1" value="0" class="numbe_box2" id="optChildMul" readonly="">
//                         </div>
//                         <div class="pl">
//                           <input type="button" value="+" class="plus_boxChd" field="quantity1">
//                         </div>
//                         <div class="clr"></div>
//                       </div>
//     </div>
//     </div>
//     <div class="main_dv">
//     <div class="ttl_col"><p>Infant(s)</p><span>(below 2 yrs)</span></div>
//     <div class="count_col">    
//     <div class="plu-mis-s">
//                         <div class="m1">
//                           <input type="button" value="-" class="minus_box1" field="quantity2">
//                         </div>
//                         <div class="tx">
//                           <input type="text" name="quantity2" value="0" class="numbe_box2" id="optInfantMul" readonly="">
//                         </div>
//                         <div class="pl">
//                           <input type="button" value="+" class="plus_box1Inf" field="quantity2">
//                         </div>
//                         <div class="clr"></div>
//                       </div>
//     </div>
//     </div>
// 	 <div class="divider_n"></div>
//     <label class="cont_flt">
//                                                         Economy
//                                                         <input type="radio" value="0" name="optClassMul" checked="" onclick="fillOptClassNameMul('Economy')">
//                                                         <span class="chk_flt"></span>
//                                                     </label>
//                                                     <label class="cont_flt">
//                                                         Prem.Economy
//                                                         <input type="radio" value="4" name="optClassMul" onclick="fillOptClassNameMul('Prem.Economy')">
//                                                         <span class="chk_flt"></span>
//                                                     </label>
//                                                     <label class="cont_flt">
//                                                         Business
//                                                         <input type="radio" value="2" name="optClassMul" onclick="fillOptClassNameMul('Business')">
//                                                         <span class="chk_flt"></span>
//                                                     </label>
//                                                     <label class="cont_flt optFrst" style="display: none;">
//                                                         First
//                                                         <input type="radio" value="1" name="optClassMul" onclick="fillOptClassNameMul('First')">
//                                                         <span class="chk_flt"></span>
//                                                     </label>
//  <div class="clr"></div>

//     <a onclick="myFunction5()" class="dn_btn">Done</a>
//     </div>
//   </div>
// </div>
// </div>
// <div class="s_col_v4" id="search"><input name="" value="Search" style="-webkit-appearance: none;" type="button" class="src_btn" onclick="ValidateMuticity();"></div>
// <div class="clr"></div>
// </div>
// <!--Multicity end-->
// <div id="sector-sec2">
// <div class="s_col_1m mgr20">
// <input id="FromSector-mul2" type="text" class="input_city hide-txtbox  mul-ti ac_input" placeholder="Type Departure City" autocomplete="off" onclick="MulticityClearText('FromMulti2', this.id);">
//                       <input id="FromSector-mul2_show" onkeydown="TocontrolTabClickFrom(event)" type="text" onchange="ChangeCabin();" class="input_city autoFlll mul-ti ac_input ui-autocomplete-input" placeholder="Type Departure City" autocomplete="off" onclick="MulticityClearText('FromMulti2', this.id,'');">
// 					  <span id="FromSector-mul2Span" class="spnair"></span>
//                       <div class="drop-new">
//                         <div id="ulfrom">
//                           <div class="aut-bx-m_not_use bx1" id="FromMulti2" style="display: none;"> </div>
//                         </div>
//                         <div class="clr"></div>
//                         <!--drop down end--> 
//                       </div>
// </div>   
// <div class="s_col_1m mgr20">
// <input id="ToSector-mul2" type="text" class="hide-txtbox input_city mul-ti ac_input" onclick="MulticityClearText('ToMulti2', this.id);" onchange="ChangeCabin();" placeholder="Type Destination City" autocomplete="off" onkeydown="TocontrolTabClickTo(event)">
//                       <input id="ToSector-mul2_show" type="text" class="autoFlll input_city mul-ti ac_input ui-autocomplete-input" onclick="MulticityClearText('ToMulti2', this.id);" onchange="ChangeCabin();" placeholder="Type Destination City" autocomplete="off" onkeydown="TocontrolTabClickTo(event)">
// 					      <span id="ToSector-mul2Span" class="spnair"></span>
//                       <div class="drop-new">
//                         <div id="ulfrom">
//                           <div class="aut-bx-m_not_use bx1" id="ToMulti2" style="display: none;"> </div>
//                         </div>
//                         <div class="clr"></div>
//                         <!--drop down end--> 
//                       </div>
//                       <div class="clr"></div>
// </div>
// <div class="s_col_2 mgr10 ccp">
// <div id="dvfarecal" onclick="getTextboxName('ddate')">
//                               <input name="" autocomplete="off" type="text" class="input_cld hasDatepicker" id="ddateMul2" placeholder="Choose Date" readonly="">
//                             </div>
//                             <div id="dvcalendar" style="display: none"></div>
// <div class="clr"></div>
// </div>
// <a class="close" id="crs2" style="display:none;" onclick="CloseSectore('sector-sec2','')">×</a>  
// </div>
// <div id="sector-sec3" style="display: none">
// <div class="s_col_1m mgr20">
// <input id="FromSector-mul3" onkeydown="TocontrolTabClickFrom(event)" onclick="MulticityClearText('FromMulti3', this.id);" type="text" onchange="ChangeCabin();" class="hide-txtbox input_city mul-ti ac_input" placeholder="Type Departure City" autocomplete="off">
//                       <input id="FromSector-mul3_show" onkeydown="TocontrolTabClickFrom(event)" onclick="MulticityClearText('FromMulti3', this.id,'');" type="text" onchange="ChangeCabin();" class="autoFlll input_city mul-ti ac_input ui-autocomplete-input" placeholder="Type Departure City" autocomplete="off">
// 					  <span id="FromSector-mul3Span" class="spnair"></span>
//                       <div class="drop-new">
//                         <div id="ulfrom">
//                           <div class="aut-bx-m_not_use bx1" id="FromMulti3" style="display: none;"> </div>
//                         </div>
//                         <div class="clr"></div>
//                         <!--drop down end--> 
//                       </div>
//                       <!--NEW DIV AUTOFILL FROM start-->
//                       <div class="bx-r fromAnc" id="FromAutoFillM3" style="display: none;">
//                         <div class="bx1">
//                           <div class="clr"></div>
//                           <div class="rcnt" id="FromDivFillM3"></div>
//                         </div>
//                         <div class="clr"></div>
//                       </div>
//                       <div class="clr"></div>
//                       <!--END --> 
// </div>   
// <div class="s_col_1m mgr20">
//  <input id="ToSector-mul3" type="text" onclick="MulticityClearText('ToMulti3', this.id);" class="hide-txtbox input_city mul-ti ac_input" onchange="ChangeCabin();" placeholder="Type Destination City" autocomplete="off" onkeydown="TocontrolTabClickTo(event)">
//                       <input id="ToSector-mul3_show" type="text" onclick="MulticityClearText('ToMulti3', this.id,'');" class="autoFlll input_city mul-ti ac_input ui-autocomplete-input" onchange="ChangeCabin();" placeholder="Type Destination City" autocomplete="off" onkeydown="TocontrolTabClickTo(event)">
// 					  <span id="ToSector-mul3Span" class="spnair"></span>
//                       <div class="drop-new">
//                         <div id="ulfrom">
//                           <div class="aut-bx-m_not_use bx1" id="ToMulti3" style="display: none;"> </div>
//                         </div>
//                         <div class="clr"></div>
//                         <!--drop down end--> 
//                       </div>
//                       <div class="clr"></div>
// </div>
// <div class="s_col_2 mgr10 ccp">
// <div id="dvfarecal" onclick="getTextboxName('ddate')">
//                               <input name="" autocomplete="off" type="text" class="input_cld hasDatepicker" id="ddateMul3" placeholder="Choose Date" readonly="">
//                             </div>
//                             <div id="dvcalendar" style="display: none"></div>
// </div>
// <a class="close" id="crs3" style="display:none;" onclick="CloseSectore('sector-sec3','')">×</a>
// <div class="clr"></div>
// </div>
// <div id="sector-sec4" style="display: none">
// <div class="s_col_1m mgr20">
// <input id="FromSector-mul4" onkeydown="TocontrolTabClickFrom(event)" type="text" onclick="MulticityClearText('FromMulti4', this.id);" onchange="ChangeCabin();" class="hide-txtbox input_city mul-ti ac_input" placeholder="Type Departure City" autocomplete="off">
//                       <input id="FromSector-mul4_show" onkeydown="TocontrolTabClickFrom(event)" type="text" onclick="MulticityClearText('FromMulti4', this.id,'');" onchange="ChangeCabin();" class="autoFlll input_city mul-ti ac_input ui-autocomplete-input" placeholder="Type Departure City" autocomplete="off">
// 					  <span id="FromSector-mul4Span" class="spnair"></span>
//                       <div class="drop-new">
//                         <div id="ulfrom">
//                           <div class="aut-bx-m_not_use bx1" id="FromMulti4" style="display: none;"> </div>
//                         </div>
//                         <div class="clr"></div>
//                         <!--drop down end--> 
//                       </div>

// </div>   
// <div class="s_col_1m mgr20">
// <input id="ToSector-mul4" type="text" class="hide-txtbox input_city mul-ti ac_input" onchange="ChangeCabin();" placeholder="Type Destination City" autocomplete="off" onkeydown="TocontrolTabClickTo(event)" onclick="MulticityClearText('ToMulti4', this.id);">
//                       <input id="ToSector-mul4_show" type="text" class="autoFlll input_city mul-ti ac_input ui-autocomplete-input" onchange="ChangeCabin();" placeholder="Type Destination City" autocomplete="off" onkeydown="TocontrolTabClickTo(event)" onclick="MulticityClearText('ToMulti4', this.id,'');">
// 					   <span id="ToSector-mul4Span" class="spnair"></span>
//                       <div class="drop-new">
//                         <div id="ulfrom">
//                           <div class="aut-bx-m_not_use bx1" id="ToMulti4" style="display: none;"> </div>
//                         </div>
//                         <div class="clr"></div>
//                         <!--drop down end--> 
//                       </div>
//                       <div class="clr"></div>
// </div>
// <div class="s_col_2 mgr10 ccp">
//  <div id="dvfarecal" onclick="getTextboxName('ddate')">
//                               <input name="" autocomplete="off" type="text" class="input_cld hasDatepicker" id="ddateMul4" placeholder="Choose Date" readonly="">
//                             </div>
// <div id="dvcalendar" style="display: none"></div>
// </div>
// <a class="close" id="crs4" onclick="CloseSectore('sector-sec4',3)">×</a>
// <div class="clr"></div>
// </div>
// <div id="sector-sec5" style="display: none">
// <div class="s_col_1m mgr20">
// <input id="FromSector-mul5" onkeydown="TocontrolTabClickFrom(event)" type="text" onchange="ChangeCabin();" class="hide-txtbox input_city mul-ti ac_input" placeholder="Type Departure City" onclick="MulticityClearText('FromMulti5', this.id);" autocomplete="off">
//                       <input id="FromSector-mul5_show" onkeydown="TocontrolTabClickFrom(event)" type="text" onchange="ChangeCabin();" class="autoFlll input_city mul-ti ac_input ui-autocomplete-input" placeholder="Type Departure City" onclick="MulticityClearText('FromMulti5', this.id,'');" autocomplete="off">
// 					  <span id="FromSector-mul5Span" class="spnair"></span>
//                       <div class="drop-new">
//                         <div id="ulfrom">
//                           <div class="aut-bx-m_not_use bx1" id="FromMulti5" style="display: none;"> </div>
//                         </div>
//                         <div class="clr"></div>
//                       </div>
// </div>
// <div class="s_col_1m mgr20">
// <input id="ToSector-mul5" type="text" class="hide-txtbox input_city mul-ti ac_input" onchange="ChangeCabin();" onclick="    MulticityClearText('ToMulti5', this.id);" placeholder="Type Destination City" autocomplete="off" onkeydown="TocontrolTabClickTo(event)">
//                       <input id="ToSector-mul5_show" type="text" class="autoFlll input_city mul-ti ac_input ui-autocomplete-input" onchange="    ChangeCabin();" onclick="    MulticityClearText('ToMulti5', this.id,'');" placeholder="Type Destination City" autocomplete="off" onkeydown="TocontrolTabClickTo(event)">
// 					   <span id="ToSector-mul5Span" class="spnair"></span>
//                       <div class="drop-new">
//                         <div id="ulfrom">
//                           <div class="aut-bx-m_not_use bx1" id="ToMulti5" style="display: none;"> </div>
//                         </div>
//                         <div class="clr"></div>
//                       </div>
//                       <div class="clr"></div>
// </div>
// <div class="s_col_2 mgr10 ccp">
// <div id="dvfarecal" onclick="getTextboxName('ddate')">
//                               <input name="" autocomplete="off" type="text" class="input_cld hasDatepicker" id="ddateMul5" placeholder="Choose Date" readonly="">
//                             </div>
//                             <div id="dvcalendar" style="display: none"></div>
// </div>
// <a class="close" id="crs5" onclick="CloseSectore('sector-sec5',4)">×</a>
// </div>
// <div id="sector-sec6" style="display: none">
// <div class="s_col_1m mgr20">
// <input id="FromSector-mul6" onkeydown="TocontrolTabClickFrom(event)" type="text" onchange="ChangeCabin();" class="hide-txtbox input_city mul-ti ac_input" placeholder="Type Departure City" autocomplete="off" onclick="MulticityClearText('FromMulti6', this.id);">
//                       <input id="FromSector-mul6_show" onkeydown="TocontrolTabClickFrom(event)" type="text" onchange="ChangeCabin();" class="autoFlll input_city mul-ti ac_input ui-autocomplete-input" placeholder="Type Departure City" autocomplete="off" onclick="MulticityClearText('FromMulti6', this.id,'');">
// 					    <span id="FromSector-mul6Span" class="spnair"></span>
//                       <div class="drop-new">
//                         <div id="ulfrom">
//                           <div class="aut-bx-m_not_use bx1" id="FromMulti6" style="display: none;"> </div>
//                         </div>
//                         <div class="clr"></div>
//                       </div>
// </div>
// <div class="s_col_1m mgr20">
// <input id="ToSector-mul6" type="text" class="hide-txtbox input_city mul-ti ac_input" onclick="MulticityClearText('ToMulti6', this.id);" onchange="ChangeCabin();" placeholder="Type Destination City" autocomplete="off" onkeydown="TocontrolTabClickTo(event)">
//                       <input id="ToSector-mul6_show" type="text" class="autoFlll input_city mul-ti ac_input ui-autocomplete-input" onclick="MulticityClearText('ToMulti6', this.id,'');" onchange="ChangeCabin();" placeholder="Type Destination City" autocomplete="off" onkeydown="TocontrolTabClickTo(event)">
// 					    <span id="ToSector-mul6Span" class="spnair"></span>
//                       <div class="drop-new">
//                         <div id="ulfrom">
//                           <div class="aut-bx-m_not_use bx1" id="ToMulti6" style="display: none;"> </div>
//                         </div>
//                         <div class="clr"></div>
//                       </div>
// </div>
// <div class="s_col_2 mgr10 ccp">
// <div id="dvfarecal" onclick="getTextboxName('ddate')">
//                               <input name="" autocomplete="off" type="text" class="input_cld hasDatepicker" id="ddateMul6" placeholder="Choose Date" readonly="">
//                             </div>
//                             <div id="dvcalendar" style="display: none"></div>
// </div>
// <a class="close" id="crs6" onclick="CloseSectore('sector-sec6',5)">×</a>
// </div>
// <div class="add" id="addAnFlt"><a class="add_city ad">Add City</a></div>
// <div class="clr"></div>

// </div>
// </div>
// <nav class="recent_sr recent_sr5" id="divFamilyFare">
//   <ul>

//     <li style="display:none;">
//     <label class="container">Multicity Route
//   <input onclick="chekMulBox(this)" type="checkbox" id="mulChkFlag">
//   <span class="checkmark"></span>
// </label>   
//     </li>
// 	  <li style="display:none;">
//     <label class="container">Defence Forces
//   <input type="checkbox">
//   <span class="checkmark"></span>
// </label>   
//     </li>

// <li style="display:block">
// <label class="container"> Defence Forces
// <input name="FF" id="chkArmy" type="checkbox" value="" onclick="CheckFareType(this)"><span class="checkmark"></span> </label>
// </li>
// <li style="display:block">
// <label class="container"> Students
// <input name="FF" id="chkStudent" type="checkbox" onclick="CheckFareType(this)" value="EMTSTUDENT"><span class="checkmark"></span> </label>
// </li>
// <li style="display:block">
// <label class="container"> Senior Citizens
// <input name="FF" id="chkSeniorCitizen" type="checkbox" onclick="CheckFareType(this)" value="EMTSENIOR"><span class="checkmark"></span> </label>
// </li>
// <li style="display:block">
// <label class="container"> Doctors &amp; Nurses
// <input name="FF" id="chkDoctors" type="checkbox" onclick="CheckFareType(this)" value="EMTDOCTOR"><span class="checkmark"></span> </label>
// </li>
// <li style="display:block">
// <label class="container">Train Waitlisted
// <input name="FF" id="chkTrainWaitListed" type="checkbox" onclick="CheckFareType(this)" value=""><span class="checkmark"></span> </label>
// </li>
// <li style="display:none;">
// <label class="container mflex">Vaccinated Fares
// <div class="tooltip_v5"><img src="https://www.easemytrip.com/images/common/info-icon-home.svg" alt="Info" width="15" class="infospcr">
// <span class="tooltiptext_v5">Fare is applicable for double-vaccinated customers only.</span>
// </div>
// <input name="FF" id="chkVaccinated" type="checkbox" onclick="" value=""><span class="checkmark"></span> </label>
// </li>
// <li style="display:none">
// <label class="container">Govt Officials
// <input name="FF" id="" type="checkbox" onclick="" value=""><span class="checkmark"></span> </label>
// </li>

	
//   </ul>
// </nav>
// <a href="https://www.easemytrip.com/web-checkin.html" target="_new" class="webchksc"><img src="https://www.easemytrip.com/images/flight-img/web-checkin-icon-v1.svg" class="webchkimg">Web Check-In</a>
// <div class="clr"></div>

// <div style="display:none;"> 
// <a class="r_srch" id="recentSearchtxt" style="display: block;">Recent Search<img src="https://www.easemytrip.com/images/flight-img/down_arw.png" id="rotateArw" class="darw" alt="Arrow"></a></div>
// </div>


