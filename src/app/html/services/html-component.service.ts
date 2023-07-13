import { Injectable } from '@angular/core'
import { HTMLComponent } from 'src/app/html/html-component'
import { HtmlH1Component } from 'src/app/html/components/html-h1/html-h1.component'
import { HtmlHeaderComponent } from 'src/app/html/components/html-header/html-header.component'

@Injectable({
    providedIn: 'root'
})

export class HtmlComponentService {
    private readonly _elements: Map<string, any> = new Map([
        ['h1', HtmlH1Component],
        ['header', HtmlHeaderComponent]
    ])

    public getHtmlComponentByTag(tag: string): any {
        return this._elements.get(tag)
    }
}
