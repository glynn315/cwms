import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  standalone:true
})
export class ModalComponent {
  @Input() title: string = 'Default Title'; // Title of the modal
  @Input() isVisible: boolean = false; // Modal visibility state
  @Output() closeModal = new EventEmitter<void>(); // Event to close the modal

  close() {
    this.closeModal.emit(); // Emit event to close modal
  }
}
