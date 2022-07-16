import _get from 'lodash/get';
const fieldSearch = document.querySelector('[data-search-field]');
const buttonSearch = document.querySelector('[data-search-button]');
const info = document.querySelector('[data-info]');
const ERROR = document.querySelector('[data-error]');
const bookContainer = document.querySelector('[data-book-container]');
const bookTemplate = document.querySelector('[data-book-template]');

function searchBook(query) {
  fetch(`https://openlibrary.org/search.json?q=${query}`, {
    method:'GET',
  })
  .then(resolve => {
    if(resolve.ok) {
      return resolve.json();
    }else {
      throw new Error();
    };
  })
  .catch(err => {
    info.classList.replace('text-white', 'text-danger');
    ERROR.textContent = 'Something went wrong: ' + err;
  })
  .then((jsonData) => {
    for(let i = 0; i <= 10; i++) {
      let item = _get(jsonData, ['docs', [i]], '');
      if(item) {
        const newBook = bookTemplate.content.cloneNode(true);
        const bookTitle = newBook.querySelector('[data-title]');
        const bookAuthor = newBook.querySelector('[data-author]');
        const bookKey = newBook.querySelector('[data-key]');

        bookContainer.classList.replace('d-none', 'd-block');
        bookTitle.textContent = item.title;
        bookAuthor.textContent = 'Author(s): ' + item.author_name;
        bookKey.textContent = 'View Description';
        bookKey.setAttribute('href', `https://openlibrary.org${item.key}`);
        bookContainer.append(newBook);
        info.classList.replace('text-danger', 'text-white');
        info.textContent = '';
      }else {
        info.textContent = 'No results found.';
        break;
      };
    };
  });
};

fieldSearch.onkeypress = (event) => {
  if(event.key === 'Enter') {
    buttonSearch.click();
  };
};

buttonSearch.onclick = () => {
    if(fieldSearch.value != '') {
        info.classList.replace('text-danger', 'text-white');
        info.textContent = 'Searching...';
        ERROR.textContent = '';
        bookContainer.classList.replace('d-block', 'd-none');
        searchBook(fieldSearch.value);
        while(bookContainer.lastChild) {
              bookContainer.removeChild(bookContainer.lastChild);
        };
    }else {
        alert("You can't perform a search with an empty search field");
    };
};
