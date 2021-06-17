import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-block',
  templateUrl: './project-block.component.html',
  styleUrls: ['./project-block.component.scss']
})
export class ProjectBlockComponent implements OnInit {
  @Input() title: String | undefined;
  @Input() type: String | undefined;
  @Input() description: String | undefined;
  @Input() imageSource: String | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
