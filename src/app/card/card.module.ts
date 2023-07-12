import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardComponent } from './components/card/card.component'


@NgModule({
    declarations: [
        CardComponent,
        CardHeaderComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CardComponent,
        CardHeaderComponent
    ]
})
export class CardModule { }
