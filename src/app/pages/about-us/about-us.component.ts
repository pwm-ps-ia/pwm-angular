import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  team = [
    {
      name: "Jose Peña Seco alias 'er pepe'",
      description: "Tengo 50 millones de poder en Rise of Kingdoms esconde a tu novia",
      avatar: '/assets/images/Pepe.png', 
    },
    {
      name: "Eric Cabrera Cruz 'no sabe git'",
      description: "Me pase el Halo Reach en legendario, no hit en una tarde sin llorar en el final",
      avatar: '/assets/images/Eric.jpg'
    },
    {
      name: "Joaquin Villamonte Jaeguer",
      description: "Le gané un 1 pa 1 a jaeguer en la velada se paso toda la saga del souls no hit en directo ",
      avatar :  '/assets/images/joaquin real no fake.jpg'
    }];
}
