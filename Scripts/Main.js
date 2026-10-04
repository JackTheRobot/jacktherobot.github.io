fetch("Components/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

  fetch("Components/homepageFooter.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("homepageFooter").innerHTML = data;
  });

fetch("Components/header.html")
.then(response => response.text())
.then(data => {
  document.getElementById("header").innerHTML = data;
});