import { useState } from "react";
import axios from "axios";

const AddImage = () => {
  const [image, setImage] = useState("");

  //create a function to call when you submit the form
  function handleImage(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", image);
    formData.append("upload_preset", "AdoptMe");
    //terminal >>> "npm i axios"
    axios
      .post("https://api.cloudinary.com/v1_1/dmvawq2ak/image/upload", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <form onSubmit={handleImage}>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button>submit</button>
    </form>
  );
};

export default AddImage;
