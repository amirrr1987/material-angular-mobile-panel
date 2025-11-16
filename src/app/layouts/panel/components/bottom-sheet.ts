import { Component, inject } from '@angular/core';
import { MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.html',
  imports: [MatListModule, MatBottomSheetModule, MatButtonModule, MatBottomSheetModule],
})
export class BottomSheet {
  private _bottomSheetRef = inject<MatBottomSheetRef<BottomSheet>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
