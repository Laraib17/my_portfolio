let url = "https://jsonplaceholder.typicode.com/todos/1";
async function getdata(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}
export default getdata;