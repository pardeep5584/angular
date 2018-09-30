import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject } from 'rxjs';
import {Http, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  // for message purpose
  loginedCustomerId ; 
  chatId;
  chatWithCustomerId;
  chatWithGroupId;
  mainCustomerId;
  ///
  public isShowWelcomeMessage: BehaviorSubject<any> = new BehaviorSubject([true]);
  public isChatWithTypeInfo: BehaviorSubject<any> = new BehaviorSubject([]);

  public chatMessages: BehaviorSubject<any> = new BehaviorSubject([]);
  public chatWithCustomerInfo: BehaviorSubject<any> = new BehaviorSubject([]);
  public chatWithGroupInfo: BehaviorSubject<any> = new BehaviorSubject([]);

 
  // function called by chat.component
  setMemberChatMessages(){
    // console.log("a--------->"+this.getCustomById().subscribe((resNew)=>console.log(resNew.json())));
    // var a = this.getCustomById().subscribe((resNew)=>console.log(resNew.json()));
    // console.log("a"+a);

    let messages = this.messageDetails.filter((message)=>{
        return message.chat_id == this.chatId;
    });
    this.chatMessages.next(messages); 
    this.chatWithCustomerInfo.next(this.getChatWithCustomer(this.chatWithCustomerId));      
    this.isChatWithTypeInfo.next(true); 
    this.isShowWelcomeMessage.next(false);
  }

  setGroupChatMessages(){
    let messages = this.messageDetails.filter((message)=>{
        return message.chat_id == this.chatId;
    });
    this.chatMessages.next(messages); 
    this.chatWithGroupInfo.next(this.getChatWithGroup(this.chatWithGroupId));      
    this.isChatWithTypeInfo.next(false); 
    this.isShowWelcomeMessage.next(false);
  }

  constructor(public http : Http) {
    
   }
  customerTableData = [
    {
      "id" : 1,
      "name" : "pardeep kumar",
      "last_seen" : {
        "type" : "m",
        "value" : 1
      },
      "profile_image" : "assets/images/customer-1-image.jpg",
      "chat_ids" : [1,2,3,4,5,6]
    },
    {
      "id" : 2,
      "name" : "sonu kumars",
      "last_seen" : {
        "type" : "h",
        "value" : 4
      },
      "profile_image" : "assets/images/sonu.jpeg",
      "chat_ids" : [1,5,6]
    },
    {
      "id" : 3,
      "name" : "Dharmernder",
      "last_seen" : {
        "type" : "m",
        "value" : 5
      },
      "profile_image" : "assets/images/dharmender.jpeg",
      "chat_ids" : [2,5]
    },
    {
      "id" : 4,
      "name" : "Paras agarwal",
      "last_seen" : {
        "type" : "m",
        "value" : 21
      },
      "profile_image" : "assets/images/paras.jpeg",
      "chat_ids" : [3,6]
    },
    {
      "id" : 5,
      "name" : "rahul kumar",
      "last_seen" : {
        "type" : "m",
        "value" : 11
      },
      "profile_image" : "assets/images/rahul.jpeg",
      "chat_ids" : [4,5] 
    }
  ];

  chatTableData = [
    { 
      "id" : 1,
      "is_group" : false,
      "members" : [1,2],
      "last_message_id" : 1,
      "group_id" : ""
    },
    {
      "id" : 2,
      "is_group" : false,
      "members" : [1,3],
      "last_message_id" : 2,
      "group_id" : ""
    },
    {
      "id" : 3,
      "is_group" : false,
      "members" : [1,4],
      "last_message_id" : 3,
      "group_id" : ""
    },
    {
      "id" : 4,
      "is_group" : false,
      "members" : [1,5],
      "last_message_id" : 4,
      "group_id" : ""
    },
    {
      "id" : 5,
      "is_group" : true,
      "members" : [3,1,2,5],
      "last_message_id" : 5,
      "group_id" : 1
    },
    {
      "id" : 6,
      "is_group" : true,
      "members" : [4,1,2],
      "last_message_id" : 6,
      "group_id" : 2
    }
  ];

  groupData = [
    {
      "group_id" : 1,
      "title" : "rockstar",
      "image" : "assets/images/aajtak.png",
      "admin_id" : [2],
      "members" : [1,2,3,5]
    },
    {
      "group_id" : 2,
      "title" : "funny joks",
      "image" : "assets/images/Zee-News-Network.jpg",
      "admin_id" : [1,2],
      "members" : [1,2,4]
    }
  ];

  messageDetails = [
    {
      "message_id" : 1,
      "chat_id" : 1,
      "message_body" : "hi sonu, hi hasnd asd sa dasdas das das da sd adas dasidsdweie ew 8ewr",
      "time" : new Date(),
      "owner_id" : 1
    },
    {
      "message_id" : 2,
      "chat_id" : 2,
      "message_body" : "hi pardeep",
      "time" : new Date(),
      "owner_id" : 3
    },
    {
      "message_id" : 3,
      "chat_id" : 3,
      "message_body" : "hi Paras",
      "time" : new Date(),
      "owner_id" : 1
    },
    {
      "message_id" : 4,
      "chat_id" : 4,
      "message_body" : "hi pardeep, k kar ha.",
      "time" : new Date(),
      "owner_id" : 5
    },
    {
      "message_id" : 5,
      "chat_id" : 5,
      "message_body" : "Hi guys.",
      "time" : new Date("2018/08/10 10:09:23"),
      "owner_id" : 1
    },
    {
      "message_id" : 6,
      "chat_id" : 6,
      "message_body" : "we have, crateat a group hoafdfid asd adasdas well are you.",
      "time" : new Date(),
      "owner_id" : 4
    },
    {
      "message_id" : 7,
      "chat_id" : 1,
      "message_body" : "hi pardeep hho are you",
      "time" : new Date(),
      "owner_id" : 2
    }

  ];
    
  getPersonalInfo(customerId) {
    // calll api for get customer personal info from database
    console.log("JAI SHREE RAM.");
    // set customer use for chat view component
    this.mainCustomerId = customerId;

    var personalInfo = {};
    for( var customers in this.customerTableData) {
      if (this.customerTableData[customers].id == customerId) { 
        personalInfo = {
          "id" : this.customerTableData[customers].id,
          "name" : this.customerTableData[customers].name,
          "last_seen" : this.customerTableData[customers].last_seen,
          "profile_image" : this.customerTableData[customers].profile_image,
          "chat_list" : this.getChatList(this.customerTableData[customers].chat_ids, customerId)
        };
      }
    }
    return personalInfo;
  }

  getCustomById() {
    return this.http.get('http://localhost:8080/customer/5ba7233c29f6f8f3ff811fed');
  }

  getChatList(chatIds, customerId) {
    var chatsList = [];
    var chatWithData;
    var indexOfRemoveElement;
    var memberArray;
    for(var chatId in chatIds) {
      for( var chatData in this.chatTableData) {
        // match customer chatId in chat table data.
        if ( this.chatTableData[chatData].id == chatIds[chatId]) {
          if ( this.chatTableData[chatData].is_group ) {
            // console.log(this.chatTableData[chatData].group_id); 
            chatWithData = this.getChatWithGroup(this.chatTableData[chatData].group_id);
          } else {
            //get array diff this.chatTableData[chatData].members and customerId => getname(diff)
            memberArray = this.chatTableData[chatData].members;
            indexOfRemoveElement = (memberArray .indexOf(customerId));
            memberArray.splice(indexOfRemoveElement,1);
            chatWithData = this.getChatWithCustomer(memberArray[0]);
          }
          // push data in array;
          chatsList.push({
            "chat_id" : this.chatTableData[chatData].id,
            "is_group": this.chatTableData[chatData].is_group,
            "chat_with_data" : chatWithData,
            "last_message" : this.getLastMessage(this.chatTableData[chatData].last_message_id)
          });
          // break the for loop if we got chat datas.
          break;
        }
      }   
    }
    return (chatsList); 
  }

  getChatWithCustomer(customerId) {
    var chatWith;
    for( var customers in this.customerTableData) {
      if (this.customerTableData[customers].id == customerId) {
          chatWith = {
            "customer_id" : customerId,
            "name" : this.customerTableData[customers].name,
            "image" : this.customerTableData[customers].profile_image
          }
          break;  
      } 
    } 
    return chatWith;   
  }

	getAllGroups() {
		return this.http.get('http://localhost:8080/group');
	}
  
  getChatWithGroup(groupId) {
    var chatWith;
    for( var group in this.groupData) {
      if (this.groupData[group].group_id == groupId) {
        // console.log(this.groupData[group].admin_id);
          chatWith = {
            "group_id" : groupId,
            "name" : this.groupData[group].title,
            "image" : this.groupData[group].image,
            "totalMembers" : this.groupData[group].members.length
          }   
      break;    
      }
    } 
    return chatWith;   
  }

  getLastMessage(messageId) {
    // return messageId;
    var lastMessageData = {};
    for( var messge in this.messageDetails) {
      if (this.messageDetails[messge].message_id == messageId) {
        lastMessageData =  {
          "message_body" : this.messageDetails[messge].message_body,
          "message_time" : (this.messageDetails[messge].time).getHours()
        };
        break;
      }  
    }
    return lastMessageData;  
  }
  
  getGroupParticipantInfo( customerId, groupId) {
    var customerIdSet;
    var customerParticipantList = [];
    var groupMemberInfo;
    for( var group in this.groupData) {
      if (this.groupData[group].group_id == groupId) {
        customerIdSet = this.groupData[group].members;
        break; 
      }
    }
    for( var custId in customerIdSet) {
        groupMemberInfo = {
          "member_details" : this.getChatWithCustomer(customerIdSet[custId]),
          "is_admin"       : this.isMemberAdmin(groupId, customerIdSet[custId])
          }; 
        customerParticipantList.push(groupMemberInfo);
    }
    
    return customerParticipantList;
  }

  isMemberAdmin(groupId, memberId) {
    var adminIds;
    for( var group in this.groupData) {
      if (this.groupData[group].group_id == groupId) {
        adminIds = this.groupData[group].admin_id;
        if(adminIds.indexOf(memberId) != -1) {
          return true;
        }
        break;
      }
    }
    return false;
  }

}
