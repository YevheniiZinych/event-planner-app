import minTwoDigits from "../../helpers/minTwoDigits";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Time } from "../AddEventForm/AddEventForm.mui.style";

export const GetTime = ({ event, setTime }) => {
  let time;

  const getTime = (e) => {
    const time = new Date(e);
    const hours = minTwoDigits(time.getHours());
    const minutes = minTwoDigits(time.getMinutes());

    let partOfDay;

    if (hours >= 12 && hours <= 23) {
      partOfDay = "pm";
    } else {
      partOfDay = "am";
    }

    const newTime = hours + ":" + minutes + " " + partOfDay;

    setTime(newTime);
  };

  return (
    <DemoContainer components={["DesktopTimePicker"]}>
      <Time value={event ? event.time : time} onChange={getTime} />
    </DemoContainer>
  );
};
