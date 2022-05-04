export async function getBooks() {
  const search_term = document.querySelector("#search-bar").value;

  const url = `https://www.googleapis.com/books/v1/volumes?q=${search_term}`;
  const responsePromise = fetch(url);

  const response = await responsePromise;
  const json = await response.json();
  return json.items;
}
