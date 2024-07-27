function afterSuccess(response) {
  // 1 - TODO log the data from the response
  //    - male or female
  //    - the probalility
  console.log(response);

}

axios.get("https://jsonplaceholder.typicode.com/users").then(afterSuccess);