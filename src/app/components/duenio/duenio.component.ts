import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Auto } from 'src/app/models/auto';
import { NgForm } from '@angular/forms'
import { Duenio } from 'src/app/models/duenio';
import { DuenioService } from 'src/app/services/duenio.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-duenio',
  templateUrl: './duenio.component.html',
  styleUrls: ['./duenio.component.css']
})
export class DuenioComponent implements OnInit {
  addbtn:boolean = true;
  updatebtn: boolean = false;

  autoList = new Array<Auto>()
  duenioList = new Array<Duenio>()
  duenio = new Duenio()
  duenioForm: FormGroup
  @ViewChild('duenioForm') form: NgForm;

  constructor(private route: Router, private duenioService: DuenioService){}
  ngOnInit(): void {
    this.duenioForm = new FormGroup({
      'id': new FormControl(this.duenio.id, Validators.required),
      'name': new FormControl(this.duenio.name, Validators.required),
      'age': new FormControl(this.duenio.age, Validators.required),
      'birthday': new FormControl(this.duenio.birthday, Validators.required),
      'country': new FormControl(this.duenio.country, Validators.required)


    })
    this.getAll()
  }

  get id() { return this.duenioForm.get('id') as FormControl }
  get name() { return this.duenioForm.get('name') as FormControl }
  get age() { return this.duenioForm.get('age') as FormControl }
  get birthday() { return this.duenioForm.get('birthday') as FormControl }
  get country() { return this.duenioForm.get('country') as FormControl }


  getAll() {
    this.duenioService.getAll().subscribe(response => {
      this.duenioList = response
      console.log(this.duenioList)
    }, error => {
      alert(error.error.message)
      console.log(error)
    })

  }

  onFocusOut() {
    alert(this.name?.value)
  }

  save() {
    
    this.duenio.name = this.name?.value
    this.duenio.age = this.age?.value
    this.duenio.birthday = this.birthday?.value
    this.duenio.country = this.country?.value

    this.duenioService.save(this.duenio).subscribe(() => {
      location.reload()
    }, error => {
      console.log(error)

    })
  }
  view(duenio: Duenio) {
    this.addbtn = false;
    this.updatebtn = true;

    this.duenioForm.setValue({
      id: duenio.id,
      name: duenio.name,
      age: duenio.age,
      birthday: duenio.birthday,
      country: duenio.country
    });

  }



  update(duenio: Duenio) {
    this.addbtn = true;
    this.updatebtn = false;

    duenio.id = this.id?.value
    duenio.name = this.name?.value
    duenio.age = this.age?.value
    duenio.birthday = this.birthday?.value
    duenio.country = this.country?.value

    this.duenioService.update(duenio).subscribe(() => {
      location.reload()
    }, error => {
      console.log(error)
    })
  }

  delete(id: number) {
    this.duenioService.delete(id).subscribe(() => {
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
