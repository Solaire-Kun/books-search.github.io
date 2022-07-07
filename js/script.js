const fieldSearch = document.querySelector('[data-search-field]');
const buttonSearch = document.querySelector('[data-search-button]');
const searching = document.querySelector('[data-searching]');
const bookContainer = document.querySelector('[data-book-container]');
const bookTemplate = document.querySelector('[data-book-template]');

function searchBook(query) {
  const url = `https://openlibrary.org/search.json?q=${query}`;
  fetch(url)
    .then(resolve => resolve.json())
    .then((jsonData) => {
      for(let i = 0; i <= 10; i++) {
        const item = jsonData.docs[i];
        if(item) {
          const newBook = bookTemplate.content.cloneNode(true);
          const bookTitle = newBook.querySelector('[data-title]');
          const bookAuthor = newBook.querySelector('[data-author]');
          const bookKey = newBook.querySelector('[data-key]');

          bookTitle.textContent = item.title;
          bookAuthor.textContent = 'Author(s): ' + item.author_name;
          bookKey.innerHTML = 'View Description';
          bookKey.setAttribute('href', `https://openlibrary.org${item.key}`);
          bookContainer.append(newBook);
          searching.textContent = '';
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
        searchBook(fieldSearch.value);
        while(bookContainer.lastChild) {
              bookContainer.removeChild(bookContainer.lastChild);
        };
        searching.textContent = 'Searching...';
    }else {
        alert("You can't perform a search with an empty search field");
    };
};
