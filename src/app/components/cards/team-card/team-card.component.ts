import { Component, Input } from '@angular/core';

interface TeamMember{
  name : string,
  description: string,
  avatar : string
};

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent {
    @Input() Member!: TeamMember;
    @Input() Index!: number;

}
