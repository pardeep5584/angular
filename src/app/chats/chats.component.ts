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
  personalDataNode = {};
  constructor ( private dataser : DataServiceService ) {
    this.personlData = dataser.getPersonalInfo(1);

    // this.personalDataNode = dataser.getPersonalInfo(1);

  } 
 
  userAllMessages;
  setMemberChatData(loginedCustomerId, chatId, chatWithCustomerId) {
    this.dataser.loginedCustomerId = loginedCustomerId;
    this.dataser.chatId = chatId;
    this.dataser.chatWithCustomerId = chatWithCustomerId;
    this.dataser.setMemberChatMessages();
    // console.log("----------------//////-----------------");
    // this.dataser.getCustomById().subscribe((resNew)=>console.log(resNew.json()));
    // this.dataser.getCustomById().subscribe(
    //   function(res) {
    //     // console.log(res.json())
    //     this.userAllMessages = res.json();
    //     console.log(this.userAllMessages);
    //   }
    // );
  }

  setGroupChatData(loginedCustomerId, chatId, chatWithGroupId) {
    this.dataser.loginedCustomerId = loginedCustomerId;
    this.dataser.chatId = chatId;
    this.dataser.chatWithGroupId = chatWithGroupId;
    this.dataser.setGroupChatMessages();
  }
}
