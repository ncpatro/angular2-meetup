import { Component } from '@angular/core';

@Component({
    selector: 'my-meetups',
    templateUrl: 'app/meetup/meetup-list.component.html'

})
export class MeetupListComponent {
    pageTitle: string = 'Meetup List';
    imageWidth: number = 100;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    meetups: any[] = [
        {
            "meetupId": 2,
            "meetupName": "MongoDB",
            "meetupDate": "August 20, 2016",
            "description": "Hands on MongoDB",
            "price": 'Free',
            "starRating": 4.2,
            "imageUrl": "https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg"
        },
        {
            "meetupId": 3,
            "meetupName": "Angular 2",
            "meetupDate": "August 20, 2016",
            "description": "Angular 2 Basic",
            "price": 'Free',
            "starRating": 4.1,
            "imageUrl": "https://files.readme.io/dE3raNKdQqSAhldyNm7d_AngularJS_logo.svg.png"
        }
    ];
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}