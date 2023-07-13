import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CardComponent } from 'src/app/card/components/card/card.component'

import { HtmlModule } from 'src/app/html/html.module'

@NgModule({
    declarations: [
        CardComponent,
    ],
    imports: [
        CommonModule,
        HtmlModule
    ],
    exports: [
        CardComponent,
    ]
})
export class CardModule { }
