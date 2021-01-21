import { Button, Typography } from "@material-ui/core";
import React, { Fragment, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadOutlinedIcon from "../../../../assets/icons/upload.svg";
import PropTypes from "prop-types";
import "./Upload.scss";

function Upload({ handleUpload, ocrSuccess, uploadLoading }) {
  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length === 0) handleUpload(acceptedFiles);
      if (rejectedFiles.length > 0) console.log("File too large or is invalid");
    },
    [handleUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    maxSize: 1000000,
    accept: "image/jpeg, image/jpg, image/png",
    onDrop,
  });

  return (
    <Fragment>
      {uploadLoading ? (
        <div className='homepage-main-dropzone'>
          <Typography variant='h6' className='animated-dots'>
            Uploading
          </Typography>
        </div>
      ) : (
        <div
          {...getRootProps({ className: "dropzone" })}
          className='homepage-main-dropzone'>
          <input {...getInputProps()} />
          <img
            src={CloudUploadOutlinedIcon}
            alt='upload'
            className='homepage-main-dropzone__image-icon'
          />
          <Typography variant='h6' className='homepage-main-dropzone__text'>
            Drag and Drop files here
          </Typography>
          <Typography variant='body2' className='homepage-main-dropzone__text'>
            Files Supported: JPG, JPEG, PNG
          </Typography>
          <Button
            variant='contained'
            color='primary'
            disableElevation
            className='homepage-main-dropzone__button'>
            Choose File
          </Button>
          <Typography variant='body2' className='homepage-main-dropzone__text'>
            Maximum size: 1MB
          </Typography>
        </div>
      )}
    </Fragment>
  );
}

Upload.propType = {
  handleUpload: PropTypes.func.isRequired,
  ocrSuccess: PropTypes.bool.isRequired,
  uploadLoading: PropTypes.bool.isRequired,
};

export default Upload;
