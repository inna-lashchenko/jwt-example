import { Component, OnInit } from '@angular/core';
import { AuthenticationService, NewsService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    newNews: any = {
        appId: 21314,
        appSecret: 'APP_SEC'
    };
    model: any = {};
    isShowNews: boolean = false;
    error: string = '';

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private newsService: NewsService
    ) { }

    ngOnInit() {
        // All times logout
        this.authenticationService.logout();
        //
        this.login();
    }

    login () {
        this.authenticationService.login('test', 'test')
            .subscribe(result => {
                if (result === true) {
                console.log('OK');
                } else {
                    this.error = 'Invalid credential';
                }
            });
    }

    showForm(){
        this.isShowNews = true;
    }

    onSubmit() {
        console.log(this.newNews);
        this.isShowNews = false;

        this.newsService.addNews(this.newNews).subscribe(result => {
            if (result === true) {
            console.log('OK');
            } else {
                this.error = 'Can\'t add news';
            }
        });
    }
}