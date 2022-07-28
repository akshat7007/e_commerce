function AuthService(change) {
  let promise = new Promise(function (resolve, reject) {
    const formData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(change),
    };
    fetch("https://reqres.in/api/login", formData)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;

  // console.log(data.token);
}

export default AuthService;
