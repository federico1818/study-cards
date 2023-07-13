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
                tag: 'h1',
                innerText: 'Grecia clásica'
            }
        ]
    }
}
