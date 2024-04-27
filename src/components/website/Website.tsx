import React, { useState } from 'react'
import style from "./Website.module.scss"

const Website = () => {
    const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
    const handleSelectClick = () => {
        setIsSelectOpen(true);
      };
      const handleSelectBlur = () => {
        setIsSelectOpen(false);
      };
  return (
    <div className={`${style.websiteContainer}`}>
    <label className={`${style.label}`}>Web Siteniz (Varsa)</label>
    <div
      className={`${style.selectWrapper}`}
      onClick={handleSelectClick}
      onBlur={handleSelectBlur}
    >
      <input type="text" />
    </div>
  </div>
  )
}

export default Website