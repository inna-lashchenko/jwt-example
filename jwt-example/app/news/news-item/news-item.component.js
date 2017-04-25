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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var index_1 = require("../../_services/index");
var NewsComponent = (function () {
    function NewsComponent(route, location, newsService) {
        this.route = route;
        this.location = location;
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
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.newsId = params['id'];
            _this.getNews(params['id']);
        });
    };
    NewsComponent.prototype.getNews = function (newsId) {
        var _this = this;
        this.newsService.getNewsById(newsId).subscribe(function (result) {
            _this.lol = result;
        });
        console.log(this.lol);
    };
    NewsComponent.prototype.goBack = function () {
        this.location.back();
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'news-item.component.html',
        styleUrls: ['news-item.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        common_1.Location,
        index_1.NewsService])
], NewsComponent);
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news-item.component.js.map