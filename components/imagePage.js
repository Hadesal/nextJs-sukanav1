import Image from "next/image";
import React from "react";

const ImageToBase64 = () => {
  const [base64Image, setBase64Image] = React.useState("");

  const handleImageChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = () => {
      setBase64Image(fileReader.result);
      console.log(base64Image);
    };
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <Image src={base64Image} alt="My Image" width={500} height={500} />
    </div>
  );
};

export default ImageToBase64;
