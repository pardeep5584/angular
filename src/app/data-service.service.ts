import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject } from 'rxjs';
import {Http, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  // for message purpose
  chatId;
  chatWithCustomerId;
  chatWithGroupId;
  ///
  public isShowWelcomeMessage: BehaviorSubject<any> = new BehaviorSubject([true]);
  public isChatWithTypeInfo: BehaviorSubject<any> = new BehaviorSubject([]);

  public loginedCustomerId: BehaviorSubject<any> = new BehaviorSubject([]);
  public chatMessages: BehaviorSubject<any> = new BehaviorSubject([]);
  public chatWithCustomerInfo: BehaviorSubject<any> = new BehaviorSubject([]);
  public chatWithGroupInfo: BehaviorSubject<any> = new BehaviorSubject([]);

  setMemberChatMessages(){
    let messages = this.messageDetails.filter((message)=>{
        return message.chat_id == this.chatId;
    });
    console.log(messages); 
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
        "last_seen": [
            {
                "type": "m",
                "value": 1
            }
        ],
        "chat_ids": [
            1,
            2,
            3,
            4,
            5,
            6
        ],
        "_id": "5bc22e107941ab1414911048",
        "name": "pardeep kumar",
        "profile_image": "assets/images/customer-1-image.jpg"
    },
    {
        "last_seen": [
            {
                "type": "h",
                "value": 4
            }
        ],
        "chat_ids": [
            1,
            5,
            6
        ],
        "_id": "5bc22e7e7941ab1414911073",
        "name": "sonu kumars",
        "profile_image": "assets/images/sonu.jpeg"
    },
    {
        "last_seen": [
            {
                "type": "m",
                "value": 5
            }
        ],
        "chat_ids": [
            2,
            5
        ],
        "_id": "5bc22e947941ab141491107e",
        "name": "Dharmernder",
        "profile_image": "assets/images/dharmender.jpeg"
    },
    {
        "last_seen": [
            {
                "type": "m",
                "value": 21
            }
        ],
        "chat_ids": [
            3,
            6
        ],
        "_id": "5bc22ea07941ab1414911082",
        "name": "Paras agarwal",
        "profile_image": "assets/images/paras.jpeg"
    },
    {
        "last_seen": [
            {
                "type": "m",
                "value": 11
            }
        ],
        "chat_ids": [
            4,
            5
        ],
        "_id": "5bc22eab7941ab1414911087",
        "name": "rahul kumar",
        "profile_image": "assets/images/rahul.jpeg"
    }
];

