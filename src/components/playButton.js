import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

function PlayButton(props) {
  return (
    <div style={{ margin: 10 }}>
      {props.loading === 1 ? (
        <CircularProgress />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.toggleButtonState()}
        >
          Play
        </Button>
      )}
      <p>{props.message}</p>
    </div>
  );
}

PlayButton.defaultProps = {
    loading: 1,
    message: ''
};

PlayButton.propTypes = {
  loading: PropTypes.number,
  toggleButtonState: PropTypes.func,
  message: PropTypes.string
};

export default PlayButton;
