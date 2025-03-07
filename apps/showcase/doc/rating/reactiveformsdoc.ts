import { Code } from '@/domain/code';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'reactive-forms-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>Rating can also be used with reactive forms. In this case, the <i>formControlName</i> property is used to bind the component to a form control.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <form [formGroup]="formGroup">
                <p-rating formControlName="value" />
            </form>
        </div>
        <app-code [code]="code" selector="rating-reactive-forms-demo"></app-code>
    `
})
export class ReactiveFormsDoc implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl(4)
        });
    }

    code: Code = {
        basic: `<form [formGroup]="formGroup">
    <p-rating formControlName="value" />
</form>`,

        html: `<div class="card flex justify-center">
    <form [formGroup]="formGroup">
        <p-rating formControlName="value" />
    </form>
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
    selector: 'rating-reactive-forms-demo',
    templateUrl: './rating-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, Rating]
})
export class RatingReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl(4)
        });
    }
}`
    };
}
