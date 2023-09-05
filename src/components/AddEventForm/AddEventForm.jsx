import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { ThemeProvider } from "@mui/material";
import dayjs from "dayjs";
import {
  Form,
  LabelDescr,
  LabelTitle,
  LabelCategory,
  LabelLocation,
  LabelPriority,
  AddBtn,
  LabelDate,
  LabelTime,
  LabelImage,
} from "./AddEventForm.styled";

import { Calendar, Time } from "./AddEventForm.mui.style";
import { UploadPicture } from "../UploadPicture/UploadPicture";
import { createEvent } from "../../fakeAPI";
import sprite from "../../img/sprite.svg";
import { theme } from "../../utils/themeMUI";

export const AddEventForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [loc, setLoc] = useState("");
  const [eventPhoto, setEventPhoto] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);

  const onHandleChange = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "location":
        setLoc(e.target.value);
        break;

      default:
        break;
    }
  };

  const onSelectOpen = (e) => {
    switch (e.target.name) {
      case "category":
        setIsCategoryOpen((prev) => !prev);
        break;
      case "priority":
        setIsPriorityOpen((prev) => !prev);
        break;

      default:
        break;
    }
  };

  const onDeleteValue = (e) => {
    switch (e.target.dataset.id) {
      case "title":
        setTitle("");
        break;
      case "description":
        setDescription("");
        break;
      case "location":
        setLoc("");
        break;
      case "image":
        setEventPhoto("");
        break;
      default:
        break;
    }
  };

  const handleCategory = (e) => {
    setCategory(e.target.dataset.id);
    setIsCategoryOpen(false);
  };

  const handlePriority = (e) => {
    setPriority(e.target.dataset.id);
    setIsPriorityOpen(false);
  };

  const clearForm = () => {
    setDate("");
    setTime("");
    setTitle("");
    setDescription("");
    setCategory("");
    setPriority("");
    setLoc("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();

    const data = {
      id,
      title,
      description,
      priority,
      category,
      img: eventPhoto,
      plays: loc,
      time,
      date,
    };

    createEvent(data);

    clearForm();
  };

  const getDate = (e) => {
    setDate(e);
  };

  const getTime = (e) => {
    const time = new Date(e);
    const hours = time.getHours();
    const minutes = time.getMinutes();

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
    <Form onSubmit={handleSubmit}>
      <ThemeProvider theme={theme}>
        <LabelTitle>
          <span>Title</span>
          <input
            onChange={onHandleChange}
            type="text"
            name="title"
            value={title}
          />
          <button onClick={onDeleteValue} type="button" data-id="title">
            <svg data-id="title" width="10px" height="10px">
              <use href={sprite + "#icon-clear-btn"} />
            </svg>
          </button>
        </LabelTitle>
        <LabelDescr>
          <span>Description</span>
          <textarea
            onChange={onHandleChange}
            name="description"
            value={description}
          ></textarea>
          <button onClick={onDeleteValue} type="button" data-id="description">
            <svg data-id="description" width="10px" height="10px">
              <use href={sprite + "#icon-clear-btn"} />
            </svg>
          </button>
        </LabelDescr>
        <LabelDate>
          <span>Select date</span>
          <DemoContainer components={["DatePicker"]}>
            <Calendar value={dayjs(date)} onChange={getDate} />
          </DemoContainer>
        </LabelDate>
        <LabelTime>
          <span>Select time</span>
          <DemoContainer components={["DesktopTimePicker"]}>
            <Time value={time} onChange={getTime} />
          </DemoContainer>
        </LabelTime>
        <LabelLocation className="location">
          <span>Location</span>
          <input
            onChange={onHandleChange}
            type="text"
            name="location"
            value={loc}
          />
          <button onClick={onDeleteValue} type="button" data-id="location">
            <svg data-id="location" width="10px" height="10px">
              <use href={sprite + "#icon-clear-btn"} />
            </svg>
          </button>
        </LabelLocation>
        <LabelCategory open={isCategoryOpen}>
          <span>Category</span>
          <button onClick={onSelectOpen} type="button" name="category">
            {category}
            <svg width="10px" height="5px">
              <use href={sprite + "#arrow-lng"} />
            </svg>
          </button>
          <ul onClick={handleCategory}>
            <li data-id="Art">Art</li>
            <li data-id="Music">Music</li>
            <li data-id="Business">Business</li>
            <li data-id="Conference">Conference</li>
            <li data-id="Workshop">Workshop</li>
            <li data-id="Party">Party</li>
            <li data-id="Sport">Sport</li>
          </ul>
        </LabelCategory>
        <LabelImage>
          <span>Add picture</span>
          <UploadPicture setEventPhoto={setEventPhoto} />
          <button onClick={onDeleteValue} type="button" data-id="image">
            <svg data-id="image" width="8px" height="8px">
              <use href={sprite + "#icon-clear-btn"} />
            </svg>
          </button>
        </LabelImage>
        <LabelPriority open={isPriorityOpen}>
          <span>Priority</span>
          <button onClick={onSelectOpen} type="button" name="priority">
            {priority}
            <svg width="10px" height="5px">
              <use href={sprite + "#arrow-lng"} />
            </svg>
          </button>
          <ul onClick={handlePriority}>
            <li data-id="Hight">Hight</li>
            <li data-id="Medium">Medium</li>
            <li data-id="Low">Low</li>
          </ul>
        </LabelPriority>
        <AddBtn type="submit">Add event</AddBtn>
      </ThemeProvider>
    </Form>
  );
};
