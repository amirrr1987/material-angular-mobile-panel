import { Component, inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BottomSheet } from './components/bottom-sheet';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@Component({
  selector: 'app-panel',
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    RouterLink,
    MatProgressBarModule,
  ],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
})
export class Panel {
  private _bottomSheet = inject<MatBottomSheet>(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheet);
  }

  public toggleTheme(): void {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    document.body.style.colorScheme = isDark ? 'dark' : 'light';
  }
}
