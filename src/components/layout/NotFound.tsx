import { FC, ReactNode } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

type NotFoundProps = {
  message: ReactNode;
};

/**
 * Renders a component for displaying a "Not Found" message.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.message - The message to be displayed.
 * @returns {JSX.Element} The rendered component.
 */
const NotFound: FC<NotFoundProps> = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 h-screen">
      {message}
      <Button asChild>
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
