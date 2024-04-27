import React, { useState } from 'react';
import style from './Country.module.scss';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { countries } from '../../constant/countries';

const Country = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleSelectClick = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleSelectBlur = () => {
    setIsSelectOpen(false);
  };

  return (
    <div className={`${style.countryContainer} d-flex`}>
      <label className={`${style.label}`}>
        Yaşadığınız Ülke<span className={`${style.required}`}>*</span>
      </label>
      <div
        className={`${style.selectWrapper}`}
        onClick={handleSelectClick}
        onBlur={handleSelectBlur}
      >
        <select
          id="citySelect"
          className="p-2"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          {countries.map((country) => (
            <option className={`${style.option}`} key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {isSelectOpen ? (
          <MdOutlineKeyboardArrowUp className={`${style.customArrow}`} />
        ) : (
          <MdOutlineKeyboardArrowDown className={`${style.customArrow}`} />
        )}
      </div>
    </div>
  );
};

export default Country;
