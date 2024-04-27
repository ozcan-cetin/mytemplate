import React, { useState } from 'react';
import style from './District.module.scss';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { districts } from '../../constant/district';

const District: React.FC = () => {
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
    <div className={`${style.districtContainer} d-flex`}>
      <label className={`${style.label}`}>
        Yaşadığınız İlçe<span className={`${style.required}`}>*</span>
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
          {districts.map((district) => (
            <option className={`${style.option}`} key={district} value={district}>
              {district}
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

export default District;
