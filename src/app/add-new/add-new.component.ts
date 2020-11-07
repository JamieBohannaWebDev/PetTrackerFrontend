import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  public petName: string;
  public petType: string;
  public petBreed: string;
  public petGender: string;
  public petAge: number;
  public petColor: string;

  public response;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  AddNewPet(): void {
    const petData = {
      name: this.petName,
      type: this.petType,
      breed: this.petBreed,
      gender: this.petGender,
      age: this.petAge,
      color: this.petColor
    };

    this.http.post<any>('http://localhost:3000/pets', { petData }).subscribe(data => this.response);

    setTimeout(() => {
      this.ClearData();
    }, 250);
  }

  ClearData(): void {
    this.petName = '';
    this.petType = '';
    this.petBreed = '';
    this.petGender = '';
    this.petAge = null;
    this.petColor = '';
  }
}
