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
        "_id": "5c03c24fca156059ddf59140",
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
        "_id": "5c03c269ca156059ddf59154",
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
        "_id": "5c03c285ca156059ddf5915e",
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
        "_id": "5c03c2b6ca156059ddf59177",
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
        "_id": "5c03c2c0ca156059ddf5917d",
        "name": "rahul kumar",
        "profile_image": "assets/images/rahul.jpeg"
    }
];

chatTableData = [ 
    {
        "members": [
            "5c03c24fca156059ddf59140",
            "5c03c269ca156059ddf59154"
        ],
        "_id": "5c03c755ca156059ddf5932b",
        "is_group": false,
        "last_message_id": "5c05574f3797d1446983e1c6",
        "group_id": ""
    },
    {
        "members": [
            "5c03c24fca156059ddf59140",
            "5c03c285ca156059ddf5915e"
        ], 
        "_id": "5c03c79cca156059ddf5934c",
        "is_group": false,
        "last_message_id": "5c0556793797d1446983e17e",
        "group_id": ""
    },
    {
        "members": [
            "5c03c24fca156059ddf59140",
            "5c03c2b6ca156059ddf59177"
        ],
        "_id": "5c03c7cbca156059ddf5935f",
        "is_group": false,
        "last_message_id": "5c05569f3797d1446983e18b",
        "group_id": ""
    },
    {
        "members": [
            "5c03c24fca156059ddf59140",
            "5c03c2c0ca156059ddf5917d"
        ],
        "_id": "5c03c807ca156059ddf5937c",
        "is_group": false,
        "last_message_id": "5c0556dd3797d1446983e19e",
        "group_id": ""
    },
    {
        "members": [
            "5c03c285ca156059ddf5915e",
            "5c03c24fca156059ddf59140",
            "5c03c269ca156059ddf59154",
            "5c03c2c0ca156059ddf5917d"
        ],
        "_id": "5c03c839ca156059ddf59390",
        "is_group": true,
        "last_message_id": "5c05570b3797d1446983e1af",
        "group_id": "5c03c4f8ca156059ddf59241"
    },
    {
        "members": [
            "5c03c2b6ca156059ddf59177",
            "5c03c24fca156059ddf59140",
            "5c03c269ca156059ddf59154"
        ],
        "_id": "5c03c86eca156059ddf593a3",
        "is_group": true,
        "last_message_id": "5c0557393797d1446983e1bf",
        "group_id": "5c03c52bca156059ddf5925a"
    }
];

groupData = [
    {
        "admin_id": [
            "5c03c269ca156059ddf59154"
        ],
        "members": [
            "5c03c24fca156059ddf59140",
            "5c03c269ca156059ddf59154",
            "5c03c285ca156059ddf5915e",
            "5c03c2c0ca156059ddf5917d"
        ],
        "_id": "5c03c4f8ca156059ddf59241",
        "title": "rockstar",
        "image": "assets/images/aajtak.png"
    },
    {
        "admin_id": [
            "5c03c24fca156059ddf59140",
            "5c03c269ca156059ddf59154"
        ],
        "members": [
            "5c03c24fca156059ddf59140",
            "5c03c269ca156059ddf59154",
            "5c03c2b6ca156059ddf59177"
        ],
        "_id": "5c03c52bca156059ddf5925a",
        "title": "funny joks",
        "image": "assets/images/Zee-News-Network.jpg"
    }
];

