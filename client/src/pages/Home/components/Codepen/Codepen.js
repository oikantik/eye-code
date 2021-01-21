import React from "react";
import PropTypes from "prop-types";
import "./Codepen.scss";
import { Typography } from "@material-ui/core";

function Codepen({ ocrText }) {
  return (
    <div className='codepen-container'>
      <Typography variant='h5' className='codepen-container__title'>
        Your codepen is ready! Give it a second to load!
      </Typography>

      <div
        className='codepen'
        data-prefill={JSON.stringify({
          tags: [],
          scripts: [],
          stylesheets: ["https://unpkg.com/normalize.css@8.0.1/normalize.css"],
        })}
        data-height='600'
        data-default-tab='js,result'>
        <pre data-lang='html'>
          {`<div className='module'><h3>Hey there</h3><p>This is just some placeholder html</p>`}
        </pre>
        <pre data-lang='css'>{`body {padding: 1rem;}`}</pre>
        <pre data-lang='js'>{ocrText}</pre>
      </div>
    </div>
  );
}

Codepen.propTypes = {
  ocrText: PropTypes.string.isRequired,
};

export default Codepen;
