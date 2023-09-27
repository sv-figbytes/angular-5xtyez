import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Import FormsModule

import { DialogModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { AppComponent } from './app.component';
import { ProductsService } from './products.service';
import { CustomModalComponent } from './custom-modal/custom-modal.component';

@NgModule({
    declarations: [AppComponent, CustomModalComponent],
    imports: [
        BrowserModule, 
        BrowserAnimationsModule, 
        ReactiveFormsModule, 
        FormsModule,
        GridModule, 
        DialogModule, 
        InputsModule,
         LabelModule, 
        ButtonsModule, 
        DropDownListModule,
    ],
    providers: [ProductsService],
    bootstrap: [AppComponent]
})
export class AppModule {}
