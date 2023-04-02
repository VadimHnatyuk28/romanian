async function getData() {
  const response = await fetch("words.json");
  const data = await response.json();
  console.log(data);
  return data;
}

export default getData();
