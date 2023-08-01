import { useContext, useEffect, useState } from "react";
import { GlobalOptionsContext } from "@options";

const Camera = () => {
  // More info on all the options is below in the API Reference... just some common use cases shown here
  const gOptions = useContext(GlobalOptionsContext); // eslint-disable-next-line no-unused-vars

  const [data, setData] = useState([]);

  const fetchImages = () => {
    fetch(`${gOptions.url}/modules/camera/photos/user/`).then(response => response.json()).then(json => setData(json)).catch(error => console.log(error)).finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return;
};

export default {
  title: "Camera",
  navigator: Camera
};