import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Intro from "./Components/Intro";
import Feature from "./Components/Feature";
import Testimonials from "./Components/Testimonials";
import classNames from "classnames/bind";
import type { Gallery } from "@mytypes/gallery";
import galleriesService from "@services/galleriesService";

const cx = classNames.bind(styles);

const Home = () => {
  const [galleries, setGalleries] = useState<Gallery[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await galleriesService.fetchGalleries();
        setGalleries(response.data);
      } catch (error) {
        console.error("Error fetching galleries:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={cx("home")}>
      <Intro />
      <Feature />

      <Testimonials galleries={galleries} />
    </div>
  );
};

export default Home;
