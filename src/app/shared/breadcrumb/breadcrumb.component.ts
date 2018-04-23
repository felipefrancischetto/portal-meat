import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Output() toggledSidebar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitToggleEvent() {
    this.toggledSidebar.emit();
  }

}

