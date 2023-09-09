import { NewsApi } from "./fetchArticles";
const form = document.querySelector('.js-search-form');
const loadMoreBtn = document.querySelector(['data-action:"load-more"'])
let searchQuery = "";


form.addEventListener("submit", onFormButtonClick);

function onFormButtonClick(event) {
    event.preventDeufault();

    searchQuery = event.currentTarget.elements.query.value;
    fetchArticles(searchQuery)
    .then((articles) => console.log(articles))
};

loadMoreBtn.addEventListener("click", onloadMoreBtn);

function onloadMoreBtn() {
    fetchArticles(searchQuery)
    .then((articles) => console.log(articles))
}