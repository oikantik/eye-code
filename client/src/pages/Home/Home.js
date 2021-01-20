import { Button, Typography } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import "./Home.scss";
import CloudUploadOutlinedIcon from "../../assets/icons/upload.svg";
import UploadSmallIcon from "../../assets/icons/upload-icon.svg";
import CodeIcon from "../../assets/icons/code-icon.svg";

function Home({
  handleUpload,
  handleSubmit,
  uploadLoading,
  uploadSuccess,
  ocrLoading,
  uploadFileUrl,
  ocrSuccess,
  ocrText,
}) {
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

  useEffect(() => {
    console.log("I fire?");
    const script = document.createElement("script");
    script.src = "https://static.codepen.io/assets/embed/ei.js";
    script.async = true;

    if (ocrSuccess) {
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [ocrSuccess]);
  return (
    <div className='homepage'>
      <div className='homepage-main'>
        {!ocrSuccess && uploadSuccess && (
          <div className='homepage-main-dropzone'>
            <img
              src={uploadFileUrl}
              alt='upload'
              className='homepage-main-dropzone__uploaded-image'
            />
          </div>
        )}
        {!ocrSuccess && !uploadSuccess && (
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
            <Typography
              variant='body2'
              className='homepage-main-dropzone__text'>
              Files Supported: JPG, JPEG, PNG
            </Typography>
            <Button
              variant='contained'
              color='primary'
              disableElevation
              className='homepage-main-dropzone__button'>
              Choose File
            </Button>
            <Typography
              variant='body2'
              className='homepage-main-dropzone__text'>
              Maximum size: 1MB
            </Typography>
          </div>
        )}
        {!ocrSuccess && (
          <div className='homepage-main-steps'>
            <div className='homepage-main-steps-tree'>
              <Typography
                variant='h4'
                className='homepage-main-steps-tree__title'>
                Extract code in 2 simple steps!
              </Typography>
              {/*<Typography
              variant='body1'
              className='homepage-main-steps-tree__description'>
              While doing whiteboarding challenge, or just brainstorming, you
              might have thought of running your code to see if what you wrote
              actually works. But writing in a code editor what you already
              wrote by hand is redundant and developers DRY!
            </Typography>*/}

              {/*<Typography
              variant='body1'
              className='homepage-main-steps-tree__description'>
              So we have created this app. As soon as you upload the photo,
              google vision API gets the photo, reads it and then we pass it to
              codepen so you can edit and run the code. In future we will add
              more language support, but for now, we only support javascript.
            </Typography> */}
              <ul className='homepage-main-steps-tree__list-items'>
                <li className='homepage-main-steps-tree__list-item'>
                  <span className='homepage-main-steps-tree__list-item-icon'>
                    <img
                      src={UploadSmallIcon}
                      alt='upload'
                      className='homepage-main-steps-tree__list-item-icon-image'
                    />
                  </span>{" "}
                  <Typography variant='body1'>Upload photo</Typography>
                </li>
                <li className='homepage-main-steps-tree__list-item'>
                  <span className='homepage-main-steps-tree__list-item-icon'>
                    <img
                      src={CodeIcon}
                      alt='code'
                      className='homepage-main-steps-tree__list-item-icon-image'
                    />
                  </span>
                  <Typography variant='body1'>
                    Extract code from photo by hitting the button below
                  </Typography>
                </li>
              </ul>
            </div>
            <Button
              variant='contained'
              color='primary'
              className='homepage-main-steps-button'
              disableElevation
              onClick={() => handleSubmit(uploadFileUrl)}>
              Generate Code
            </Button>
          </div>
        )}
        {ocrSuccess && (
          <div
            className='codepen'
            data-prefill={JSON.stringify({
              tags: [],
              scripts: [],
              stylesheets: [
                "https://unpkg.com/normalize.css@8.0.1/normalize.css",
              ],
            })}
            data-height='400'
            data-default-tab='js,result'>
            <pre data-lang='html'>
              {`<div className='module'><h3>Module Title</h3><p>This little piggy went to market.</p>`}
            </pre>
            <pre data-lang='css'>{`body {padding: 1rem;}`}</pre>
            <pre data-lang='js'>{ocrText}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

Home.propType = {
  handleSubmit: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
  uploadLoading: PropTypes.bool.isRequired,
  uploadSuccess: PropTypes.bool.isRequired,
  ocrLoading: PropTypes.bool.isRequired,
  ocrSuccess: PropTypes.bool.isRequired,
  ocrText: PropTypes.string.isRequired,
  uploadFileUrl: PropTypes.string.isRequired,
};

export default Home;
