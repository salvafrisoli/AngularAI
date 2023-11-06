import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/models/auto';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  autoList = new Array<Auto>()

  constructor(private autoService: AutoService){ }
  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.autoService.getAll().subscribe(response => {
      this.autoList = response
      console.log(this.autoList)
    }, error => {
      alert(error.error.message)
      console.log(error)
    })

  }
  view(id: number) {}

  delete(id: number) {}
}
