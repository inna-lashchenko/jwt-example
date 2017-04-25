import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NewsService } from '../../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'news-item.component.html',
    styleUrls: ['news-item.component.css']
})

export class NewsComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private newsService: NewsService
    ) { }
    newsId: number;
    lol: any;


    news = [
        {
            "id": 1,
            "name": "У Будапешті знову протести проти уряду Орбана1",
            "text": "Цього разу акції протесту носять яскраво виражений гротескний характер. Мітингарі \"вимагають\" ще більше демагогії, обмежень особистих прав та свобод, а також прямого залізничного  сполучення з Москвою та Пхеньяном.",
            "img": "http://www.dw.com/image/38441470_303.jpg"
        },
        {
            "id": 2,
            "name": "У Будапешті знову протести проти уряду Орбана1",
            "text": "Цього разу акції протесту носять яскраво виражений гротескний характер. Мітингарі \"вимагають\" ще більше демагогії, обмежень особистих прав та свобод, а також прямого залізничного  сполучення з Москвою та Пхеньяном.",
            "img": "http://www.dw.com/image/38441470_303.jpg"
        },
        {
            "id": 3,
            "name": "У Будапешті знову протести проти уряду Орбана1",
            "text": "Цього разу акції протесту носять яскраво виражений гротескний характер. Мітингарі \"вимагають\" ще більше демагогії, обмежень особистих прав та свобод, а також прямого залізничного  сполучення з Москвою та Пхеньяном.",
            "img": "http://www.dw.com/image/38441470_303.jpg"
        },
        {
            "id": 4,
            "name": "У Будапешті знову протести проти уряду Орбана1",
            "text": "Цього разу акції протесту носять яскраво виражений гротескний характер. Мітингарі \"вимагають\" ще більше демагогії, обмежень особистих прав та свобод, а також прямого залізничного  сполучення з Москвою та Пхеньяном.",
            "img": "http://www.dw.com/image/38441470_303.jpg"
        },
        {
            "id": 5,
            "name": "У Будапешті знову протести проти уряду Орбана1",
            "text": "Цього разу акції протесту носять яскраво виражений гротескний характер. Мітингарі \"вимагають\" ще більше демагогії, обмежень особистих прав та свобод, а також прямого залізничного  сполучення з Москвою та Пхеньяном.",
            "img": "http://www.dw.com/image/38441470_303.jpg"
        },
        {
            "id": 6,
            "name": "У Будапешті знову протести проти уряду Орбана1",
            "text": "Цього разу акції протесту носять яскраво виражений гротескний характер. Мітингарі \"вимагають\" ще більше демагогії, обмежень особистих прав та свобод, а також прямого залізничного  сполучення з Москвою та Пхеньяном.",
            "img": "http://www.dw.com/image/38441470_303.jpg"
        }
    ];
    
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.newsId = params['id'];
            this.getNews(params['id']);
        });
    }

    getNews(newsId: number) {
        this.newsService.getNewsById(newsId).subscribe(result => {
                this.lol = result;

        });
        console.log(this.lol);

    }

    goBack() {
        this.location.back();
    }
}