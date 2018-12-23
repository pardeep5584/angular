import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject } from 'rxjs';
import {Http, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

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
  public  getttingGropPopInfo : BehaviorSubject<any> = new BehaviorSubject([]);

  setMemberChatMessages(){
    this.getMessageForChat(this.chatId);
    this.getChatWithCustomerInfo(this.chatWithCustomerId);   

    this.isChatWithTypeInfo.next(true); 
    this.isShowWelcomeMessage.next(false);
  }

  setGroupChatMessages(){
    this.getMessageForChat(this.chatId);
    this.getChatWithGroupInfo(this.chatWithGroupId);       

    this.isChatWithTypeInfo.next(false); 
    this.isShowWelcomeMessage.next(false);
  }

  constructor(public http : Http) {
    
  }
    
//     for( var custId in customerIdSet) {
//         // groupMemberInfo = {
//         //   "member_details" : this.getChatWithCustomer(customerIdSet[custId]),
//         //   "is_admin"       : this.isMemberAdmin(groupId, customerIdSet[custId])
//         //   }; 
//         groupMemberInfo = {
//             "member_details" : this.getChatWithCustomer(customerIdSet[custId])
//         }; 
//         customerParticipantList.push(groupMemberInfo);
//     }
//     return customerParticipantList;
// }

// isMemberAdmin(groupId, memberId) {
//     var adminIds;
//     for( var group in this.groupData) {
//       if (this.groupData[group]._id == groupId) {
//         adminIds = this.groupData[group].admin_id;
//         if(adminIds.indexOf(memberId) != -1) {
//           return true;
//         }
//         break;
//       }
//     }
//     return false; 
//   }

/////////////////////////////////////////////////////////

getCustomerPersonalDetails(customerId) {
    console.log("JAI GANESH BHAGWAN JI");
    console.log("JAI SHREE RAM");
    return this.http.get(`http://localhost:8080/chatinfo/${customerId}`);
}

getGroupParticipant(groupId) {
    let lastMessageData = {};
    let promise = new Promise((resolve, reject) => {
        this.http.get(`http://localhost:8080/getGroupParticipantInfo/${groupId}`)
          .toPromise()
          .then(
            res => {
                var d = res.json(); 
                resolve();
                this.getttingGropPopInfo.next(d); 
            }
          );
    });
    return promise;
}

getMessageForChat(chatIs) {
    let promise = new Promise((resolve, reject) => {
        this.http.get(`http://localhost:8080/chat/${chatIs}/messages`)
          .toPromise()
          .then(
            res => {
                var messages = res.json(); 
                this.chatMessages.next(messages);
                resolve(); 
            }
          );
    });
    return promise;
}

getChatWithGroupInfo(groupId) {
    let promise = new Promise((resolve, reject) => {
        this.http.get(`http://localhost:8080/group/${groupId}`)
          .toPromise()
          .then(
            res => {
                var infoGroup = res.json(); 
                this.chatWithGroupInfo.next(infoGroup);
                resolve(); 
            }
          );
    });
    return promise;
}

getChatWithCustomerInfo(customerId) {
    let promise = new Promise((resolve, reject) => {
        this.http.get(`http://localhost:8080/customerinfo/${customerId}`)
          .toPromise()
          .then(
            res => {
                var infoCustomer = res.json(); 
                this.chatWithCustomerInfo.next(infoCustomer);
                resolve(); 
            }
          );
    }); 
    return promise; 
}

}