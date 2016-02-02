import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch'

@inject(HttpClient)
export class HackerNews {
    heading = 'Hacker News';
    newsItems = [];

    constructor(http) {
        http.configure(config => {
            config.useStandardConfiguration()
                .withBaseUrl('https://hacker-news.firebaseio.com/v0/');
        });

        this.http = http;
    }

    activate() {
        return this.http.fetch('maxitem.json?print=pretty')
            .then(response => response.json())
            .then(newsItems => this.newsItems = newsItems);

    }
}
