import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  // body {
  //   background: ${({ theme }) => theme.colors.background};

  //   img {
  //     height: auto;
  //     max-width: 100%;
  //   }
  // }
  body {
    background-color:#0a171f;   
    // background-image:linear-gradient(#0c1b26 10%,#0a171f 50%,#0c1820 80%);
  // background-image: radial-gradient(white,rgb(158 158 158 / 51%) 2px,transparent 40px), radial-gradient(white,rgb(158 158 158 / 37%) 1px,transparent 30px), radial-gradient(white,rgb(96 125 139 / 24%) 2px,transparent 40px), radial-gradient(rgb(59 42 42 / 40%),rgba(55,55,55,.1) 1px,transparent 10px);

  //   background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
  //   background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
    min-height: 100vh;
    img {
      height: auto;
      max-width: 100%;
    }
  }
  .bordbox:after {
    content: "";
    height: 100%;
    width: 100%;
    left: 0;
    position: absolute;
    top: 0;
    background: black;
    background-position: 110% 0;
    background-repeat: no-repeat;
    background-size: 50%;
    z-index: -1;
    border-radius: 32px;
    background-image: url(/images/coin_bg_01.png) !important;
}
  .bordbox {
    position: relative;
    border: 1px solid #ff000000;
    background-image: linear-gradient(326deg,#743ad5,#009ac5) !important;
    z-index: 9;
}
  .align-items-start{
    align-items: flex-start !important;
    padding-left:100px !important
  }
  nav button[aria-label="Toggle menu"]
  {
    background:none !important;
    box-shadow: 0 0 0 0px #9a6aff !important;
    padding-top:18px
  }
  button[aria-label="Close the dialog"]
  {
    box-shadow: 0 0 0 0px #982e04 !important;
    background-color:transparent !important;
  }
  button:hover
  {
    opacity: 0.65;
  }
  .bor_radius div a[variant="subtle"]:hover
  {
  background-color:#353547 !important;
  color:#fff !important;
  opacity:1 !important;
  }


  .p-5{
    padding:30px
  }
  .satus p, .satus h1 {
    color: white;
    text-align:center
}
 .satus h1 {
    font-weight:200;
    margin-bottom:30px;
    font-size:35px;
}
.stat-head {
  font-size: 50px;
  margin-bottom: 30px;
  text-align: center;
  color: white;
}

@media(min-width:1200px){
  .satus h1{
    font-size:30px;
  }
}

@media(min-width:991px){
  .satus h1{
    font-size:28px;
  }
}
@media(max-width:991px){
  .stat-head {
    font-size: 37px;
  }
}

  nav button,.btn_grad_yel
  {
    background-image: linear-gradient(169deg,#6e489d 10%,#4c1d87  54%,#4c1d87 100%);
    border-radius:26px !important;
  }

  nav button:hover,.btn_grad_yel:hover
  {
    background-image: linear-gradient(169deg,#4c1d87 10%,#6e489d 54%,#4c1d87 100%); 
    opacity:1 !important;
  }
  .btn_tra button
  {
    background:transparent !important;
  }
  .whitetext_color div,.whitetext_color
  {
    color:#eae2fc !important;
  }
  .whitetext_color svg
  {
    color:#eae2fc !important;
    fill:#eae2fc !important;
    
  }
  .tvl_text_color div
  {
    color:#139cc7 !important;

  }
  @media only screen and (min-width:576px)
  {
    
    .fox_bg
    {
      background-image: url('/images/quam/quam-logo.png');
      background-position: left 0px center;
      background-repeat:no-repeat;
      background-size:100px;
      padding:32px 0px;
    }
    
    .fox_bg_1
  {
    background-image: url('/images/quam/right.png');
      background-position: bottom 20px right 0px;
      background-repeat:no-repeat;
      background-size:300px;
  }
  }
  // a[aria-label="Medium"],  a[aria-label="Gitbook"],a[aria-label="Twitter"],a[aria-label="Telgram"]
  // {
  //   margin-right:5px !important;
  // }
  // a[aria-label="Gitbook"]
  // {
  //   margin-left:5px;
  // }
  .bor_radius a[variant="subtle"]
  {
    background-color:#663e98 !important;
  }
  .bor_radius div a:hover,.bor_radius div a:hover:not(:disabled):not(.button--disabled):not(:active),
  .bor_radius div a[variant="subtle"]:hover
  {
  background-color:#4c1d87  !important;
  opacity:1 !important;
  color:#fff !important;
  }
  .blue_font_txt, .blue_font_txt a
  {
    color:#139cc7 !important;
  }


  .banner_home_locked
{
  padding: 0px 32px 32px 32px !important;
    
    margin: auto auto 0px;
    font-weight:600;
    text-align:center !important;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    color:#fff;
}

.stake_row
{
  display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top:20px;
    grid-gap:0px !important;
}
.stake_card
{
  min-width: 280px !important;
    max-width: 31.5% !important;
    width: 100%;
    margin: 0px 8px 32px !important;
    box-shadow: rgb(25 19 38 / 10%) 0px 2px 12px -8px,rgb(25 19 38 / 5%) 0px 1px 1px;
    background-color:transparent; 
    position:relative;
  border-radius: 20px;

}
.stake_days
{
  background-color: #139cc7;
  border: 2px solid #139cc7;
  border-radius: 16px;
  color: #ffffff;
    padding:5px;
    text-align:center;
    display: inline-flex;
    align-items:center;
    font-size: 14px;
    font-weight: 400;
    height: 28px;
    line-height: 1.5;
    padding: 0 8px;
    white-space: nowrap;
}
.flec_coind_div
{
  min-width: 75%;
    display: flex;
    align-items: center;
}
.mt-top-end
{
  margin-top:20px;
}
.flex_coin.flex_btn_div
{
  display: grid;
grid-template-columns: 49% 49%;
grid-column-gap:2%;
margin-top:15px;
}
.btn_plus_minus
{
  display:flex;
  justify-content:space-between;
}
.mr-1
{
  margin-right:5px;
}
.btn_green_new
{
  background-image: linear-gradient(to bottom,#e754ff 6%, #e754ff 59%, #e754ff);
border: 1px solid #e754ff  !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:18px !important;
color:#fff !important;
font-weight:600 !important; 
width: 100%;
padding:10px;
margin-top:0px;
cursor:pointer;
font-size:16px;
}
.btn_green_new:hover
{
  background-image:linear-gradient(45deg,#9498ff 6%, #9498ff 59%, #9498ff);
border: 1px solid #9498ff  !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:18px !important;
color:#fff !important;

}
.text_coimg
{
  font-size:25px !important;
}
.btn_coming
{
  margin:20px;
  max-width:270px;
  margin-left:auto;
  margin-right:auto;
}
.my-3-px
{
  margin-top:20px;
}
.dash_color_white
{
  color:#fff;
}

.flex_coin
{
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.coin_name_title
{
  padding-left:15px;
  font-weight:600;
  font-size:20px;

}
.coin_desc
{
  text-align:left;
  margin-top:20px;
}
.coin_desc_li_one
{
  font-size:12px;
}
.coin_ul_desc
{
  text-align:left;
  padding-top:20px;
  padding-bottom:10px;
}
.coin_ul_desc li
{
  list-style-type:none;
  list-style-type: none;
    display: inline-block;
    margin: 0px 20px 10px;
    text-align: left;
}
.coin_ul_desc li .coin_name_title
{
padding-left:0px;
}
// .progres_theme>div>div
// {
//   background-color:green;
// }
.progres_theme
{
  position:relative;
}
.progress_txt
{
  position:absolute;
  top:8px;
  font-size:12px;
  color:#34c759;
  left:15px;
}
.progress_txt_right
{
  position:absolute;
  top:8px;
  font-size:12px;
  color:#083da3;
  right:15px;
}
.pro_end_time
{
  font-size:12px;
  color:#4528ba;
  text-align:left;
  margin:10px 0px;
  font-weight:600;
}
@media only screen and (max-width:575px)
{
  .fox_bg.align-items-start{
    align-items:center !important;
    padding-left:0 !important;
  }
  .coin_ul_desc li
  {
    display:block !important;
  }
}
.launc_card
{
  overflow:visible !important;
  margin-top:30px !important;

}
.card_pos
{
  position:relative;
  padding-top:10px;
}
.status_card
{
  position: absolute;
    top: -15px;
    right: 20px;
    z-index: 2;
    padding: 10px;
    border-radius: 5px 5px 15px 15px;
    color: #fff;
    font-size:12px;
    text-transform:uppercase;
}
.succ_card
{
  background-color: #34c759;
}
.blue_card
{
  background-color: #083da3;
}
.yell_card
{
  background-color: #fbbe24;

}

.fam_left_txt_sm
{
  font-size:14px;
  text-align:left;
}
.mb_end
{
  margin-bottom:20px;
}
.end_Date_blue
{
  color:#e754ff;
}
.input_grp
{
  // display: grid;
  //   grid-template-columns: 80% 20%;
  //   gap: 5px;
  display: flex;
  align-items:center;
  justify-content:center;
}
.input_grp span
{
  padding-left:5px;
  font-size:12px;
  color:#1847a0;
  padding-right:5px;
}
.input_grp{
  // background-color:#1f2b3e;
  background-color:#1e253317;
  border:1px solid #1847a0;
  border-radius:8px;
}
.input_grp input
{
  background-color:transparent !important;
  font-size:12px;
  color:#797979;

}
.input_grp input::placeholder
{
  font-size:12px;
  color:#797979;

}
.max_buy_sec
{
  display: flex;
  align-items:center;
  justify-content:center; 
}
.btn_div_grid
{
  display: grid;
  grid-template-columns: 47% 47%;
  gap: 6%;
}
.max_buy_sec .btn
{
  width:100%;
}
.btn_orange
{
  background-image: linear-gradient(to bottom,#ff531d 6%, #ff531d 59%, #ff531d);
border: 1px solid #ff531d  !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:10px !important;
color:#fff !important;
font-weight:600 !important; 
}
.btn_orange:hover
{
  background-image:linear-gradient(45deg,#fbbe24 6%, #fbbe24 59%, #fbbe24);
border: 1px solid #fbbe24  !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:10px !important;
color:#264663 !important;

}
.btn_blue
{
  background-image: linear-gradient(to bottom,#083da3 6%, #083da3 59%, #083da3);
border: 1px solid #083da3  !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:10px !important;
color:#fff !important;
font-weight:600 !important; 
}
.btn_blue:hover
{
  background-image:linear-gradient(45deg,#34c759 6%, #34c759 59%, #34c759);
border: 1px solid #34c759  !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:10px !important;
color:#264663 !important;

}
.max_buy_sec,.max_buy_sec_1
{
margin-top:20px;
}
.max_buy_sec .btn_orange 
{
  margin-right:5px;
}
.max_buy_sec .btn_yellow  
{
  margin-left:5px;
}
.max_buy_sec_1 .btn
{
  min-width:50%;
}
.max_buy_sec_1
{
  justify-content:flex-start !important;
  display:flex;
}
.btn_grey
{
  background-color:transparent !important;
  border:1px solid #ccc;
}
@media only screen and (max-width:575px)
{
  .btn_div_grid
  {
    display: grid;
    grid-template-columns: 100%;
    gap: 6%;
  }
}
.justify-content-end
{
  justify-content:flex-end;
}
.d-flex 
{
  display:flex !important;
}
.modal_card
{
  padding-left:0px !important;
  padding-right:0px !important;

}

.card-img {
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 64px;
  max-width: 64px;
  max-height: 64px;
  width: 100%;
  padding-top: 0%;
}
.bor_rad {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 12px;
}
.cal-btn button {
  height: 0;
}
.days {
    background: #2a69e2;
    color: white;
    height: 50px;
    width: 50px;
    text-align: center;
    padding-top: 10px;
    font-size: 13px;
}
.right-cont{
  display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.farm_head_row h2 {
  font-weight: 800;
  font-size: 20px !important;
  margin-bottom: 4px;
}
.fam_left_txt_sm{
  font-size: 14px;
  text-align: left;
  // color: rgb(6, 6, 6);
  font-weight: 400;
  line-height: 1.5;
}
.end_card {
  padding: 10px 20px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  font-size: 15px;
  text-transform: uppercase;
  background-color: #4ad6dc;
}
.end_Date_blue {
  color: #e754ff;
}
.unstake{
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
}
.flex.card-b {
  align-self: baseline;
  background: rgb(255, 255, 255);
  border-radius: 32px;
  box-shadow: rgb(25 19 38 / 10%) 0px 2px 12px -8px, rgb(25 19 38 / 5%) 0px 1px 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
  min-width: 280px;
  max-width: 31.5%;
  width: 100%;
  margin: 0px 8px 32px;
}
.rainbow-bg{
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
  background: linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 154, 0) 10%, rgb(208, 222, 33) 20%, rgb(79, 220, 74) 30%, rgb(63, 218, 216) 40%, rgb(47, 201, 226) 50%, rgb(28, 127, 238) 60%, rgb(95, 21, 242) 70%, rgb(186, 12, 248) 80%, rgb(251, 7, 217) 90%, rgb(255, 0, 0) 100%) 0% 0% / 300% 300%;
  animation: 2s linear 0s infinite normal none running ilqnTz;
  border-radius: 32px;
}
.flex-list{
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  line-height: 1.5;
}
.tw-800{
  font-weight: 800;
}
.txts,.earned{
  color: rgb(6, 6, 6);
  font-size: 12px;
  font-weight: 800;
  line-height: 1.5;
  text-transform: uppercase;
}
.txts{
  padding-right: 3px;
}

  .txtdisable{
    color: rgb(189, 194, 196);
  }
  .pt-16{
    padding-top: 16px;
  }
  // .hr{
  //   background-color: rgb(230, 230, 232);
  //   height: 1px;
  //   margin: 28px auto;
  //   width: 100%;
  // }
  .card-det {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 15px 5px;
}

element.style {
}
.card-d div:first-child {
  margin-bottom: 10px;
  font-size: 12px;
}
.card-d div:last-child {
  font-size: 15px;
}
.align-items-center {
  align-items: center !important;
}
.fox-bg{
  padding-left:100px !important

}
.card-det {
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 15px 10px;
  padding: 15px 10px;
}
.card-d .tw-800 {
  color: white;
}
.card-d {
  text-align: left;
}
  .disabled-btn {
    background-color: rgb(230, 230, 232);
    border-color: rgb(230, 230, 232);
    box-shadow: none;
    color: rgb(189, 194, 196);
    cursor: not-allowed;
    padding: 0px 24px;
    width: max-content;
    height: 48px;
    line-height: 1;
    outline: 0px;
    letter-spacing: 0.03em;
    border: 0px;
}
  .btn-flex{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 8px;
  }

  .flec_coind_div .btn_yellow
  {
    border-radius: 18px !important;
    padding: 10px;
    min-width: 100px;
    color:#fff !important;
    cursor:pointer;
  }
  .banner_home_locked .dash_heading_1
  {
    font-size:24px !important;
  }

  .btn_yellow
  {
    background-image: linear-gradient(169deg,#6e489d 10%,#4c1d87  54%,#4c1d87 100%);
          border-radius: 26px !important;
          border:none !important;
  }
  .btn_yellow:hover
  {
    background-image: linear-gradient(169deg,#4c1d87 10%,#6e489d 54%,#4c1d87 100%);
          opacity: 1 !important;
  }

  .fam_left_txt
  {
    color: #eae2fc;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }
  .tw-800

  {
    color: #eae2fc;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }

  .white_box
  {
    box-shadow: #139cc77a 0px 1px 10px;
  }

  .earn_txt
  {
    text-align:left !important;
  }

  .disabled_txt
  {
    text-align:left !important;
    color: #666171 !important;
    font-size:20px !important;
    margin-top:5px;
    font-weight: 600;
    line-height: 1.1;
  }
  .btn_plus_m
  {
    padding:10px 25px !important;
    border:none !important;
    color:#fff !important;
  }

  .icon_sidebar
  {
    max-width:18px;
    margin-right:8px;
  }

  .referal_txt
  {
    font-size:18px;
    font-weight:600;
    text-align:center;
    color:#fff;
    line-height:30px;
  }
  .unlock_btn
  {
    margin-top:20px;
    margin-bottom:30px;
    max-width: 165px;
    margin-left: auto;
    margin-right: auto;
  }
  .unlock_desc
  {
    color: #eae2fc !important;
    font-size:16px !important;
    text-align:center;
    line-height:30px;

  }
  .mb-3
  {
    margin-bottom:20px;
  }
  .input_ref
  {
    text-align:center;
    pointer-events: none;
  }
  .text-center
  {
    text-align:center;
  }
  .mt-4
  {
    margin-top:40px;
  }
  .flex_coin_grid
  {
    display:grid;
    grid-template-columns:30% 65%;
    gird-column-gap:5%;
    justify-content:space-between !important;
  }
  .flex_coin_grid .coin_name_title,
  .flex_coin_grid .percent_div
  {
    text-align:right;
  }
  svg {
    fill: #b79adc !important;
}
  .card_notes
  {
    background:#121212;
    color: #fff;
    box-shadow: #139cc77a 0px 1px 10px;
    border-radius: 20px;
    padding: 24px;
    margin-bottom:50px;
  }
  .btn_yellow_boost
  {
    background-image: linear-gradient(169deg,#6e489d 10%,#4c1d87  54%,#4c1d87 100%);
          border-radius: 26px !important;
          border: none !important;
          color: #FFFFFF;
    cursor: pointer;
    box-shadow: inset 0px -1px 0px rgb(14 14 44 / 40%);
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    padding: 10px 24px;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
  }
  .flex_btb_cont
  {
    display:flex;
    align-items:center;
  }
  .note_desc
  {
    line-height:1.5;
    font-weight:300 !important;
    text-align:left !important;
  }
  .pl-5
  {
    padding-left:20px;
  }

  @media only screen and (max-width:575px)
  {
    .flex_btb_cont
    {
      display:block !important;
    }
    .flex_btb_cont .btn_yellow_boost
    {
      margin-bottom:15px;
      height:48px;
    }
  }
  .without_bg_header
  {
    background:transparent !important;
  }
  .btn_yellow_boost
  {
    background-image: linear-gradient(169deg, rgb(110, 72, 157) 10%, rgb(76, 29, 135) 54%, rgb(76, 29, 135) 100%) !important;
  }
  .btn_yellow_boost:hover
  {
    background-image: linear-gradient(169deg, rgb(76, 29, 135) 10%, rgb(110, 72, 157) 54%, rgb(76, 29, 135) 100%) !important;
  }
`

export default GlobalStyle
