import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-custom-modal",
  templateUrl: "./custom-modal.component.html",
  styleUrls: [],
})
export class CustomModalComponent {
  @Input() editedOption: string;
  @Output() save = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  onSaveClick(): void {
    this.save.emit(this.editedOption);
  }

  onCancelClick(): void {
    this.cancel.emit();
  }
}
