import { AfterContentInit, Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { Card } from 'src/app/card/models/card'
import { HTMLComponent } from 'src/app/html/html-component'
import { HTMLNode } from 'src/app/html/html-node'
import { HtmlComponentService } from 'src/app/html/services/html-component.service'

@Component({
    selector: 'app-card',
    template: '<ng-template #ref></ng-template>',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
    @Input() public card!: Card

    @ViewChild('ref', { static: true, read: ViewContainerRef })
    public ref!: ViewContainerRef;

    constructor(
        private _htmlComponentService: HtmlComponentService
    ) {}

    public ngOnInit(): void {
        this.card.children.forEach((element: HTMLNode) => {
            this.renderElement(element)
        })
    }

    private renderElement(element: HTMLNode) {
        const componentRef: ComponentRef<HTMLComponent> = this.ref.createComponent(
            this._htmlComponentService.getHtmlComponentByTag(element.tag)
        )
        if(element.innerText) {
            componentRef.instance.text = element.innerText
        }
        // const tag = this.renderer.createElement(element.tag)
        // if(element.innerText) {
        //     const text = this.renderer.createText(element.innerText)
        //     this.renderer.appendChild(tag, text)
        // }
        // if(element.children) {
        //     element.children.forEach((element: HTMLNode) => {
        //         this.renderElement(tag, element)
        //     })
        // }
        // this.renderer.appendChild(parent, tag)
    }
}