messageDetails = [
    {
        "_id": "5c05562e3797d1446983e15f",
        "chat_id": "5c03c755ca156059ddf5932b",
        "message_body": "hi sonu, hi hasnd asd sa dasdas das das da sd adas   dasidsdweie ew 8ewr",
        "time": null,
        "owner_id": "5c03c24fca156059ddf59140"
    },
    {
        "_id": "5c0556793797d1446983e17e",
        "chat_id": "5c03c79cca156059ddf5934c",
        "message_body": "hi pardeep",
        "time": null,
        "owner_id": "5c03c285ca156059ddf5915e"
    },
    {
        "_id": "5c05569f3797d1446983e18b",
        "chat_id": "5c03c7cbca156059ddf5935f",
        "message_body": "hi Paras",
        "time": null,
        "owner_id": "5c03c24fca156059ddf59140"
    },
    {
        "_id": "5c0556dd3797d1446983e19e",
        "chat_id": "5c03c807ca156059ddf5937c",
        "message_body": "hi pardeep, k kar ha.",
        "time": null,
        "owner_id": "5c03c2c0ca156059ddf5917d"
    },
    {
        "_id": "5c05570b3797d1446983e1af",
        "chat_id": "5c03c839ca156059ddf59390",
        "message_body": "Hi guys.",
        "time": null,
        "owner_id": "5c03c24fca156059ddf59140"
    },
    {
        "_id": "5c0557393797d1446983e1bf",
        "chat_id": "5c03c86eca156059ddf593a3",
        "message_body": "we have, crateat a group hoafdfid asd adasdas well are you.",
        "time": null,
        "owner_id": "5c03c2b6ca156059ddf59177"
    },
    {
        "_id": "5c05574f3797d1446983e1c6",
        "chat_id": "5c03c755ca156059ddf5932b",
        "message_body": "hi pardeep hho are you",
        "time": null,
        "owner_id": "5c03c269ca156059ddf59154"
    }
];
    
getChatList(chatIds, customerId) {
    var chatsList = []; 
    var chatWithData;
    var indexOfRemoveElement;
    var memberArray;

    for(var chatId in chatIds) {
      for( var chatData in this.chatTableData) {
        if ( this.chatTableData[chatData]._id == chatIds[chatId]) {
          if ( this.chatTableData[chatData].is_group ) {
            chatWithData = this.getChatWithGroup(this.chatTableData[chatData].group_id);
          } else {
            memberArray = this.chatTableData[chatData].members;
            indexOfRemoveElement = (memberArray .indexOf(customerId));
            memberArray.splice(indexOfRemoveElement,1);
            chatWithData = this.getChatWithCustomer(memberArray[0]);
          }
          chatsList.push({
            "chat_id" : this.chatTableData[chatData]._id,
            "is_group": this.chatTableData[chatData].is_group,
            "chat_with_data" : chatWithData,
            "last_message" : this.getLastMessage(this.chatTableData[chatData].last_message_id)
          });
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
        // groupMemberInfo = {
        //   "member_details" : this.getChatWithCustomer(customerIdSet[custId]),
        //   "is_admin"       : this.isMemberAdmin(groupId, customerIdSet[custId])
        //   }; 
        groupMemberInfo = {
            "member_details" : this.getChatWithCustomer(customerIdSet[custId])
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

/////////////////////////////////////////////////////////
public  getttingGropPopInfo : BehaviorSubject<any> = new BehaviorSubject([]);
getGroupParticipant(groupId) {
    let lastMessageData = {};
    let promise = new Promise((resolve, reject) => {
        this.http.get(`http://localhost:8080/getGroupParticipantInfo/${groupId}`)
          .toPromise()
          .then(
            res => {
                var d = res.json(); 
                // console.log(this.groupCusterCollectionInfo);
                resolve();
                this.getttingGropPopInfo.next(d); 
            }
          );
    });
    return promise;
}
/////////////////////////////////////////////////////////
  // customers api calls
getCustomers() {
    return this.http.get(`http://localhost:8080/customers/`);
}

createCustomer(data) {
    return this.http.post(`http://localhost:8080/customer/`, data);
}

getCustomerById(id) {
    return this.http.get(`http://localhost:8080/customer/${id}`);
}

updateCustomer(id, data) {
    return this.http.put(`http://localhost:8080/customer/${id}`, data);
}

deleteCustomer(id) { 
    return this.http.delete(`http://localhost:8080/customercd/${id}`);   
}

// groups api call
getGroupsById(id) {
    return this.http.get(`http://localhost:8080/group/${id}`);
}

// chats
getChatsByIds(ids) {
    console.log("JAI SHREE RAM");
    return this.http.get(`http://localhost:8080/chat/${ids}`);
}

// messages
getMessageByIds(ids) {
    console.log("JAI SHREE RAM");
    return this.http.get(`http://localhost:8080/message/${ids}`);
}

}
