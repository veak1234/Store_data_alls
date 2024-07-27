
// Use nested properties and element in sass to display the same result like below:

body {
  font-family: sans-serif;
  font-size: 100px;
  font-weight: 100;
  font-style: italic;
  margin-left: 10px;
  margin-right: 20px;
  padding-left: 10px;
  padding-right: 30px;
  padding-bottom: 220px;
  color: red;
}

nav {
  margin: 0;
  background: #000;
}
nav ul {
  margin: 0;
  padding: 15px;
  display: flex;
}
nav ul li {
  padding: 14px;
}
nav ul li a {
  text-decoration: none;
}
nav .nav-container {
  display: flex;
  padding: 7px;
}