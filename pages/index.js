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
const index = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  return {
    props: { meetups: DUMMY_MEETUPS },
  };
}

// export async function getStaticProps() {
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//     revalidate: 10,
//   };
// }
export default index;
