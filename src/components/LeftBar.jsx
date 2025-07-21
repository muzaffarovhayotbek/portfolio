import React from 'react';
import photo from '../assets/photo.jpg';
import gmail from '../assets/gmail.svg';
import github from '../assets/gitHub.png';
import telegram from '../assets/telegram.svg';
import left from '../assets/leftIcon.svg';
import right from '../assets/right.svg';

function LeftBar() {
  return (
    <div className="w-[288px]  bg-black">
      <div className="flex items-center gap-[14px] mt-[8px]">
        <img src={left} alt="left" />
        <img src={right} alt="right" />
      </div>
      <h3 className="w-full pt-[14px] border-b border-[#FFFFFF40]"></h3>

      <div className="w-[287px] pl-[14px] pt-14">
        <img
          src={photo}
          alt="profile"
          width={259}
          className="w-[259px] rounded-[10px]"
        />
        <h2 className="text-[18px] text-[#FFFFFF] pt-4">Hayotbek M.</h2>
        <div className="flex items-center gap-[10px]  mt-[8px] flex-wrap">
          <button className="p-2 bg-[#FFFFFF1A] rounded-[8px] text-white">
            Web dasturchi
          </button>
          <button className="p-2 bg-[#FFFFFF1A] rounded-[8px] text-white">
            Dizayner
          </button>
        </div>

        <div className="w-full pt-[14px] border-b border-[#FFFFFF40]"></div>
        <div className="flex flex-col gap-[15px] mt-[15.5px] w-[171px]">
          <div className="flex gap-[10px]">
            <img src={gmail} alt="gmail" width={44} />
            <div className="flex flex-col">
              <h2 className="text-white text-[16px] font-[500] pb-[2px]">
                E-pochta
              </h2>
              <p className="text-[#FFFFFFB2] text-[16px]">hmuzfrov@gmail.com</p>
            </div>
          </div>

          <div className="flex gap-[10px] pt-[14px]">
            <img src={github} alt="github" width={44} />
            <div className="flex flex-col">
              <a href="https://github.com/muzaffarovhayotbek">
                <h2 className="text-white text-[16px] font-[500] pb-[2px]">
                  Github
                </h2>
              </a>
              <p className="text-[#FFFFFFB2] text-[14px] font-[400]">
                github.com/muzaffarovhayotbek
              </p>
            </div>
          </div>

          <div className="flex gap-[10px] pt-[14px]">
            <img src={telegram} alt="telegram" width={44} />
            <div className="flex flex-col">
              <a href="https://t.me/muzaffarvchch">
                <h2 className="text-white text-[16px] font-[500] pb-[2px]">
                  Telegram
                </h2>
              </a>
              <p className="text-[#FFFFFFB2] text-[14px] font-[400]">
                t.me/muzaffarvchch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
