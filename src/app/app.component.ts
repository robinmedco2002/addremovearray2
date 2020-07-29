import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Add or Remove Employee List';

contactlist;
txtName;

ngOnInit() {
  this.contactlist=[
  
 
  ]
}
addContact() {
  console.log(this.txtName);
  this.contactlist.push(
    {name: this.txtName}
  )
}

deleteContact(name){
  console.log(name)

  for(var i=0; i<this.contactlist.length; i++){

    if(this.contactlist[i]['name']==name){
      this.contactlist.splice(i, 1);
    }
  }
}
}



