import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  personlData = {};
  personalDataNode = {};
  newData = {};
  constructor(private dataser: DataServiceService) {
    this.dataser.loginedCustomerId.next("5c03c24fca156059ddf59140");
    // this.personlData = dataser.getPersonalInfo(1);
    this.dataser.getCustomerById('5c03c24fca156059ddf59140').subscribe(res => {
      var customerData = res.json();
      this.personlData = {
        "id": customerData[0]._id,
        "name": customerData[0].name,
        "last_seen": customerData[0].last_seen,
        "profile_image": customerData[0].profile_image,
        "chat_list": this.dataser.getChatList(customerData[0].chat_ids, "5c03c24fca156059ddf59140")
      };
      console.log(customerData);
    });
  }

  ngOnInit() {
    // var chatIdsList = [ 
    //   "5c03c755ca156059ddf5932b",
    //   "5c03c79cca156059ddf5934c",
    //   "5c03c7cbca156059ddf5935f",
    //   "5c03c807ca156059ddf5937c",
    //   "5c03c839ca156059ddf59390",
    //   "5c03c86eca156059ddf593a3"
    // ];
    // for(var chatId in chatIdsList) {
    // 	console.log(chatIdsList[chatId]);
    // }
    // this.dataser.getChatsByIds(chatIdsList).subscribe(res => {
    //   console.log(res.json());
    // });  

  }
  userAllMessages;

  setMemberChatData(loginedCustomerId, chatId, chatWithCustomerId) {
    console.log("loginedCustomerId: " + loginedCustomerId + " chatId:" + chatId + " chatWithCustomerId:" + chatWithCustomerId );

    this.dataser.chatId = chatId;
    this.dataser.chatWithCustomerId = chatWithCustomerId;
    this.dataser.setMemberChatMessages();
    console.log(this.personlData);
  }

  setGroupChatData(loginedCustomerId, chatId, chatWithGroupId) {
    this.dataser.loginedCustomerId = loginedCustomerId;
    this.dataser.chatId = chatId;
    this.dataser.chatWithGroupId = chatWithGroupId;
    this.dataser.setGroupChatMessages();
  }
}
