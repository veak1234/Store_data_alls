import { CalendarManager } from "./calendar/CalendarManager";
import { RoomsManager } from "./rooms/RoomsManager";
import { HumanManager } from "./human/HumanManager";

export class Hospital {
  // Hospital attributes
  private address?: string;
  private name: string;

  // public services
  public calendar: CalendarManager = new CalendarManager();
  public rooms: RoomsManager = new RoomsManager();
  public hr: HumanManager = new HumanManager();

  constructor(name: string, address?: string) {
    this.name = name;
    this.address = address;
  }
}
