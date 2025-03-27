import React, { useState } from "react";
import upload from "../../assets/upload.jpg";
import "./Add.css";
import axios from "axios";
import { backendUrl } from "../../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1 ? image1 : null);
      image2 && formData.append("image2", image2 ? image2 : null);
      image3 && formData.append("image3", image3 ? image3 : null);
      image4 && formData.append("image4", image4 ? image4 : null);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Something go wrong! Booooo!!!", error);

      if (error.response) {
        console.error("🛑 Server Response Error:", error.response.data);
      } else if (error.request) {
        console.error("🚨 No Response from Server:", error.request);
      } else {
        console.error("❌ Request Setup Error:", error.message);
      }
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="form-container">
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
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="form-input"
          placeholder="Enter product name"
          required
        />
      </div>
      <div className="form-group">
        <p className="form-label">Product description</p>
        <textarea
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="form-input"
          placeholder="Type product description"
          required
        />
      </div>
      <div className="form-group-gorizontal">
        <div>
          <p className="form-label">Product category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="form-select"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="form-label">Product price</p>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="form-input price-input"
            placeholder="30"
          />
        </div>
      </div>
      <div>
        <p className="form-label">Product Sizes</p>
        <div className="size-options">
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
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          className="checkbox-input"
          type="checkbox"
          id="bestseller"
        />
        <label htmlFor="bestseller">Add to bestseller</label>
      </div>
      <button className="submit-btn" type="submit">
        ADD PRODUCT
      </button>
    </form>
  );
};

export default Add;
