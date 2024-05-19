import Providers from "@/components/layout/Providers";
import { FC } from "react";
import { Outlet } from "react-router-dom";

type RootProps = {};

const Root: FC<RootProps> = () => {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
};

export default Root;
