import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-chatview',
  templateUrl: './chatview.component.html',
  styleUrls: ['./chatview.component.css']
})
export class ChatviewComponent implements OnInit {
 
  isWelcomeMessge;
  isChatWithFlag;
  messages;
  chatWithMemberDetails;
  chatWithGroupDetails;
  // customer id
  mainCustomerId;
  constructor ( private dataser : DataServiceService ) {
    this.mainCustomerId = dataser.mainCustomerId;
    // flag
    // for show welcome message
    this.dataser.isShowWelcomeMessage.subscribe((data) =>{
      this.isWelcomeMessge = data;
      console.log(this.isWelcomeMessge);
    });
    // got one to one or one to many
    this.dataser.isChatWithTypeInfo.subscribe((data) =>{
      this.isChatWithFlag = data;
      console.log(this.isChatWithFlag);
    }); 
    // chat messages
    this.dataser.chatMessages.subscribe(data => { 
      this.messages = data;
      console.log(this.messages);
    });
    // chat with customer
    this.dataser.chatWithCustomerInfo.subscribe(data => {
      this.chatWithMemberDetails = data;
      console.log(this.chatWithMemberDetails);
    }); 
    // chat with group 
    this.dataser.chatWithGroupInfo.subscribe(data => {
      this.chatWithGroupDetails = data;
      console.log(this.chatWithGroupDetails);
    }); 


    
  }

  ngOnInit() {
  }
  participantInfo;
  getGroupParticipantInfo( customerId, groupId) {
    this.participantInfo = this.dataser.getGroupParticipantInfo(customerId, groupId);
    console.log(this.participantInfo);
  }

}
