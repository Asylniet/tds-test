import { FC, PropsWithChildren } from "react";
import { Toaster } from "../ui/sonner";

type ProvidersProps = PropsWithChildren & {};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default Providers;
