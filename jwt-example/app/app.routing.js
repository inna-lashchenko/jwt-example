"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./news/index");
var appRoutes = [
    { path: '', component: index_1.HomeComponent /*, canActivate: [AuthGuard] */ },
    { path: 'news',
        children: [
            { path: '', component: index_2.NewsListComponent },
            { path: ':id', component: index_2.NewsComponent },
        ]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map