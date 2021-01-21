import { Button, Tooltip, Typography } from "@material-ui/core";
import React from "react";
import UploadSmallIcon from "../../../../assets/icons/upload-icon.svg";
import CodeIcon from "../../../../assets/icons/code-icon.svg";
import PropTypes from "prop-types";
import "./Instruction.scss";
import ReplayIcon from "@material-ui/icons/Replay";

function Instruction({
  handleSubmit,
  uploadFileUrl,
  uploadSuccess,
  ocrLoading,
}) {
  return (
    <div className='homepage-main-steps'>
      <div className='homepage-main-steps-tree'>
        <Typography variant='h4' className='homepage-main-steps-tree__title'>
          Extract code in 2 simple steps!
        </Typography>

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
      {!ocrLoading && (
        <div className='homepage-main-steps-button-container'>
          <Button
            variant='contained'
            color='primary'
            className='homepage-main-steps-button-container__button'
            disableElevation
            onClick={() => handleSubmit(uploadFileUrl)}
            disabled={!uploadSuccess}>
            Generate Code
          </Button>{" "}
          <Tooltip title='Reset' aria-label='reset'>
            <ReplayIcon
              className='homepage-main-steps-button-container__reload'
              onClick={() => window.location.reload()}
            />
          </Tooltip>
        </div>
      )}
      {ocrLoading && (
        <Typography variant='h6' className='animated-dots'>
          Generating Codepen
        </Typography>
      )}
    </div>
  );
}

Instruction.propType = {
  handleSubmit: PropTypes.func.isRequired,
  uploadFileUrl: PropTypes.string.isRequired,
  uploadSuccess: PropTypes.bool.isRequired,
  ocrLoading: PropTypes.bool.isRequired,
};

export default Instruction;
