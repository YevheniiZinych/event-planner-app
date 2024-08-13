import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import minTwoDigits from "../../helpers/minTwoDigits";
import { Calendar } from "../AddEventForm/AddEventForm.mui.style";

export const Date = ({ event, setDate }) => {
  let date;
  const getDate = (e) => {
    date = e.$d;

    const month = minTwoDigits(date.getMonth());
    const day = minTwoDigits(date.getDay());

    const eventDay = `${day}.${month}`;

    setDate(eventDay);
  };

  return (
    <DemoContainer components={["DatePicker"]}>
      <Calendar value={dayjs(event ? event.date : date)} onChange={getDate} />
    </DemoContainer>
  );
};
