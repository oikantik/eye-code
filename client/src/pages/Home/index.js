import Home from "./Home";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { upload, ocr } from "../../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (file_url) => {
      console.log(file_url);
      dispatch(ocr(file_url));
    },
    handleUpload: (file) => {
      dispatch(upload(file));
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
