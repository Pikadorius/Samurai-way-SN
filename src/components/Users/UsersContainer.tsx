import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";


const UsersContainer = connect()(Users);

export default UsersContainer;