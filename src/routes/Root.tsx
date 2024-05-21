import Providers from "@/components/layout/Providers";
import { FC } from "react";
import { Outlet } from "react-router-dom";

type RootProps = {};

/**
 * Root component for the application.
 * Renders the Providers component and the Outlet component.
 */
const Root: FC<RootProps> = () => {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
};

export default Root;
