import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService, NewsService } from './_services/index';
import { HomeComponent } from './home/index';
import { NewsListComponent, NewsComponent } from './news/index';
import { HttpModule, JsonpModule } from '@angular/http';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NewsListComponent,
        NewsComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        NewsService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }