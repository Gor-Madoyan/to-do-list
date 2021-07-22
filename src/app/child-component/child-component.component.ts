import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {


  @Output() removeButton = new EventEmitter()
  @Input() itemFromParent:string = ''

  constructor() { }

  destroyButton() {
    this.removeButton.emit(this.itemFromParent)
  }

  ngOnInit(): void {
  }

}
