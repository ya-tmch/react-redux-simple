import React from 'react';
import {connect} from "react-redux";

const Error = ({message}) => <div>{message}</div>

const mapStateToProps = (state) => ({
    message: state.error.message
})

export default connect(mapStateToProps, null)(Error)
