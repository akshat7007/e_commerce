function AuthService(change) {
  let promise = new Promise(function (resolve, reject) {
    const formData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(change),
      // token: localStorage.getItem('token')
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

}

export default AuthService;
