import React, { useState } from "react";
import style from "./socialmedia.module.scss";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { FaDribbble, FaLinkedinIn, FaYoutube, FaGithub, FaFacebookF,FaRegTrashAlt    } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
  const [selectedSocialMedias, setSelectedSocialMedias] = useState<string[]>(
    []
  );
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const socialMediaData = [
    { name: 'Dribbble', icon: <FaDribbble /> },
    { name: 'Instagram', icon: <GrInstagram /> },
    { name: 'Facebook', icon: <FaFacebookF /> },
    { name: 'Linkedin', icon: <FaLinkedinIn  /> },
    { name: 'Youtube', icon: <FaYoutube  /> },
    { name: 'Twitter', icon: <FaXTwitter  /> },
    { name: 'Github', icon: <FaGithub  /> },
  ];
  const handleSocialMediaChange = (event: any) => {
    const selectedMedia = event.target.value;
    setSelectedSocialMedia(selectedMedia);
    if (selectedMedia) {
      setSelectedSocialMedias((prevState) => [...prevState, selectedMedia]);
    }
  };
  const handleInputChange = (event:any, index:any) => {
    const newValue = event.target.value;
    const updatedMedias = [...selectedSocialMedias];
    updatedMedias[index] = newValue;
    setSelectedSocialMedias(updatedMedias);
  };
  const handleSelectClick = () => {
    setIsSelectOpen(true);
  };
  const handleSelectBlur = () => {
    setIsSelectOpen(false);
  };
  const handleDeleteSocialMedia = (index:any) => {
    const updatedMedias = [...selectedSocialMedias];
    updatedMedias.splice(index, 1);
    setSelectedSocialMedias(updatedMedias);
  };
  return (
    <>
      <ul className="px-0">
      {selectedSocialMedias.map((socialMedia, index) => (
        <div className="d-flex align-items-center gap-3">
          <div key={index} className={`${style.socialnputContainer} d-flex align-items-center my-3`}>
            <div className={`${style.icon}`}>{socialMediaData.find(item => item.name === socialMedia)?.icon}</div>
            <input type="text" value={socialMedia} onChange={(event) => handleInputChange(event, index)} placeholder={socialMedia} />
          </div>
            <div className={`${style.trashIcon}`} onClick={() => handleDeleteSocialMedia(index)}><FaRegTrashAlt/></div>
        </div>
        ))}
      </ul>
      <div className={`${style.socialMediaContainer} d-flex`}>
        <label className={`${style.label}`}>Sosyal Medya Hesapları</label>
        <div
          className={`${style.selectWrapper}`}
          onClick={handleSelectClick}
          onBlur={handleSelectBlur}
        >
          <select
            id="citySelect"
            className={`${style.socialSelect} p-2`}
            value={selectedSocialMedia}
            onChange={handleSocialMediaChange}
          >
            <option value="">+Yeni Sosyal Medya Ekle</option>
            {socialMediaData.map((socialMedia) => (
                <option className={`${style.option}`} key={socialMedia.name} value={socialMedia.name}>
                {socialMedia.name}
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
    </>
  );
};

export default SocialMedia;
