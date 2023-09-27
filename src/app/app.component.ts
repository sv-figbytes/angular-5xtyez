import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductsService } from "./products.service";
import { categories } from "./categories";
import { Category } from "./model";
import { Product } from "./products";
import {
  AddEvent,
  CancelEvent,
  EditEvent,
  SaveEvent,
  GridComponent,
} from "@progress/kendo-angular-grid";
import { Observable, of, tap } from "rxjs";

@Component({
  selector: "my-app",
  template: `
    <app-custom-modal
      [editedOption]="editedProductOption"
      (save)="onSaveOption($event)"
      (cancel)="onCancelEditOption()"
    ></app-custom-modal>

    <kendo-grid
      [kendoGridBinding]="(gridData | async)!"
      (edit)="editHandler($event)"
      (cancel)="cancelHandler($event)"
      (save)="saveHandler($event)"
      [height]="410"
    >
      
      <kendo-grid-column field="ProductName" title="Name" [width]="150">
      </kendo-grid-column>

      <kendo-grid-column field="item.option" title="Temp" [width]="150">
        <ng-template
          kendoGridEditTemplate
          let-dataItem="dataItem"
          let-formGroup="formGroup"
        >
          <input
            type="text"
            [(ngModel)]="dataItem.item.option"
            placeholder="Enter something..."
          />
        </ng-template>

        <ng-template kendoGridCellTemplate let-dataItem>
        <button (click)="openModal($event, dataItem.item.option )">modal1</button>
          <button kendoGridEditCommand (click)="openModal($event, dataItem.item.option )">modal</button>
          {{ dataItem.item.option }}
        </ng-template>
      </kendo-grid-column>

      <kendo-grid-column field="CategoryID" title="Category" [width]="150">
        <ng-template
          kendoGridEditTemplate
          let-dataItem="dataItem"
          let-formGroup="formGroup"
        >
          <kendo-dropdownlist
            [defaultItem]="{
              CategoryID: null,
              CategoryName: 'Test null item'
            }"
            [data]="categories"
            textField="CategoryName"
            valueField="CategoryID"
            [valuePrimitive]="true"
            [formControl]="formGroup.get('CategoryID')"
          >
          </kendo-dropdownlist>
        </ng-template>
        <ng-template kendoGridCellTemplate let-dataItem>
          {{ category(dataItem.CategoryID)?.CategoryName }}
        </ng-template>
      </kendo-grid-column>
      <kendo-grid-column
        field="UnitPrice"
        title="Price"
        format="c"
        [width]="120"
        editor="numeric"
      >
      </kendo-grid-column>
      <kendo-grid-column
        field="UnitsInStock"
        title="In stock"
        [width]="120"
        editor="numeric"
      >
      </kendo-grid-column>

      <kendo-grid-command-column title="command" [width]="150">
        <ng-template kendoGridCellTemplate>
          <button kendoGridEditCommand [primary]="true">Edit</button>
          <button kendoGridRemoveCommand>Remove</button>
          <button kendoGridSaveCommand [disabled]="formGroup?.invalid">
            Update
          </button>
          <button kendoGridCancelCommand>
            Cancel
          </button>
        </ng-template>
      </kendo-grid-command-column>
    </kendo-grid>

    <button (click)="logGridData()">Log Grid Data</button>
  `,
})
export class AppComponent implements OnInit {
  public gridData: Observable<Product[]> = of(this.service.products());
  public categories: Category[] = categories;
  public formGroup: FormGroup;
  private editedRowIndex: number;
  editedProductOption: string = "";

  constructor(private service: ProductsService) {}

  public openModal(a: any, value: any): void {
    this.editedProductOption = value;
  }

  
  public ngOnInit(): void {
  }

  public onCancelEditOption() {
    console.warn("Method not implemented.");
  }
  public onSaveOption(newOption: string): void {
    // Update the dataItem with the edited option
    // You can add additional logic here, e.g., saving the option to the server
    this.editedProductOption = newOption;
  }
  
  public logGridData(): void {
    this.gridData.subscribe((data) => {
      console.log("data[0].item", data[0].item);
    });
  }

  public category(id: number): Category {
    return this.categories.find((x) => x.CategoryID === id);
  }

  public editHandler({ sender, rowIndex, dataItem }: EditEvent): void {
    this.closeEditor(sender);

    this.formGroup = createFormGroup(dataItem);
    this.editedRowIndex = rowIndex;
    sender.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler({ sender, rowIndex }: CancelEvent): void {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, formGroup, isNew }: SaveEvent): void {
    const product = formGroup.value;
    this.service.save(product, isNew);
    sender.closeRow(rowIndex);
  }

  
  private closeEditor(grid: GridComponent,rowIndex = this.editedRowIndex): void {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }
}

const createFormGroup = (dataItem) => new FormGroup({
    ProductID: new FormControl(dataItem.ProductID),
    ProductName: new FormControl(dataItem.ProductName, Validators.required),
    UnitPrice: new FormControl(dataItem.UnitPrice),
    UnitsInStock: new FormControl(
      dataItem.UnitsInStock,
      Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]{1,3}"),
      ])
    ),
    CategoryID: new FormControl(dataItem.CategoryID, Validators.required),
  });
