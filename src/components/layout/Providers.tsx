import { FC, PropsWithChildren } from "react";

type ProvidersProps = PropsWithChildren & {};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <>{children}</>;
};

export default Providers;
