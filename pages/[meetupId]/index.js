import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";
const meetUpDetail = (props) => {
  return (
    <MeetupDetails
      img={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/04/Bara-Imambara.jpg",
        title: "A New Meetup",
        address: "Lucknow",
        description: "This is a new meetup",
      },
    },
  };
}
export default meetUpDetail;
