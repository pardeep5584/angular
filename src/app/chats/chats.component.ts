import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Observable, BehaviorSubject } from 'rxjs';
import {Http, Headers} from '@angular/http';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  personlData = {};
  personalDataNode = {};
  newData = {};
  constructor(private dataser: DataServiceService, public http : Http) {
    this.dataser.loginedCustomerId.next("5c03c24fca156059ddf59140");
    this.dataser.getCustomerById('5c03c24fca156059ddf59140').subscribe(res => {
      var customerData = res.json();
      this.personlData = { 
        "id": customerData[0]._id,
        "name": customerData[0].name,
        "last_seen": customerData[0].last_seen,
        "profile_image": customerData[0].profile_image,
        "chat_list": this.dataser.getChatList(customerData[0].chat_ids, "5c03c24fca156059ddf59140")
      };
    });
  }

  dataMessage = [] ;
   
  ngOnInit() {
    this.getMessageData();
  }

  getMessageData() {
  }
  
  setMemberChatData(loginedCustomerId, chatId, chatWithCustomerId) {
    this.dataser.chatId = chatId;
    this.dataser.chatWithCustomerId = chatWithCustomerId;
    this.dataser.setMemberChatMessages();
  }

  setGroupChatData(loginedCustomerId, chatId, chatWithGroupId) {
    this.dataser.loginedCustomerId = loginedCustomerId;
    this.dataser.chatId = chatId;
    this.dataser.chatWithGroupId = chatWithGroupId;
    this.dataser.setGroupChatMessages();
  }
}
