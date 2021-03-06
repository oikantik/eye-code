import Home from "./Home";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { upload, ocr, heroku } from "../../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (file_url) => {
      console.log(file_url);
      dispatch(ocr(file_url));
    },
    handleUpload: (file) => {
      dispatch(upload(file));
    },
    handleHeroku: () => {
      dispatch(heroku());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    uploadLoading: state.getOcr.upload.loading,
    uploadSuccess: state.getOcr.upload.success,
    ocrLoading: state.getOcr.ocr.loading,
    ocrSuccess: state.getOcr.ocr.success,
    ocrText: state.getOcr.ocr.text,
    uploadFileUrl: state.getOcr.upload.file_url,
    herokuSuccess: state.getOcr.heroku.success,
    herokuLoading: state.getOcr.heroku.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
