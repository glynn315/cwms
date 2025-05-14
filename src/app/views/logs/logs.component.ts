import { Component } from '@angular/core';
import { ModalComponent } from "../../shared/modal/modal.component";

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent {
  modalVisible: boolean = false;
  modalTitle: string = 'Log Information';
  openModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }
}
