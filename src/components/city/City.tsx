import React, { useState } from 'react';
import style from './City.module.scss';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { cities } from '../../constant/cities';

const City = () => {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const handleSelectClick = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleSelectBlur = () => {
    setIsSelectOpen(false);
  };

  return (
    <div className={`${style.cityContainer} d-flex`}>
      <label className={`${style.label}`}>
        Yaşadığınız Şehir<span className={`${style.required}`}>*</span>
      </label>
      <div
        className={`${style.selectWrapper}`}
        onClick={handleSelectClick}
        onBlur={handleSelectBlur}
      >
        <select
          id="citySelect"
          className="p-2"
          value={selectedCity}
          onChange={handleCityChange}
        >
          {cities.map((city) => (
            <option className={`${style.option}`} key={city} value={city}>
              {city}
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

export default City;
