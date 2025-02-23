import { Component } from '@angular/core';

@Component({
    selector: 'iconfield-accessibility-doc',
    standalone: false,
    template: ` <app-docsectiontext>
        <h3>Screen Reader</h3>
        <p>IconField and InputIcon does not require any roles and attributes.</p>

        <h3>Keyboard Support</h3>
        <p>Components does not include any interactive elements.</p>
    </app-docsectiontext>`
})
export class AccessibilityDoc {}
