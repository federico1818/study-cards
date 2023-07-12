import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core'
import { Card } from 'src/app/card/models/card'
import { HTMLNode } from 'src/app/card/models/html-node'

@Component({
    selector: 'app-card',
    template: '',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
    @Input() public card!: Card

    constructor(
        private renderer: Renderer2,
        private el: ElementRef
    ) {}

    public ngOnInit(): void {
        this.card.children.forEach((element: HTMLNode) => {
            this.renderElement(this.el.nativeElement, element)
        })
    }

    private renderElement(parent: any, element: HTMLNode) {
        const tag = this.renderer.createElement(element.tag)
        if(element.innerText) {
            const text = this.renderer.createText(element.innerText)
            this.renderer.appendChild(tag, text)
        }
        if(element.children) {
            element.children.forEach((element: HTMLNode) => {
                this.renderElement(tag, element)
            })
        }
        this.renderer.appendChild(parent, tag)
    }
}
