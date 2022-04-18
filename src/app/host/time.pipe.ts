import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes = Math.floor(value / 60);
    const seconds = String(value % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
}
