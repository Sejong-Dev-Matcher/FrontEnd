import client from "./client";

export const login = ({ username, password }) =>
  client
    .post(
      "/user/login",
      JSON.stringify({
        id: username,
        pw: password,
      })
    )
    .then((response) => {
      if (response.data) {
        console.log("success: ", response.data);
      }
      console.log("id: ", username, "pw:", password);
    })
    .catch((error) => {
      console.error(error);
    });

export const signup = ({ username, password }) =>
  client.post("/user/join", JSON.stringify({ id: username, pw:password })).then(
    console
      .log(
        "id: ",
        username,
        "pw:",
        password
      )((response) => {
        if (response.data) {
          console.log("success: ", response.data);
        } else {
          console.log("data post success but no data in it");
        }
      })
      .catch((error) => {
        console.log(error);
      })
  );

export const check = () => {
  client.get("/user/check");
};
