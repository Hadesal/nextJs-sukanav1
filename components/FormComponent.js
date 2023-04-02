import React, { useState } from "react";
import { postImmobile } from "@/utils/fechtMethods";
const ImmobileForm = () => {
  const [message, setMessage] = useState("");
  const [immobileState, setImmobileState] = useState({
    projectNumber: 0,
    immobileType: "",
    details: {
      bedRooms: 0,
      bathRooms: 0,
      size: 0,
      description: "",
    },
    completionOfBuild: "",
    livingSpace: "",
    price: 0,
    location: "",
    city: "",
    address: "",
    rooms: 0,
    images: [],
    zib: 0,
  });

  const handleFileUpload = (event) => {
    const fileArray = Array.from(event.target.files);
    const readerArray = fileArray.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
      });
    });
    Promise.all(readerArray).then((imagesArray) => {
      setImmobileState({
        ...immobileState,
        images: [...immobileState.images, ...imagesArray],
      });
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const immobileObject = { immobileObject: immobileState };
    await postImmobile(immobileObject).then((message) =>
      setMessage(message.message)
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="fields">
        <div className="input-container">
          <div className="left-input-container">
            <div className="input-field">
              Project Number:
              <input
                type="number"
                name="projectNumber"
                value={immobileState.projectNumber}
                onChange={(e) => {
                  setImmobileState({
                    ...immobileState,
                    projectNumber: e.target.value,
                  });
                }}
              />
            </div>

            <div className="input-field">
              Immobile Type:
              <input
                type="text"
                name="immobileType"
                value={immobileState.immobileType}
                onChange={(e) =>
                  setImmobileState({
                    ...immobileState,
                    immobileType: e.target.value,
                  })
                }
              />
            </div>

            <div className="input-field">
              Number of Bedrooms:
              <input
                type="number"
                name="bedRooms"
                value={immobileState.details.bedRooms}
                onChange={(e) =>
                  setImmobileState({
                    ...immobileState,
                    details: {
                      ...immobileState.details,
                      bedRooms: e.target.value,
                    },
                  })
                }
              />{" "}
            </div>

            <div className="input-field">
              Number of Bathrooms:
              <input
                type="number"
                name="bathRooms"
                value={immobileState.details.bathRooms}
                onChange={(e) =>
                  setImmobileState({
                    ...immobileState,
                    details: {
                      ...immobileState.details,
                      bathRooms: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="input-field">
              Size:
              <input
                type="number"
                name="size"
                value={immobileState.details.size}
                onChange={(e) =>
                  setImmobileState({
                    ...immobileState,
                    details: { ...immobileState.details, size: e.target.value },
                  })
                }
              />
            </div>

            <div className="input-field">
              Description:
              <textarea
                name="description"
                value={immobileState.details.description}
                onChange={(e) =>
                  setImmobileState({
                    ...immobileState,
                    details: {
                      ...immobileState.details,
                      description: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="input-field">
              Completion of Build:
              <input
                type="date"
                name="completionOfBuild"
                value={immobileState.completionOfBuild}
                onChange={(e) =>
                  setImmobileState({
                    ...immobileState,
                    completionOfBuild: e.target.value,
                  })
                }
              />
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
            {/* TODO:STYLE MESSAGE AND DELETE BUTTON PLEASE */}
            <div>{message ? <span>{message}</span> : ""}</div>
          </div>
          <div className="right-input-container">
            <div className="input-field">
              Living Space:
              <input
                type="text"
                name="livingSpace"
                value={immobileState.livingSpace}
                onChange={(e) =>
                  setImmobileState({
                    ...immobileState,
                    livingSpace: e.target.value,
                  })
                }
              />
            </div>
            <div className="input-field">
              Price:
              <input
                type="number"
                name="price"
                value={immobileState.price}
                onChange={(e) =>
                  setImmobileState({ ...immobileState, price: e.target.value })
                }
              />
            </div>
            <div className="input-field">
              Location:
              <input
                type="text"
                name="location"
                value={immobileState.location}
                onChange={(e) =>
                  setImmobileState({
                    ...immobileState,
                    location: e.target.value,
                  })
                }
              />
            </div>
            <div className="input-field">
              City:
              <input
                type="text"
                name="city"
                value={immobileState.city}
                onChange={(e) =>
                  setImmobileState({ ...immobileState, city: e.target.value })
                }
              />
            </div>
            <div className="input-field">
              Address:
              <input
                type="text"
                name="address"
                value={immobileState.address}
                onChange={(e) =>
                  setImmobileState({
                    ...immobileState,
                    address: e.target.value,
                  })
                }
              />
            </div>
            <div className="input-field">
              Number of Rooms:
              <input
                type="number"
                name="rooms"
                value={immobileState.rooms}
                onChange={(e) =>
                  setImmobileState({ ...immobileState, rooms: e.target.value })
                }
              />
            </div>
            <div className="input-field">
              Images:
              <input
                type="file"
                id="images"
                name="images"
                multiple
                onChange={handleFileUpload}
              />
            </div>

            <div className="input-field">
              ZIB:
              <input
                type="number"
                name="zib"
                value={immobileState.zib}
                onChange={(e) =>
                  setImmobileState({ ...immobileState, zib: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ImmobileForm;
