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
var HomeComponent = (function () {
    function HomeComponent(userService, authenticationService, newsService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.newsService = newsService;
        this.newNews = {
            appId: 21314,
            appSecret: 'APP_SEC'
        };
        this.model = {};
        this.isShowNews = false;
        this.error = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        // All times logout
        this.authenticationService.logout();
        //
        this.login();
    };
    HomeComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login('test', 'test')
            .subscribe(function (result) {
            if (result === true) {
                console.log('OK');
            }
            else {
                _this.error = 'Invalid credential';
            }
        });
    };
    HomeComponent.prototype.showForm = function () {
        this.isShowNews = true;
    };
    HomeComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.newNews);
        this.isShowNews = false;
        this.newsService.addNews(this.newNews).subscribe(function (result) {
            if (result === true) {
                console.log('OK');
            }
            else {
                _this.error = 'Can\'t add news';
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'home.component.html',
        styleUrls: ['home.component.css']
    }),
    __metadata("design:paramtypes", [index_1.UserService,
        index_1.AuthenticationService,
        index_1.NewsService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map