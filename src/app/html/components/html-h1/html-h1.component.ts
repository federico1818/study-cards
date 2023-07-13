import { Component, Input } from '@angular/core'
import { HTMLComponent } from 'src/app/html/html-component'

@Component({
  selector: 'app-html-h1',
  templateUrl: './html-h1.component.html',
  styleUrls: ['./html-h1.component.scss']
})
export class HtmlH1Component implements HTMLComponent {
    @Input() text!: string
}
