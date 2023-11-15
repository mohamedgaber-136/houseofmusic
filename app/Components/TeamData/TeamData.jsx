import React from "react";

export const TeamData = ({ mainStyles }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className={`${mainStyles.teamDataParent} row  p-0 m-0 `}>
        <div className="col-3  gap-2 d-flex justify-content-start align-items-center">
          <div className=" d-flex flex-column ">
            <span className="text-white fw-bold fs-5">P</span>
            <span className="text-white fw-bold fs-5">R</span>
            <span className="text-white fw-bold fs-5">O</span>
            <span className="text-white fw-bold fs-5">D</span>
            <span className="text-white fw-bold fs-5">U</span>
            <span className="text-white fw-bold fs-5">C</span>
            <span className="text-white fw-bold fs-5">T</span>
            <span className="text-white fw-bold fs-5">I</span>
            <span className="text-white fw-bold fs-5">V</span>
            <span className="text-white fw-bold fs-5">E</span>
          </div>
          <div className=" d-flex flex-column">
            <span className="text-white fw-bold fs-5">T</span>
            <span className="text-white fw-bold fs-5">E</span>
            <span className="text-white fw-bold fs-5">A</span>
            <span className="text-white fw-bold fs-5">M</span>
          </div>
        </div>
        <div className="col-9  flex-column d-flex p-0 m-0">
          <div className="topData d-flex gap-2        w-100 h-50">
            <div className=" w-25 d-flex flex-column p-2">
              <h5 className="text-white">Team</h5>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
            </div>
            <div className=" w-25  d-flex flex-column p-2">
              {" "}
              <h5 className="text-white">Team</h5>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
            </div>
            <div className=" w-25  d-flex flex-column p-2">
              {" "}
              <h5 className="text-white">Team</h5>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
            </div>
            <div className=" w-25  d-flex flex-column p-2">
              {" "}
              <h5 className="text-white">Team</h5>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
            </div>
          </div>
          <div className="topData d-flex gap-2   w-100 h-50">
            <div className=" w-25 d-flex flex-column p-2">
              <h5 className="text-white">Team</h5>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
            </div>
            <div className=" w-25  d-flex flex-column p-2">
              {" "}
              <h5 className="text-white">Team</h5>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
            </div>
            <div className=" w-25  d-flex flex-column p-2">
              {" "}
              <h5 className="text-white">Team</h5>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
            </div>
            <div className=" w-25  d-flex flex-column p-2">
              {" "}
              <h5 className="text-white">Team</h5>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
              <h6 className={`${mainStyles.h6Text}`}>imagine Dragons</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
