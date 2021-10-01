import { Component, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() isScrolledDown: boolean = false

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    window.addEventListener('scroll', () => {
      this.isScrolledDown = window.scrollY > window.innerHeight * 0.7 ? true : false
    })
  }

  scrollToSection(sectionName: string) {
    // Is this optimal? No... Was I lazy? Yes!
    document.getElementById(sectionName.toLowerCase())?.scrollIntoView({
      behavior: 'smooth'
    })
  }
  
  scrollToTop() {
    // Is this optimal? No... Was I lazy? Yes!
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
