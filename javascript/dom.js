import { getBooks } from "./api.js";

const searchForm = document.querySelector("#searchForm");

const createBookCard = (bookObj) => {
  console.log(bookObj.volumeInfo.imageLinks.thumbnail);

  const replaceUndefined = (rating) =>
    typeof rating === "undefined" ? `Not available` : rating;

  return `
        <div class="card">
        <img src="${bookObj.volumeInfo.imageLinks.thumbnail}"}
            <h2>${bookObj.volumeInfo.title}</h2>
            <p>Book Rating: ${replaceUndefined(
              bookObj.volumeInfo.averageRating
            )}</p>
            <p>${replaceUndefined(bookObj.volumeInfo.description)}</p>
        </div>
    `;
};

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const booksResponse = await getBooks(event);

  console.log(booksResponse);

  const bookCards = booksResponse.flatMap(createBookCard);
  console.log(bookCards);
  const booksOutputElement = document.querySelector("#books");
  booksOutputElement.innerHTML = bookCards.join("");
});
