import React, { useState } from "react";
//import { useAuth0 } from "@auth0/auth0-react";
import './external-api.css'

const ExternalApi = () => {
  const [message, setMessage] = useState("");
  //const serverUrl = "https://pw-auth0-react-sample.netlify.app/";

  //const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      //const response = await fetch(`${serverUrl}/api/messages/public-message`);
      const response = "The API doesn't require an access token to share this message. 200 OK"

      //const responseData = await response.json();

      //setMessage(responseData.message);
      setMessage(response);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const callSecureApi = async () => {
    try {
      // const token = await getAccessTokenSilently();

      // const response2 = await fetch(
      //   `${serverUrl}/api/messages/protected-message`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );

      //const responseData = await response2.json();
      const response = "The API successfully validated your access token. 200 OK"

      // setMessage(responseData.message);
      setMessage(response);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <div className="ea-container">
        <h1>External API</h1>
        <p>
          Use these buttons to call an external API. The protected API call has an
          access token in its authorization header. The API server will validate
          the access token using the Auth0 Audience value.
        </p>
        <div
          className="btn-group mt-5"
          role="group"
          aria-label="External API Requests Examples"
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={callApi}
          >
            Get Public Message
          </button>&nbsp;&nbsp;

          <button
            type="button"
            className="btn btn-primary"
            onClick={callSecureApi}
          >
            Get Protected Message
          </button>

        </div>
        {message && (
        <div className="mt-5">
          <h6 className="muted">Result</h6>
          <div className="container-fluid">
            <div className="row">
              <code className="col-12 text-light bg-dark p-4">{message}</code>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default ExternalApi;
