import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendRequest = async (requestConfig) => {
    setIsLoading(true);
    setSuccess(false);
    try {
      const responseData = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: JSON.stringify(requestConfig.body),
      });

      if (!responseData.ok) {
        setSuccess(false);
        throw new Error("Something went wrong!");
      }
      setSuccess(true);
    } catch (err) {
      console.log(err);
      setSuccess(false);
    }
    setIsLoading(false);
  };

  return { isLoading, success, sendRequest };
};

export default useHttp;
