import { Mail } from './Mail';
import { SentMail } from './SendMail';
import { ReceivedMail } from './ReceivedMail';

export class MailBox {
    private name : string;
    private mails : Mail[] = [];

    constructor(name : string){
        this.name = name;
    }

    // Add sent mail to the box
    public addSentMail(mail : SentMail):boolean{
        this.mails.push(mail);
        return true;
    }

    // Add receive mail to the box
    public addReceiveMail(mail : ReceivedMail):boolean{
        this.mails.push(mail);
        return true;
    }

    // Get all mails in the mailbox 
    public get getAllMails():Mail[]{
        return this.mails;
    }
}