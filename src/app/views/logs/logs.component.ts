import { Component, OnInit } from '@angular/core';
import { ModalComponent } from "../../shared/modal/modal.component";
import { Logs } from '../../models/logs.model';
import { LogsServicesService } from '../../services/logs.services.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [ModalComponent, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit{
  modalVisible: boolean = false;
  modalTitle: string = 'Log Information';
  logs: Logs = {
    id: '',
    firstName: '',
    lastName: '',
    address: '',
    contact: 0,
    hubType: '',
    datetransaction: new Date(),
  }

  logsList: Logs[] = [];

  constructor(private logService: LogsServicesService,private router:Router){}

  ngOnInit(){
    this.fetchLogs();
  }

  fetchLogs(){
    this.logService.getAll().subscribe((data)=>{
      this.logsList = data;
    });
  }

  openModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }

  submit(){
    const { id, ...logWithoutId } = this.logs;

    this.logService.create(logWithoutId).subscribe(() => {
      this.router.navigate(['/logs']);
      this.closeModal();
      this.fetchLogs();
    });
  }

  timeout(id?: string){
    if (!id) {
      console.error("Missing ID");
      return;
    }

    this.logService.updateTimeOut(id).subscribe(() =>{
      console.log("Time Updated");
      this.fetchLogs();
    })
  }

  sample(id?: string){
    if (!id) {
    console.error("ID is missing");
    return;
  }
  console.log(id);
    
  }
}
