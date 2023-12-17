import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  products:any[]=[1,2,3,4,5,6,7,8,9,10,10111,111111,2334556];
  elementsArray = ['Element 1', 'Element 2', 'Element 3', 'Element 4', 'Element 5', 'Element 6', 'Element 7'];

  // Variable to track the active chip index
  activeChipIndex = 0;

  // Function to handle chip clicks and set the active chip index
  setActiveChip(index: number) {
    this.activeChipIndex = index;
  }

}
