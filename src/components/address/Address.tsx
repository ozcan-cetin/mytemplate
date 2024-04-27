import React, { useState } from 'react'
import style from "./Address.module.scss"

const Address = () => {
    const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
    const handleSelectClick = () => {
        setIsSelectOpen(true);
      };
      const handleSelectBlur = () => {
        setIsSelectOpen(false);
      };
  return (
    <div className={`${style.addressContainer}`}>
            <label className={`${style.label}`}>Açık Adres</label>
            <div
              className={`${style.selectWrapper}`}
              onClick={handleSelectClick}
              onBlur={handleSelectBlur}
            >
              <textarea></textarea>
            </div>
          </div>
  )
}

export default Address