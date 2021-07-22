import { ThisReceiver } from '@angular/compiler';
import { Component} from '@angular/core';
import { LogicToDoList } from './logic'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   logicObj = new LogicToDoList()
    sayData(val:string) {
      console.log(val);
      
    }
  addItem(val:string) {
    this.logicObj.addItem(val)
  };
  remove(index:number) {
    this.logicObj.remove(index)
  }
  search(item:any) {
    this.logicObj.search(item)
}
}


