import React, { useState } from 'react'
import style from "./Email.module.scss";

const Email = () => {
    const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
    const handleSelectClick = () => {
        setIsSelectOpen(true);
      };
      const handleSelectBlur = () => {
        setIsSelectOpen(false);
      };
  return (
    <div className={`${style.emailContainer} d-flex`}>
            <label className={`${style.label}`}>
              E-Posta Adresi<span className={`${style.required}`}>*</span>
            </label>
            <div
              className={`${style.emailWrapper}`}
              onClick={handleSelectClick}
              onBlur={handleSelectBlur}
            >
              <input type="email" />
            </div>
          </div>
  )
}

export default Email