import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/04/Bara-Imambara.jpg",
    address: "Bada Imaambada,Lucknow",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/04/Bara-Imambara.jpg",
    address: "Bada Imaambada,Lucknow",
    description: "This is a second meetup",
  },
];
const index = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};
export default index;
