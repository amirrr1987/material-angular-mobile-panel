import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

interface Setting {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-settings',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  public settings: Setting[] = [
    {
      id: 1,
      title: 'Settings',
      description: 'Settings',
    },
    {
      id: 2,
      title: 'Settings',
      description: 'Settings',
    },
    {
      id: 3,
      title: 'Settings',
      description: 'Settings',
    },
    {
      id: 4,
      title: 'Settings',
      description: 'Settings',
    },
  ];
}
