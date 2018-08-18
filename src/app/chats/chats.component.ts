import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  ngOnInit() {
  }
  personlData = {} ; 

  constructor ( private dataser : DataServiceService ) {
    this.personlData = dataser.getPersonalInfo(1);
  } 
 
  setMemberChatData(loginedCustomerId, chatId, chatWithCustomerId) {
    this.dataser.loginedCustomerId = loginedCustomerId;
    this.dataser.chatId = chatId;
    this.dataser.chatWithCustomerId = chatWithCustomerId;
    // set and flag that used to check that is one to one chat or its group chat
    // this.dataser.isChatWithMember = true;
    this.dataser.setMemberChatMessages();
    
  }

  setGroupChatData(loginedCustomerId, chatId, chatWithGroupId) {
    this.dataser.loginedCustomerId = loginedCustomerId;
    this.dataser.chatId = chatId;
    this.dataser.chatWithGroupId = chatWithGroupId;
    // set and flag that used to check that is one to one chat or its group chat
    // this.dataser.isChatWithMember = false;
    this.dataser.setGroupChatMessages();
  }
}
