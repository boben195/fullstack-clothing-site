import React, { useState } from "react";
import upload from "../../assets/upload.jpg";

const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  return (
    <form action="">
      <div>
        <p className="form-label">Upload images</p>
        <div className="image-upload-container">
          <label htmlFor="image1">
            <img
              className="upload-preview"
              src={!image1 ? upload : URL.createObjectURL(image1)}
              alt="preview"
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              className="upload-preview"
              src={!image2 ? upload : URL.createObjectURL(image2)}
              alt="preview"
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              className="upload-preview"
              src={!image3 ? upload : URL.createObjectURL(image3)}
              alt="preview"
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              className="upload-preview"
              src={!image4 ? upload : URL.createObjectURL(image4)}
              alt="preview"
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>
      <div className="form-group">
        <p className="form-label">Product name</p>
        <input
          type="text"
          className="form-input"
          placeholder="Enter product name"
          required
        />
      </div>
      <div className="form-group">
        <p className="form-label">Product description</p>
        <textarea
          type="text"
          className="form-input"
          placeholder="Type product description"
          required
        />
      </div>
      <div className="form-group-gorizontal">
        <div>
          <p className="form-label">Product category</p>
          <select className="form-select">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="form-label">Product price</p>
          <input
            type="number"
            className="form-input price-input"
            placeholder="30"
          />
        </div>
      </div>
      <div>
        <p className="form-label">Product Sizes</p>
        <div className="size-option">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }
              className={`size-option ${
                sizes.includes(size) ? "selected" : ""
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <div className="checkbox">
        <input type="checkbox" id="bestseller" />
        <label htmlFor="bestseller">Add to bestseller</label>
      </div>
      <button type="submit">ADD PRODUCT</button>
    </form>
  );
};

export default Add;
