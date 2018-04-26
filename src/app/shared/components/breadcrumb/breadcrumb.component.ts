import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Output() toggledSidebar = new EventEmitter();

  @Input() titleParent;
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

  emitToggleEvent() {
    this.toggledSidebar.emit();
  }

}

