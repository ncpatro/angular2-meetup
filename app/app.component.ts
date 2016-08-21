import {Component} from '@angular/core'
import {MeetupListComponent} from './meetup/meetup-list.component'
@Component({
  selector:'my-app',
  template: `
  <div>
  <h1>{{pageTilte}}</h1>
  <my-meetups></my-meetups>
  </div>`,
  directives: [MeetupListComponent]
})
export class AppComponent{
  pageTilte: string = 'Wecome to Meetup';
}