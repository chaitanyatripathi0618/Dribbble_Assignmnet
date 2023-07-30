// Content.js
import React, { useState } from 'react';
import axios from 'axios';

function Content() {
  const data = {
    serviceName: '',
    description: '',
    name: '',
    contents: '',
    email: '',
    img1: '',
    img2: '',
  };
  const [inputdata, setInputData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setInputData({ ...inputdata, [e.target.name]: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('testImage1', inputdata.img1);
    formData.append('testImage2', inputdata.img2);
    formData.append('serviceName', inputdata.serviceName);
    formData.append('description', inputdata.description);
    formData.append('name', inputdata.name);
    formData.append('contents', inputdata.contents);
    formData.append('email', inputdata.email);

    axios
      .post('http://localhost:4000/upload', formData)
      .then((res) => {
        console.log(res);
        // Reset the form after successful submission
        setInputData(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="serviceName" value={inputdata.serviceName} onChange={handleChange} placeholder="Service Name" />
        <input type="text" name="description" value={inputdata.description} onChange={handleChange} placeholder="Description" />
        <input type="text" name="name" value={inputdata.name} onChange={handleChange} placeholder="Name" />
        <input type="text" name="contents" value={inputdata.contents} onChange={handleChange} placeholder="Contents" />
        <input type="text" name="email" value={inputdata.email} onChange={handleChange} placeholder="Email ID" />
        <input type="file" name="img1" onChange={handleFileChange} />
        <input type="file" name="img2" onChange={handleFileChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Content;
