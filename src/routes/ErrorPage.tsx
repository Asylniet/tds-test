import { PageError } from "@/types/pageError";
import { FC } from "react";
import { useRouteError } from "react-router-dom";

type ErrorPageProps = {};

const ErrorPage: FC<ErrorPageProps> = () => {
  const error = useRouteError() as PageError | Error;

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error instanceof Error ? error.message : error.statusText}</p>
    </div>
  );
};

export default ErrorPage;
