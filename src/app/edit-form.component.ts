import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { SVGIcon, saveIcon, cancelIcon } from '@progress/kendo-svg-icons';
import { Product } from './products';

@Component({
    selector: 'kendo-grid-edit-form',
    template: `
        <    *ngIf="active" [width]="300" [height]="450" (close)="closeForm()">

            <form novalidate class="k-form k-form-md">
              
            </form>

            <b>test</b>

           
    `
})
export class GridEditFormComponent {
    public saveIcon: SVGIcon = saveIcon;
    public cancelIcon: SVGIcon = cancelIcon;

    public active = false;
    public editForm: FormGroup = new FormGroup({
        ProductID: new FormControl(),
        ProductName: new FormControl('', Validators.required),
        UnitPrice: new FormControl(0),
        UnitsInStock: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])),
        Discontinued: new FormControl(false)
    });

    @Input() public isNew = false;

    @Input() public set model(product: Product) {
        this.editForm.reset(product);

        // toggle the Dialog visibility
        this.active = product !== undefined;
    }

    @Output() cancel: EventEmitter<undefined> = new EventEmitter();
    @Output() save: EventEmitter<Product> = new EventEmitter();

    public onSave(e: PointerEvent): void {
        e.preventDefault();
        this.save.emit(this.editForm.value);
        this.active = false;
    }

    public onCancel(e: PointerEvent): void {
        e.preventDefault();
        this.closeForm();
    }

    public closeForm(): void {
        this.active = false;
        this.cancel.emit();
    }
}
