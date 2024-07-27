import { Mail } from "./Mail";
import { MailBox } from "./Mailbox";
import { ReceivedMail } from "./ReceivedMail";
import { SentMail } from "./SendMail";
import { User } from "./User";

// User objects 
let user1 : User = new User("sal", "boy loy");
let user2 : User = new User("sal", "smart");

// SentMail objects 
let sentMail1 : SentMail = new SentMail("Meeting", "Hello", "23 Oct", user1);
let sentMail2 : SentMail = new SentMail("Sport", "Today", "20 Feb", user2);

// ReceievedMail Objects 
let receivedMail1 : ReceivedMail = new ReceivedMail("Movie", "PNC","10 Nov", user1);
let receivedMail2 : ReceivedMail = new ReceivedMail("Dating", "AEON","14 April", user2);

// MailBox Object 
let myMailBox : MailBox = new MailBox("Sal");

// Add mail to the mail box 
myMailBox.addReceiveMail(receivedMail1);
myMailBox.addReceiveMail(receivedMail2);
myMailBox.addSentMail(sentMail1);
myMailBox.addSentMail(sentMail2);

let allMails : Mail[] = myMailBox.getAllMails;

allMails.forEach(mail=>{
    if(mail instanceof ReceivedMail){      // instanceof : check which type of object.
        console.log("ReceivedMail from : " + `${mail.getFromUser.getFirstName + " "+ mail.getFromUser.getlastName}`);
    }
    else if(mail instanceof SentMail){
        console.log("SendMail to : " + `${mail.sendToUser.getFirstName + " "+ mail.sendToUser.getlastName}`);
    }
})

