export enum EventCategory {
  DOCTOR_APPOINTEMENT,
}

export abstract class Event {
  constructor(
    protected category: EventCategory,
    protected start: Date,
    protected end: Date
  ) {}

  getCategogy() {
    return this.category;
  }

  contains(date: Date): boolean {
    return (
      this.start.getTime() > date.getTime() &&
      this.end.getTime() < date.getTime()
    );
  }
}
