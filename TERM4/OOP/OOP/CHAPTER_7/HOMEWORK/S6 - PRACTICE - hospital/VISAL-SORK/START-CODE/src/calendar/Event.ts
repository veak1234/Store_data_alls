import { DateTime } from "./DateTime";

export enum EventCategory {
  DOCTOR_APPOINTEMENT,
}

export abstract class Event {
  constructor(
    protected category: EventCategory,
    protected start: DateTime,
    protected end: DateTime
  ) {}
}
