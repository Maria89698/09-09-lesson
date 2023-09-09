const options = {
    headers: {
        'X-API-Key': '362c5d90d156483293d8c2e9caa2c142'
    }
};
const BASE_URL = 'https://newsapi.org/v2/'

export class NewsApi{
    constructor(){
        this.searchQuery = '';
        this.page = 1
    }
    
    fetchArticles(searchQuery) {
    return fetch(`${BASE_URL}everything?q=${this.searchQuery}&pageSize=10&page=1`, options)
        .then(res => res.json())
        .then(articles => {
            this.increasePage()
            return articles
        })
    }

    increasePage(){
        this.page += 1
    }
}
