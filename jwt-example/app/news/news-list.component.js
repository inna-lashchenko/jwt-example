"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../_services/index");
var NewsListComponent = (function () {
    function NewsListComponent(newsService) {
        this.newsService = newsService;
        this.news = [
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
        this.getNews();
    }
    NewsListComponent.prototype.getNews = function () {
        var _this = this;
        this.newsService.getNews().subscribe(function (result) {
            if (result === true) {
                console.log(result);
                _this.news = result;
                console.log('OK');
            }
        });
    };
    return NewsListComponent;
}());
NewsListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'news-list.component.html',
        styleUrls: ['news-list.component.css']
    }),
    __metadata("design:paramtypes", [index_1.NewsService])
], NewsListComponent);
exports.NewsListComponent = NewsListComponent;
//# sourceMappingURL=news-list.component.js.map