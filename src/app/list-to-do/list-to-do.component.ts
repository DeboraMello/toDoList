import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {

  doList: string[] = [];
  doneList: string[] = [];
  newItem!: string;

  addToDo() {
    this.doList.push(this.newItem);
    this.newItem = "";

  }
  
  doItem(index: number) {
    this.doneList.push(this.doList[index]);
    this.doList.splice(index, 1);
  }

  doneItem(event: any) {
    let element = event.target.parentElement.textContent;
    this.doList.push(element);
    this.doneList = this.doneList.filter(item => item !== element)

  }

  delete(event: any) {
    event.target.parentNode.remove();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
