import { Component, Input } from '@angular/core'
import { HTMLComponent } from 'src/app/html/html-component'

@Component({
  selector: 'app-html-header',
  templateUrl: './html-header.component.html',
  styleUrls: ['./html-header.component.scss']
})
export class HtmlHeaderComponent implements HTMLComponent {
    @Input() text!: string
}
