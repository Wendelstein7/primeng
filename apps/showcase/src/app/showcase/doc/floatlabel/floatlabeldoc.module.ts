import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { FormsModule } from '@angular/forms';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { AccessibilityDoc } from './accessibilitydoc';
import { StyleDoc } from './styledoc';
import { VariantsDoc } from './variantsdoc';
import { InvalidDoc } from './invaliddoc';
@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, FloatLabelModule, InputTextModule],
    declarations: [ImportDoc, BasicDoc, VariantsDoc, InvalidDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class FloatLabelDocModule {}