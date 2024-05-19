import { FC } from "react";
import { useLoaderData } from "react-router-dom";

type HomePageProps = {};

const HomePage: FC<HomePageProps> = () => {
  const data = useLoaderData();
  return <div>HomePage</div>;
};

export default HomePage;
