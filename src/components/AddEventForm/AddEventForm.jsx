import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
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
import { UploadPicture } from "../UploadPicture/UploadPicture";
import { createEvent, updateEvent } from "../../fakeAPI";
import sprite from "../../img/sprite.svg";
import { theme } from "../../utils/themeMUI";
import defaultPic from "../../img/default-pic.jpg";
import { GetTime } from "../GetTime/GetTime";
import { Date } from "../Date/Date";

export const AddEventForm = ({ event, id }) => {
  const [updateId, setUpdateId] = useState();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState(event?.title ?? "");
  const [description, setDescription] = useState(event?.description ?? "");
  const [category, setCategory] = useState(event?.category ?? "");
  const [priority, setPriority] = useState(event?.priority ?? "");
  const [loc, setLoc] = useState(event ? event.place : "");
  const [eventPhoto, setEventPhoto] = useState(event ? event.img : "");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);

  useEffect(() => {
    setUpdateId(id ?? "");
  }, [id]);

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
    setEventPhoto("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();

    const data = {
      id: updateId.toString() || id.toString(),
      title,
      description,
      priority,
      category,
      img: eventPhoto || defaultPic,
      plays: loc,
      time,
      date,
    };

    if (event?.length > 0) {
      updateEvent(updateId, data);
      clearForm();

      return;
    }

    createEvent(data);

    clearForm();
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
          <Date event={event} setDate={setDate} />
        </LabelDate>
        <LabelTime>
          <span>Select time</span>
          <GetTime event={event} setTime={setTime} />
        </LabelTime>
        <LabelLocation className="location">
          <span>Location</span>
          <input
            onChange={onHandleChange}
            type="text"
            name="location"
            value={event ? event.place : loc}
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

        <AddBtn type="submit">
          Add event
          {/* <NavLink to={"/"}>Add event</NavLink> */}
        </AddBtn>
      </ThemeProvider>
    </Form>
  );
};
