import { Component, OnInit } from '@angular/core';
import { University } from 'src/app/models/university';
import { MatTableDataSource } from '@angular/material/table';
import { UniversityService } from 'src/app/services/university.service';
@Component({
  selector: 'app-listar-university',
  templateUrl: './listar-university.component.html',
  styleUrls: ['./listar-university.component.css'],
})
export class ListarUniversityComponent implements OnInit {
  dataSource: MatTableDataSource<University> = new MatTableDataSource();
  displayedColumns: string[] = [
    'codigo',
    'universidad',
    'fecha',
    'direccion',
    'tipo',
  ];
  constructor(private uS: UniversityService) {}
  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
