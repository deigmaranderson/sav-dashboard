import { Component, Input } from '@angular/core';
import { AlertModel } from 'app/model/alert.model';

@Component({
    selector: 'widget-alert-products',
    templateUrl: 'alertproduct.template.html'
})
export class WidgetAlertProduct {
    @Input() title: string;
    @Input() subtitle: string;
    @Input() items: Array<AlertModel>;
}