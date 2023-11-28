import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Auto } from 'src/app/models/auto';
import { NgForm } from '@angular/forms'
import { Duenio } from 'src/app/models/duenio';
import { AutoService } from 'src/app/services/auto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  addbtn:boolean = true;
  updatebtn: boolean = false;

  autoList = new Array<Auto>()
  duenioList = new Array<Duenio>()
  auto = new Auto()
  autoForm: FormGroup
  @ViewChild('autoForm') form: NgForm;

  constructor(private autoService: AutoService, private route: Router) { }
  ngOnInit(): void {
    this.autoForm = new FormGroup({
      'id': new FormControl(this.auto.id, Validators.required),
      'name': new FormControl(this.auto.name, Validators.required),
      'date_fab': new FormControl(this.auto.date_fab, Validators.required),
      'model': new FormControl(this.auto.model, Validators.required)

    })
    this.getAll()
  }

  get id() { return this.autoForm.get('id') as FormControl }
  get name() { return this.autoForm.get('name') as FormControl }
  get date_fab() { return this.autoForm.get('date_fab') as FormControl }
  get model() { return this.autoForm.get('model') as FormControl }


  getAll() {
    this.autoService.getAll().subscribe(response => {
      this.autoList = response
      console.log(this.autoList)
    }, error => {
      alert(error.error.message)
      console.log(error)
    })

  }

  onFocusOut() {
    alert(this.name?.value)
  }

  save() {
    // this.auto.id = 0
    this.auto.name = this.name?.value
    this.auto.date_fab = this.date_fab?.value
    this.auto.model = this.model?.value

    this.autoService.save(this.auto).subscribe(() => {
      location.reload()
    }, error => {
      console.log(error)

    })
  }
  view(auto: Auto) {
    this.addbtn = false;
    this.updatebtn = true;

    this.autoForm.setValue({
      id:auto.id,
      name: auto.name,
      date_fab: auto.date_fab,
      model: auto.model
    });

  }
  update(auto: Auto) {
    this.addbtn = true;
    this.updatebtn = false;

    auto.id = this.id?.value
    auto.name = this.name?.value
    auto.date_fab = this.date_fab?.value
    auto.model = this.model?.value

    this.autoService.update(auto).subscribe(() => {
      location.reload()
    }, error => {
      console.log(error)
    })
  }

  delete(id: number) {
    this.autoService.delete(id).subscribe(() => {
      location.reload()
    }, error => {
      console.log(error)
    })
  }

  irAPagina(url: string): void {
    console.log(url)
    this.route.navigate([url])
  }






}
