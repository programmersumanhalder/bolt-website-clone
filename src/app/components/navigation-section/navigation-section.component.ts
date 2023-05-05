import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation-section',
  templateUrl: './navigation-section.component.html',
  styleUrls: ['./navigation-section.component.scss'],
})
export class NavigationSectionComponent {
  @ViewChild('dropdownButton') dropdownButton!: ElementRef;

  changeIcon(iconClass: string) {
    const buttonIcon = this.dropdownButton.nativeElement.querySelector('i');
    buttonIcon.className = iconClass;
  }
}
