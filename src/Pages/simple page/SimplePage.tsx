import React, { useState } from "react";
import InputMask from "react-input-mask";
import style from "./SimplePage.module.scss";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { TbArrowBackUp } from "react-icons/tb";
import SocialMedia from "../../components/social media/SocialMedia";
import Country from "../../components/country/Country";
import City from "../../components/city/City";
import District from "../../components/district/District";
import Email from "../../components/email/Email";
import Address from "../../components/address/Address";
import { telCodes } from "../../constant/countryTelCodes";
import Website from "../../components/website/Website";

const SimplePage = () => {
  const [selectedTelCode1, setSelectedTelCode1] = useState("");
  const [selectedTelNumber1, setSelectedTelNumber1] = useState("");
  const [selectedTelNumber2, setSelectedTelNumber2] = useState("");
  const [selectedTelCode2, setSelectedTelCode2] = useState("");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const handleCodeChange = (event: any) => {
    setSelectedTelCode1(event.target.value);
  };
  const handleSelectClick = () => {
    setIsSelectOpen(true);
  };
  const handleSelectBlur = () => {
    setIsSelectOpen(false);
  };
  return (
    <div className={`${style.mainContainer} container mt-3`}>
      <h5 className={`${style.title}`}>İletişim Bilgileri</h5>
      <hr />
      <div className="d-flex row">
        <div className="col-12 col-md-10 col-lg-4 mt-4 mt-lg-0 mx-auto">
          <Country/>
        </div>
        <div className="col-12 col-md-10 col-lg-4 mt-4 mt-lg-0 mx-auto">
          <City/>
        </div>
        <div className="col-12 col-md-10 col-lg-4 mt-4 mt-lg-0 mx-auto">
          <District/>
        </div>
        <div className="col-12 col-md-10 col-lg-12 mt-4 mx-auto">
          <Address/>
        </div>
        <div className="col-12 col-md-10 col-lg-6 mt-4 mx-auto mx-lg-0">
          <Email/>
        </div>

        <div className="col-12 col-md-10 col-lg-12 gap-4 mt-4 mx-auto">
          <div className="row">
          <div className="col-6 col-md-3">
            <div className={`${style.telcode1Container} d-flex`}>
              <label className={`${style.label}`}>
                Telefon Kodu<span className={`${style.required}`}>*</span>
              </label>
              <div
                className={`${style.selectWrapper}`}
                onClick={handleSelectClick}
                onBlur={handleSelectBlur}
              >
                <select
                  id="codeSelect"
                  className="p-2"
                  value={selectedTelCode1}
                  onChange={handleCodeChange}
                >
                  {telCodes.map((code) => (
                    <option
                      className={`${style.option}`}
                      key={code}
                      value={code}
                    >
                      {code}
                    </option>
                  ))}
                </select>
                {isSelectOpen ? (
                  <MdOutlineKeyboardArrowUp
                    className={`${style.customArrow}`}
                  />
                ) : (
                  <MdOutlineKeyboardArrowDown
                    className={`${style.customArrow}`}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className={`${style.telnumber1Container} d-flex`}>
              <label className={`${style.label}`}>
                Cep Telefonu<span className={`${style.required}`}>*</span>
              </label>
              <div
                className={`${style.selectWrapper}`}
                onClick={handleSelectClick}
                onBlur={handleSelectBlur}
              >
                <InputMask
                  mask="999-999-9999"
                  placeholder="(_ _ _) _ __-_ _ _ _"
                  id="phone"
                  name="phone"
                />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 mt-4 mt-md-0">
            <div className={`${style.telcode2Container} d-flex`}>
              <label className={`${style.label}`}>2.Telefon Kodu</label>
              <div
                className={`${style.selectWrapper}`}
                onClick={handleSelectClick}
                onBlur={handleSelectBlur}
              >
                <select
                  id="codeSelect2"
                  className="p-2"
                  value={selectedTelCode1}
                  onChange={handleCodeChange}
                >
                {telCodes.map((code) => (
                    <option
                      className={`${style.option}`}
                      key={code}
                      value={code}
                    >
                      {code}
                    </option>
                  ))}
                </select>
                {isSelectOpen ? (
                  <MdOutlineKeyboardArrowUp
                    className={`${style.customArrow}`}
                  />
                ) : (
                  <MdOutlineKeyboardArrowDown
                    className={`${style.customArrow}`}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 mt-4 mt-md-0">
            <div className={`${style.telnumber2Container} d-flex`}>
              <label className={`${style.label}`}>İkinci Telefon</label>
              <div
                className={`${style.selectWrapper}`}
                onClick={handleSelectClick}
                onBlur={handleSelectBlur}
              >
                <InputMask
                  mask="999-999-9999"
                  placeholder="(_ _ _) _ __-_ _ _ _"
                  id="phone"
                  name="phone"
                />
              </div>
            </div>
          </div>

          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-12 mt-4 mx-auto">
          <Website/>
        </div>
        <div className="col-12 col-md-10 col-lg-6 mt-4 mx-auto mx-lg-0">
          <SocialMedia/>
        </div>
        <div className="col-12 col-md-10 mt-4 mx-auto">
          <div className={`${style.buttonContainer} d-flex justify-content-between`}>
          <button className={`${style.backButton} d-none d-lg-block`}><span className={`${style.icon}`}><TbArrowBackUp/></span>Geri Dön</button>
          <button className={`${style.saveButton}`}>Kaydet ve Devam Et <span className={`${style.icon}`}><MdOutlineKeyboardArrowRight/></span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePage;