chatTableData = [
    {
        "members": [
            "5bc22e107941ab1414911048",
            "5bc22e7e7941ab1414911073"
        ],
        "_id": "5bc2e14d7941ab1414911af7",
        "is_group": false,
        "last_message_id": "5bc2eb007941ab1414911e1b",
        "group_id": ""
    },
    {
        "members": [
            "5bc22e107941ab1414911048",
            "5bc22e947941ab141491107e"
        ],
        "_id": "5bc2e18d7941ab1414911b15",
        "is_group": false,
        "last_message_id": "5bc2ed507941ab1414911f4f",
        "group_id": ""
    },
    {
        "members": [
            "5bc22e107941ab1414911048",
            "5bc22ea07941ab1414911082"
        ],
        "_id": "5bc2e1a97941ab1414911b21",
        "is_group": false,
        "last_message_id": "5bc2ee177941ab1414911f89",
        "group_id": ""
    },
    {
        "members": [
            "5bc22e107941ab1414911048",
            "5bc22eab7941ab1414911087"
        ],
        "_id": "5bc2e1c97941ab1414911b32",
        "is_group": false,
        "last_message_id": "5bc2ee467941ab1414911f99",
        "group_id": ""
    },
    {
        "members": [
            "5bc22e947941ab141491107e",
            "5bc22e107941ab1414911048",
            "5bc22e7e7941ab1414911073",
            "5bc22eab7941ab1414911087"
        ],
        "_id": "5bc2e1ea7941ab1414911b43",
        "is_group": true,
        "last_message_id": "5bc2ee917941ab1414911faf",
        "group_id": "5b8f415e814d4af064d05f28"
    },
    {
        "members": [
            "5bc22ea07941ab1414911082",
            "5bc22e107941ab1414911048",
            "5bc22e7e7941ab1414911073"
        ],
        "_id": "5bc2e2937941ab1414911b84",
        "is_group": true,
        "last_message_id": "5bc2eebb7941ab1414911fc8",
        "group_id": "5b8f415e814d4af064d05f29"
    }
];

  groupData = [
    {
        "admin_id": [
            "5bc22e7e7941ab1414911073"
        ],
        "members": [
            "5bc22e107941ab1414911048",
            "5bc22e7e7941ab1414911073",
            "5bc22e947941ab141491107e",
            "5bc22eab7941ab1414911087"
        ],
        "_id": "5b8f415e814d4af064d05f28",
        "title": "rockstar",
        "image": "assets/images/aajtak.png"
    },
    {
        "admin_id": [
            "5bc22e107941ab1414911048",
            "5bc22e7e7941ab1414911073"
        ],
        "members": [
            "5bc22e107941ab1414911048",
            "5bc22e7e7941ab1414911073",
            "5bc22ea07941ab1414911082"
        ],
        "_id": "5b8f415e814d4af064d05f29",
        "title": "funny joks",
        "image": "assets/images/Zee-News-Network.jpg"
    }
];

  messageDetails = [
    {
        "_id": "5bc2eb007941ab1414911e1b",
        "chat_id": "5bc2e14d7941ab1414911af7",
        "message_body": "hi sonu, hi hasnd asd sa dasdas das das da sd adas   dasidsdweie ew 8ewr",
        "time": null,
        "owner_id": "5bc22e107941ab1414911048"
    },
    {
        "_id": "5bc2ed507941ab1414911f4f",
        "chat_id": "5bc2e18d7941ab1414911b15",
        "message_body": "hi pardeep",
        "time": null,
        "owner_id": "5bc22e947941ab141491107e"
    },
    {
        "_id": "5bc2ee177941ab1414911f89",
        "chat_id": "5bc2e1a97941ab1414911b21",
        "message_body": "hi Paras",
        "time": null,
        "owner_id": "5bc22e107941ab1414911048"
    },
    {
        "_id": "5bc2ee467941ab1414911f99",
        "chat_id": "5bc2e1c97941ab1414911b32",
        "message_body": "hi pardeep, k kar ha.",
        "time": null,
        "owner_id": "5bc22eab7941ab1414911087"
    },
    {
        "_id": "5bc2ee917941ab1414911faf",
        "chat_id": "5bc2e1ea7941ab1414911b43",
        "message_body": "Hi guys.",
        "time": null,
        "owner_id": "5bc22e107941ab1414911048"
    },
    {
        "_id": "5bc2eebb7941ab1414911fc8",
        "chat_id": "5bc2e2937941ab1414911b84",
        "message_body": "we have, crateat a group hoafdfid asd adasdas well are you.",
        "time": null,
        "owner_id": "5bc22ea07941ab1414911082"
    },
    {
        "_id": "5bc2eede7941ab1414911fd4",
        "chat_id": "5bc2e14d7941ab1414911af7",
        "message_body": "hi pardeep hho are you",
        "time": null,
        "owner_id": "5bc22e7e7941ab1414911073"
    }
];
    
  // getPersonalInfo(customerId) {
  //   // calll api for get customer personal info from database
  //   console.log("JAI SHREE RAM.");
  //   // set customer use for chat view component
  //   this.loginedCustomerId = customerId;
  //   var personalInfo = {};
  //   for( var customers in this.customerTableData) {
  //     if (this.customerTableData[customers].id == customerId) { 
  //       personalInfo = {
  //         "id" : this.customerTableData[customers].id,
  //         "name" : this.customerTableData[customers].name,
  //         "last_seen" : this.customerTableData[customers].last_seen,
  //         "profile_image" : this.customerTableData[customers].profile_image,
  //         "chat_list" : this.getChatList(this.customerTableData[customers].chat_ids, customerId)
  //       };
  //     }
  //   }
  //   return personalInfo;
  // }
    
  getChatList(chatIds, customerId) {
    // console.log(chatIds);
    var chatsList = [];
    var chatWithData;
    var indexOfRemoveElement;
    var memberArray;

    // work from here
    for(var chatId in chatIds) {
      for( var chatData in this.chatTableData) {
        // match customer chatId in chat table data.
        if ( this.chatTableData[chatData]._id == chatIds[chatId]) {

          // console.log("jai shani dev bhagwan ji");
          // console.log("jai shiv shankar bhagwan ji");
          // console.log("JAI SHREE RAM JI");
          // console.log("jai hanuman ji");

          if ( this.chatTableData[chatData].is_group ) {
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
            "chat_id" : this.chatTableData[chatData]._id,
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
      if (this.customerTableData[customers]._id == customerId) {
          chatWith = {
            "customer_id" : customerId,
            "name" : this.customerTableData[customers].name,
            "image" : this.customerTableData[customers].profile_image
          }
          break;  
      } 
    } 
    // var chatWithb;
    // this.getCustomerById('5bc22e107941ab1414911048').subscribe(res => {
    //   var customerData = res.json();
    //   console.log(customerData[0]._id);
    //   chatWithb = {
    //     "customer_id" : customerData[0]._id,
    //     "name" : customerData[0].name,
    //     "image" : customerData[0].profile_image
    //   }
    // });
    // return chatWithb;
    return chatWith;   
  }
  
  getChatWithGroup(groupId) {
    var chatWith;
    for( var group in this.groupData) {
      if (this.groupData[group]._id == groupId) {
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
      if (this.messageDetails[messge]._id == messageId) {
        lastMessageData =  {
          "message_body" : this.messageDetails[messge].message_body,
          "message_time" : ""//(this.messageDetails[messge].time).getHours()
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
      if (this.groupData[group]._id == groupId) {
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
      if (this.groupData[group]._id == groupId) {
        adminIds = this.groupData[group].admin_id;
        if(adminIds.indexOf(memberId) != -1) {
          return true;
        }
        break;
      }
    }
    return false;
  }

  // customers
  getCustomers() {
    console.log("JAI SHREE RAM JI");
    return this.http.get('http://localhost:8080/customers/');
  }

  createCustomer(data) {
    console.log("JAI SHREE RAM JI");
    return this.http.post(`http://localhost:8080/customer/`, data);
  }

  getCustomerById(id) {
    console.log("JAI SHREE RAM");
    return this.http.get(`http://localhost:8080/customer/${id}`);
  }

  updateCustomer(id, data) {
    console.log("JAI SHREE RAM");
    return this.http.put(`http://localhost:8080/customer/${id}`, data);
  }

  deleteCustomer(id) {
    console.log("JAI SHREE RAM");
    return this.http.delete(`http://localhost:8080/customercd/${id}`);
  }

  // chats
  getChatsByIds(ids) {
    console.log("JAI SHREE RAM");
    return this.http.get(`http://localhost:8080/chats/${ids}`);
  }

}
