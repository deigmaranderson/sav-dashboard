import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'widget-alert-postit',
    templateUrl: 'alertpostit.template.html'
})
export class WidgetAlertPostit implements OnInit {
    @Input() name: string;
    @Input() time: Date;
    @Input() total: Number;
    @Output() description: string;

    ngOnInit(): void {
        this.description = "Existem " + this.total + " produtos, prestes a vencer";
    }  
}