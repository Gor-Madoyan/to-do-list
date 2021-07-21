export class LogicToDoList{
    constructor() {

    }
    
  searchValue:string = ''
  items:Array<string> = ['Gor', 'Lilit', 'Hovhannes']
  fakeData:Array<string> = [...this.items]
  // fakeData:Array<string> = [...this.items]
  searchFildClean :string = ''

  addItem(val:string) {
    this.items.push(val)
    this.fakeData.push(val)
  };

  remove(index:number) {
    this.items.splice(index,1)
    this.searchValue
    console.log('remove button');    
  };
  
  
  count:number = 0
  time:any

  search(item:any) {
 
    if(!this.count) {
       this.time =  setTimeout (()=>{
        this.items.filter((val:any, i:number)=>{
     
            return val === item        
          }).map((val:string, i:number)=>{
            this.items = [];
            this.items[i] = val
          }) 
        }, 2000)
    }else {
      this.count = 0
      clearTimeout(this.time)
    }
    !item? this.items = this.fakeData:item
  }

  
}


