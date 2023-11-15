import React from 'react'

 const BackgroundImg = ({styles,mainStyles}) => {
  return (
    
    <div className="container p-lg-5 py-3 d-flex justify-content-center">
      <div className={`${mainStyles.mainbg}`}>
        <p className={`text-white display-3 p-0 m-0 ${mainStyles.bgtext}`}>Evolve</p>
      </div>
    </div>
  )
}
export default BackgroundImg;