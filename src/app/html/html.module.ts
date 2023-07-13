import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HtmlHeaderComponent } from './components/html-header/html-header.component'
import { HtmlH1Component } from './components/html-h1/html-h1.component'


@NgModule({
    declarations: [
        HtmlHeaderComponent,
        HtmlH1Component
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HtmlHeaderComponent,
        HtmlH1Component
    ]
})

export class HtmlModule { }
