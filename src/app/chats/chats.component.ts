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
    this.dataser.loginedCustomerId.next("5bc22e107941ab1414911048");
    // this.personlData = dataser.getPersonalInfo(1);
    this.dataser.getCustomerById('5bc22e107941ab1414911048').subscribe(res => {
      var customerData = res.json();
      this.personlData = {
        "id": customerData[0]._id,
        "name": customerData[0].name,
        "last_seen": customerData[0].last_seen,
        "profile_image": customerData[0].profile_image,
        "chat_list": this.dataser.getChatList(customerData[0].chat_ids, "5bc22e107941ab1414911048")
      };
      // console.log(this.personlData);
    });
  }

  ngOnInit() {
  }
  userAllMessages;

  setMemberChatData(loginedCustomerId, chatId, chatWithCustomerId) {
    console.log("loginedCustomerId: " + loginedCustomerId + " chatId:" + chatId + " chatWithCustomerId:" + chatWithCustomerId );

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
