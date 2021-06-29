import Styles from "./MeetupDetails.module.css";
import React from "react";
import { Fragment } from "react-is";
const MeetupDetails = (props) => {
  return (
    <section className={Styles.details}>
      <img src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};
export default MeetupDetails;
