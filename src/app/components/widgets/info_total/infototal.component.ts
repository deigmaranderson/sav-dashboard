import { Component, Input  } from '@angular/core';

@Component({
  selector: 'widget-info-total',
  templateUrl: 'infototal.template.html'
})
export class WidgetInfoTotal {
    @Input() name: string;
    @Input() label: string;
    @Input() label_color: string;
    @Input() total: string;
    @Input() total_description: string;

    
}
