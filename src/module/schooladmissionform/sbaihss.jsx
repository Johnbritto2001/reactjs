import React from 'react'
import { useLocation } from 'react-router-dom';
import '../../content/sbaihss.css';
import logo from '../../images/SBAIHSS/logo.jpg'
import donbosco from '../../images/SBAIHSS/donbosco.png'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import '../../script/sbaihss.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SBAIHSS() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const firstName = queryParams.get('Name');
    const age = queryParams.get('age');
    console.log(queryParams);
    console.log("Name : " + firstName);
    console.log("Age : " + age);

    const notify = () => toast("Wow so easy!");
    return (
        <>
            <header id="masthead" className="site-header" role="banner">
                <div className="ak-container">
                    <div className="social_htext_wrap">
                        <div className="header_text">
                            <span className="text_wrap">
                                OUR MOTTO - “ TEACH US THE RIGHT WAY ”
                            </span>
                            <a
                                style={{ paddingLeft: 20, color: "#FFF" }}
                                target="_blank"
                                id="blink"
                            >
                                Apply Online Admission - 2024-2025{" "}
                            </a>
                        </div>
                        <div className="header_social_link">
                            <div className="fa_link_wrap">
                                <a>
                                    <span className="fa_wrap">
                                        <i className="fa fa-facebook" />
                                    </span>
                                    <div className="link_wrap">facebook</div>
                                </a>
                            </div>
                            <div className="fa_link_wrap">
                                <a>
                                    <span className="fa_wrap">
                                        <i className="fa fa-twitter" />
                                    </span>
                                    <div className="link_wrap">twitter</div>
                                </a>
                            </div>
                            <div className="fa_link_wrap">
                                <a>
                                    <span className="fa_wrap">
                                        <i className="fa fa-youtube" />
                                    </span>
                                    <div className="link_wrap">youtube</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="logo_info_wrap">
                        <div className="header_info_wrap">
                            <div className="phone_header wow fadeIn">
                                <div className="fa_icon">
                                    <i className="fa fa-phone" aria-hidden="true" />
                                </div>
                                <div className="title_phone">
                                    <span className="pnone_title">Call Support</span>
                                    <span className="phone">8883311469,044-24983450</span>
                                </div>
                            </div>
                            <div className="email_header wow fadeIn">
                                <div className="fa_icon">
                                    <i className="fa fa-envelope-o" aria-hidden="true" />
                                </div>
                                <div className="title_email_wrap">
                                    <span className="title_email">Email Support</span>
                                    <span className="email_address">admission@stbedeschennai.org</span>
                                </div>
                            </div>
                            <div className="location_header wow fadeIn">
                                <div className="fa_icon">
                                    <i className="fa fa-map-marker" aria-hidden="true" />
                                </div>
                                <div className="title_location_wrap">
                                    <span className="title_location">Location</span>
                                    <span className="location">Santhome,Chennai – 600 004.</span>
                                </div>
                            </div>
                        </div>
                        <div className="header-logo-container">
                            <a href="#" className="custom-logo-link" rel="home" itemProp="url">
                                <img
                                    className="custom-logo"
                                    width={661}
                                    height={703}
                                    src={logo}
                                    alt=''
                                />
                            </a>
                        </div>
                        <div className="site-branding wow fadeIn clearfix">
                            <h1 className="site-title">ST. BEDE'S ANGLO INDIAN HR. SEC. SCHOOL</h1>
                            <p
                                className="site-description"
                                style={{ fontWeight: 700, textTransform: "capitalize" }}
                            >
                                Santhome, Chennai – 600 004.
                            </p>
                        </div>
                        <div className="header-logo-container">
                            <img id="madha_logo" src={donbosco} />
                        </div>
                    </div>
                </div>
            </header>
            <form
                className="card"
                id="form" style={{
                    backgroundColor: "#cfcfcf33",
                    marginLeft: "1%",
                    marginRight: "1%",
                    border: "2px solid #fff",
                    padding: 10,
                    boxShadow: "0 0 10px rgb(0 0 0 / 50%)"
                }}
                autoComplete="off" >
                <br />
                <div>
                    <div id="newregister" >
                        <div className="form-body">
                            <h4
                                className="form-section"
                                style={{
                                    color: "#ff9d0b",
                                    paddingBottom: 10,
                                    borderBottom: "1px solid #000"
                                }}
                            >
                                Student's Personal Information
                            </h4>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="AppliedClass">
                                            <b>Class in which admission is sought </b>
                                            <span className="danger">*</span>
                                        </label>
                                        <dropdownlist
                                            className="form-control"
                                            cssclass="custom-select form-control"
                                            id="txtclass"
                                        ></dropdownlist>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="namepupil">
                                            <b>Name of the Student</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <input type='text' className="form-control"
                                            id="txtname"
                                            style={{ textTransform: "uppercase" }}
                                            cssclass="form-control"

                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="namepupil">
                                            <b>Student Name in Tamil</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>

                                        <input type='text'
                                            id="stutamilname"
                                            maxLength={35}
                                            style={{ textTransform: "uppercase" }}
                                            cssclass="form-control"
                                            className="form-control"
                                            onpaste="handlePaste(event)"
                                            onkeypress="return isAlphabeticOrSpace(event)"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="DOB">
                                            <b>Date of Birth </b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="date"
                                            name="DOB"
                                            style={{ textTransform: "uppercase" }}
                                            cssclass="form-control"
                                            id="txtdob"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="Gender">
                                            <b>Gender </b>
                                        </label>
                                        <dropdownlist
                                            className="form-control"
                                            cssclass="form-control"
                                            id="txtGender"
                                        >
                                            <listitem value={1}>Male</listitem>
                                        </dropdownlist>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="Nationality">
                                            <b>Nationality</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <dropdownlist className="form-control"
                                            cssclass="custom-select form-control"
                                            id="txtNationality"
                                        ></dropdownlist>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="namepupil">
                                            <b>Place Of Birth</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <input type='text' className="form-control"
                                            id="txtplaceofbirth"
                                            maxLength={30}
                                            style={{ textTransform: "uppercase" }}
                                            cssclass="form-control"

                                            onkeypress="return isAlphabeticOrSpace(event)"
                                            onpaste="validateAlphabetic(event)"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label >
                                            <b> Disability</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <dropdownlist
                                            id="disability" className="form-control"
                                            style={{ textTransform: "uppercase" }}
                                            cssclass="form-control"
                                            width="100%"
                                            data-toggle="tooltip"
                                            onchange="Disability()"
                                        >
                                            <listitem
                                                text="--None Selected--"
                                                value={0}
                                                selected="True"
                                            />
                                            <listitem text="Yes" value={1} />
                                            <listitem text="No" value={2} />
                                        </dropdownlist>
                                    </div>
                                </div>
                                <div className="col-md-4" id="disabilites">
                                    <div className="form-group">
                                        <label htmlFor="namepupil">
                                            <b>If Yes, Give Disability details</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <input type='text' className="form-control"
                                            id="disabilitydt"
                                            maxLength={30}
                                            style={{ textTransform: "uppercase" }}
                                            cssclass="form-control"
                                            onkeypress="return isAlphabeticOrSpace(event)"
                                            onpaste="validateAlphabetic(event)"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label >
                                            <b> Blood Group</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <dropdownlist
                                            className="form-control"
                                            id="bloodgroup"
                                            cssclass="form-control"
                                            width="100%"
                                            data-toggle="tooltip"
                                        ></dropdownlist>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="Religion">
                                            <b> Religion </b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <dropdownlist
                                            className="form-control"
                                            cssclass="custom-select form-control"
                                            id="txtReligion"
                                            autopostback="true"
                                            onselectedindexchanged="txtReligion_SelectedIndexChanged"
                                        ></dropdownlist>
                                    </div>
                                </div>
                                <div className="col-md-4" id="parishnamed" >
                                    <div className="form-group">
                                        <label htmlFor="namepupil">
                                            <b>Present Parish</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <input type='text'
                                            id="parishname"
                                            maxLength={30}
                                            className="form-control"
                                            style={{ textTransform: "uppercase" }}
                                            onkeypress="return isAlphabeticOrSpace(event)"
                                            onpaste="validateAlphabetic(event)"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4" id="baptismdated" >
                                    <div className="form-group">
                                        <label htmlFor="DOB">
                                            <b>Baptism Date</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <input
                                            type="date"
                                            name="DOB"
                                            className="form-control"
                                            id="baptismdate"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4" id="Baptismplaced" >
                                    <div className="form-group">
                                        <label htmlFor="namepupil">
                                            <b>Place of Baptism</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <input type='text'
                                            id="Baptismplace"
                                            maxLength={30}
                                            className="form-control"
                                            style={{ textTransform: "uppercase" }}
                                            onkeypress="return isAlphabeticOrSpace(event)"
                                            onpaste="validateAlphabetic(event)"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="AadharNumber">
                                            <b> Aadhaar Number </b>
                                            <span className="danger" id="aadhar">
                                                &nbsp;*
                                            </span>
                                        </label>
                                        <input type='text'
                                            className="form-control"
                                            maxLength={12}
                                            style={{ textTransform: "uppercase" }}
                                            cssclass="form-control"
                                            id="txtChildAadharNO"
                                            oninput="restrictInput(this)"
                                            onpaste="validateNumeric(event, this)"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="MotherTongue">
                                            <b> Mother Tongue </b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <dropdownlist
                                            className="form-control"
                                            cssclass="custom-select form-control"
                                            id="txtMothertongue"
                                        ></dropdownlist>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label
                                            style={{ color: "black" }}
                                            htmlFor="Community"                                        >
                                            <b> Community</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <dropdownlist
                                            className="form-control"
                                            cssclass="custom-select form-control"
                                            id="txtCommunity"
                                            name="Community"
                                        ></dropdownlist>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label
                                            style={{ color: "black" }}
                                            htmlFor="Caste"
                                        >
                                            <b> Caste</b>
                                        </label>
                                        <dropdownlist
                                            className="form-control"
                                            cssclass="custom-select form-control"
                                            id="txtCaste"
                                            name="Community"
                                        ></dropdownlist>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label

                                            htmlFor="IM1"
                                            style={{ color: "black" }}
                                        >
                                            <b> Identification Mark -1 </b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <input type='text'
                                            className="form-control"
                                            maxLength={30}
                                            style={{ textTransform: "uppercase" }}
                                            cssclass="form-control"
                                            id="txtIdentificationMark1"
                                            onkeypress="return isAlphabeticOrSpace(event)"
                                            onpaste="validateAlphabetic(event)"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label

                                            htmlFor="IM2"
                                            style={{ color: "black" }}
                                        >
                                            <b> Identification Mark -2 </b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <input type='text'
                                            className="form-control"
                                            maxLength={30}
                                            style={{ textTransform: "uppercase" }}
                                            cssclass="form-control"
                                            id="txtIdentificationMark2"
                                            onkeypress="return isAlphabeticOrSpace(event)"
                                            onpaste="validateAlphabetic(event)"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label

                                            htmlFor="IM2"
                                            style={{ color: "black" }}
                                        >
                                            <b> Ration Card </b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <input type='text'
                                            className="form-control"
                                            maxLength={20}
                                            style={{ textTransform: "uppercase" }}
                                            cssclass="form-control"
                                            id="rationcard"
                                            onkeypress="return IfAplphabeticNumeric(event)"
                                            onpaste="validateNumbersAlpahbetic(event, this)"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label

                                            htmlFor="IM2"
                                            style={{ color: "black" }}
                                        >
                                            <b> Distance to School(In KM)</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <input type='text'
                                            className="form-control"
                                            maxLength={3}
                                            style={{ textTransform: "uppercase" }}
                                            cssclass="form-control"
                                            id="distance"
                                            oninput="restrictInput(this)"
                                            onpaste="validateNumeric(event, this)"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4" id="emis" >
                                    <div className="form-group">
                                        <label

                                            htmlFor="IM2"
                                            style={{ color: "black" }}
                                        >
                                            <b> Emis No</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <input type='text'
                                            className="form-control"
                                            maxLength={10}
                                            style={{ textTransform: "uppercase" }}
                                            cssclass="form-control"
                                            id="emisno"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="DAbled">
                                            <b> Siblings are Studying in this School?</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <dropdownlist
                                            className="form-control"
                                            id="sibliings"
                                            cssclass="form-control"
                                            width="100%"
                                            data-toggle="tooltip"
                                            autopostback="true"
                                            onselectedindexchanged="sibliings_SelectedIndexChanged"
                                        >
                                            <listitem
                                                text="--None Selected--"
                                                value={0}
                                                selected="True"
                                            />
                                            <listitem text="Yes" value={1} />
                                            <listitem text="No" value={2} />
                                        </dropdownlist>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label

                                            htmlFor="IM2"
                                            style={{ color: "black" }}
                                        >
                                            <b> Landmark Near the Residence</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <input type='text'
                                            id="reslandmark"
                                            textmode="MultiLine"
                                            rows={1}
                                            className="form-control"
                                            maxLength={100}
                                            style={{ textTransform: "uppercase" }}
                                            cssclass="form-control"
                                            onkeydown="upperCaseF(this)"
                                            onpaste="validatePasteAdress(this, event)"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label

                                            htmlFor="IM2"
                                            style={{ color: "black" }}
                                        >
                                            <b> Present Address</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <input type='text'
                                            textmode="MultiLine"
                                            rows={1}
                                            className="form-control"
                                            maxLength={100}
                                            style={{ textTransform: "uppercase" }}
                                            cssclass="form-control"
                                            id="presentaddress"
                                            onkeydown="upperCaseF(this)"
                                            onpaste="validatePasteAdress(this, event)"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label

                                            htmlFor="IM2"
                                            style={{ color: "black" }}
                                        >
                                            <b> Permanent Address</b>
                                            <span className="danger">&nbsp;*</span>
                                        </label>
                                        <input type='text'
                                            textmode="MultiLine"
                                            rows={1}
                                            className="form-control"
                                            maxLength={100}
                                            style={{ textTransform: "uppercase" }}
                                            cssclass="form-control"
                                            id="permanentaddress"
                                            onkeydown="upperCaseF(this)"
                                            onpaste="validatePasteAdress(this, event)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-5" />
                            <div className="col-md-2" style={{ textAlign: "center" }}>
                                <Button variant="primary" onClick={notify}>Register</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>

    );
}