import { Mail } from './Mail';
import { User } from './User';

export class ReceivedMail extends Mail {
    private receivedDate : string;
    private fromUser : User;

    constructor(title : string, body : string, receivedDate : string, user : User){
        super(title, body);
        this.receivedDate = receivedDate;
        this.fromUser = user;
    }

    // Get user who sent this mail
    public get getFromUser():User{
        return this.fromUser;
    }
}