import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort'
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
  tableColumns = ['destinationEmail', 'theme', 'chosenDeliveryServiceId', 
                  'usedDeliveryServiceId', 'scheduleDate', 'isSent', 'buttons'];
  dataSource: MatTableDataSource<Message>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public messagesService: MessagesService, private cdr: ChangeDetectorRef) { 
    this.messagesService.getMessages()
      .subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cdr.detectChanges();
      });
  }

  ngOnInit() { }

  onDelete(messageId: number) {
    this.messagesService.deleteMessage(messageId)
      .subscribe((data: any) => {
        this.dataSource.data.splice(
          this.dataSource.data.findIndex(m => m.messageId == messageId)
        );
        this.dataSource._updateChangeSubscription();
        this.cdr.detectChanges();
      });
  }
}
