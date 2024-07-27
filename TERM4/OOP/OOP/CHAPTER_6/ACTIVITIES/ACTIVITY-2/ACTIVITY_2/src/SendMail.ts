import { Mail } from './Mail';
import { User } from './User';
import { MailBox } from './Mailbox';

export class SentMail extends Mail {
    private sentDate : string;
    private toUser : User;

    constructor(title : string, body : string, sentDate :string, user : User){
        super(title, body);
        this.sentDate = sentDate;
        this.toUser = user;
    }

    // Get user who receive this mail
    public get sendToUser():User{
        return this.toUser;
    }
}