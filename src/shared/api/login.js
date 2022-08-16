export const ValidateLogin = async (credentials) => {
  console.log(credentials);
  let myHeaders = new Headers();

  myHeaders.append("Authorization", "bafc2467d6f7a6855d58279a2d971151");
  myHeaders.append("Content-Type", "application/json");

  const data = JSON.stringify(credentials);

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: data,
    mode: "no-cors",
    redirect: "follow",
  };

  fetch(
    "https://broker.alejandrowaldo.com/view/admin/login.php",
    requestOptions
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      crosole.log(result);
    })
    .catch((error) => console.log(error));
};
