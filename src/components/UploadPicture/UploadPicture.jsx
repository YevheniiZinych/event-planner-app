import { useState } from "react";
import axios from "axios";
import { Container } from "./UploadPicture.style";
// import sprite from "../../img/sprite.svg";

export const UploadPicture = ({ setEventPhoto }) => {
  const [prevPhoto, setPrevPhoto] = useState("");
  const presetKey = process.env.REACT_APP_PRESET_KEY;
  const cloudName = process.env.REACT_APP_CLOUD_NAME;

  const handleUploadImg = (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", presetKey);

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      )
      .then((res) => {
        setEventPhoto(res.data.secure_url);
        setPrevPhoto(res.data.secure_url);
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <p>{prevPhoto}</p>
      <label htmlFor="image"></label>
      <input
        name="image"
        style={{
          display: "none",
        }}
        type="file"
        onChange={handleUploadImg}
      />
    </Container>
  );
};
