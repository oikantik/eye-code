import React from "react";
import PropTypes from "prop-types";
import "./Preview.scss";

function Preview({ uploadFileUrl }) {
  return (
    <div className='homepage-main-dropzone'>
      <img
        src={uploadFileUrl}
        alt='upload'
        className='homepage-main-dropzone__uploaded-image'
      />
    </div>
  );
}

Preview.propType = {
  uploadFileUrl: PropTypes.string.isRequired,
};

export default Preview;
