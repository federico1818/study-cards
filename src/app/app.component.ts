import { Component } from '@angular/core'
import { Card } from 'src/app/card/models/card'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    public card: Card = {
        children: [
            {
                tag: 'header',
                children: [
                    {
                        tag: 'h1',
                        innerText: 'Historia Griega',
                    }
                ]
            },
            {
                tag: 'main',
                innerText: 'MAIN'
            }
        ]
    }
}
