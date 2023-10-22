import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { University } from 'src/app/models/university';
import { UniversityService } from 'src/app/services/university.service';
@Component({
  selector: 'app-creaedita-university',
  templateUrl: './creaedita-university.component.html',
  styleUrls: ['./creaedita-university.component.css'],
})
export class CreaeditaUniversityComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  university: University = new University();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  creationDateUniversity = new FormControl(new Date());
  tipos: { value: string; viewValue: string }[] = [
    { value: 'N', viewValue: 'Nacional' },
    { value: 'P', viewValue: 'Particular' },
  ];

  constructor(
    private uS: UniversityService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nameUniversity: ['', Validators.required],
      adressUniversity: ['', Validators.required],
      typeUniversity: ['', [Validators.required]],
      creationDateUniversity: ['', Validators.required],
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.university.nameUniversity = this.form.value.nameUniversity;
      this.university.adressUniversity = this.form.value.adressUniversity;
      this.university.typeUniversity = this.form.value.typeUniversity;
      this.university.creationDateUniversity =
        this.form.value.creationDateUniversity;
      this.uS.insert(this.university).subscribe((data) => {
        this.uS.list().subscribe((data) => {
          this.uS.setlist(data);
        });
      });

      this.router.navigate(['universidades']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);

    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }

    return control;
  }
}
