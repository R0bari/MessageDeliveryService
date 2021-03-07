import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MessagesService } from '../../services/messages.service';
import { Message } from '../models/Message';

@Component({
  selector: 'app-messages-table',
  templateUrl: './messages-table.component.html',
  styleUrls: ['./messages-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesTableComponent implements OnInit {
  tableColumns = ['destinationEmail', 'theme', 'chosenDeliveryService', 'scheduleDate', 'isSent'];
  dataSource: MatTableDataSource<Message>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public messagesService: MessagesService) { 
    this.dataSource = new MatTableDataSource();
    this.messagesService.getMessages()
      .subscribe((data: any) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
      });
  }

  ngOnInit() { 
  }
}
