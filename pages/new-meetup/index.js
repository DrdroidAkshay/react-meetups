import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
const NewMeetup = () => {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: { "Content-Type": "application/json" },
    });
    const responsedata = await response.json();
    console.log("hi", responsedata);
    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
