import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import "./Home.scss";

import Codepen from "./components/Codepen/Codepen";
import Upload from "./components/Upload/Upload";
import Instruction from "./components/Instruction/Instruction";
import Preview from "./components/Preview/Preview";
import { Backdrop, CircularProgress, Typography } from "@material-ui/core";
import Header from "./components/Header/Header";

function Home({
  handleUpload,
  handleSubmit,
  uploadLoading,
  uploadSuccess,
  ocrLoading,
  uploadFileUrl,
  ocrSuccess,
  ocrText,
  handleHeroku,
  herokuSuccess,
  herokuLoading,
}) {
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

  useEffect(() => handleHeroku(), [handleHeroku]);

  if (herokuLoading) {
    return (
      <div className='loader'>
        <CircularProgress className='loader__spinner' />
        <Typography variant='body2' className='loader__text animated-dots'>
          Waking up heroku
        </Typography>
      </div>
    );
  }

  return (
    <Fragment>
      <Backdrop open={uploadLoading || ocrLoading} className='backdrop'>
        <CircularProgress color='inherit' />
      </Backdrop>
      <div className='homepage'>
        <Header />
        <div className='homepage-main'>
          {!ocrSuccess && uploadSuccess && (
            <Preview
              uploadFileUrl={uploadFileUrl}
              uploadSuccess={uploadSuccess}
            />
          )}
          {!ocrSuccess && !uploadSuccess && (
            <Upload handleUpload={handleUpload} uploadLoading={uploadLoading} />
          )}
          {!ocrSuccess && (
            <Instruction
              handleSubmit={handleSubmit}
              uploadFileUrl={uploadFileUrl}
              uploadSuccess={uploadSuccess}
              ocrLoading={ocrLoading}
            />
          )}
          {ocrSuccess && <Codepen ocrText={ocrText} />}
        </div>
      </div>
    </Fragment>
  );
}

Home.propType = {
  handleSubmit: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
  uploadLoading: PropTypes.bool.isRequired,
  uploadSuccess: PropTypes.bool.isRequired,
  ocrLoading: PropTypes.bool.isRequired,
  ocrSuccess: PropTypes.bool.isRequired,
  herokuSuccess: PropTypes.bool.isRequired,
  herokuLoading: PropTypes.bool.isRequired,
  ocrText: PropTypes.string.isRequired,
  uploadFileUrl: PropTypes.string.isRequired,
};

export default Home;
