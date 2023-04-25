import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  team = [
    {
      name: "pepe",
      description: "pepe es god",
      avatar: '/assets/images/Pepe.png', 
    },
    {
      name: "eric",
      description: "eric es god",
      avatar: '/assets/images/Eric.jpg'
    },
    {
      name: "joaquin",
      description: "joaquin es god",
      avatar :  '/assets/images/joaquin real no fake.jpg'
    }];
}
