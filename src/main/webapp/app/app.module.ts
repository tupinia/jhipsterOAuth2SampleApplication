import './vendor.ts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterOAuth2SampleApplicationSharedModule, UserRouteAccessService } from './shared';
import { JhipsterOAuth2SampleApplicationHomeModule } from './home/home.module';
import { JhipsterOAuth2SampleApplicationAdminModule } from './admin/admin.module';
import { JhipsterOAuth2SampleApplicationAccountModule } from './account/account.module';
import { JhipsterOAuth2SampleApplicationEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterOAuth2SampleApplicationSharedModule,
        JhipsterOAuth2SampleApplicationHomeModule,
        JhipsterOAuth2SampleApplicationAdminModule,
        JhipsterOAuth2SampleApplicationAccountModule,
        JhipsterOAuth2SampleApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterOAuth2SampleApplicationAppModule {}
