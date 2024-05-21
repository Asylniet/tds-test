import { FC, PropsWithChildren } from "react";
import { Toaster } from "../ui/sonner";

type ProvidersProps = PropsWithChildren & {};

/**
 * Renders the Providers component.
 *
 * @component
 * @param {ProvidersProps} props - The component props.
 * @param {ReactNode} props.children - The child components to render.
 * @returns {ReactNode} The rendered Providers component.
 */
const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default Providers;
