import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  public pets: any = [];
  public response: any;
  public petEditMode = false;
  public petToEdit: string;

  public petName: string;
  public petType: string;
  public petBreed: string;
  public petGender: string;
  public petAge: number;
  public petColor: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GetAllPets();
  }

  ViewSpecificPet(id: string) {
    this.petToEdit = id;
    this.petEditMode = true;
    this.PopulateData();
  }

  GetAllPets() {
    this.http.get('http://localhost:3000/pets')
      .subscribe((data) => this.pets = data);
  }

  PopulateData(): void {
    this.pets.forEach((pet) => {
      if (pet._id === this.petToEdit) {
        this.petName = pet.name;
        this.petAge   = pet.age;
        this.petBreed = pet.breed;
        this.petColor   = pet.color;
        this.petGender = pet.gender;
        this.petType = pet.type;
      }
    });
  }

  UpdatePet() {
    const PetData = {
      name: this.petName,
      type: this.petType,
      breed: this.petBreed,
      gender: this.petGender,
      age: this.petAge,
      color: this.petColor
    };

    this.http.patch<any>(`http://localhost:3000/pets/${this.petToEdit}`, { PetData }).subscribe(data => this.response);

    setTimeout(() => {
      this.ClearData();
      this.GetAllPets();
    }, 250);
  }

  ClearData() {
    this.petToEdit = null;
    this.petEditMode = false;
    this.petName = null;
    this.petAge = null;
    this.petBreed = null;
    this.petColor = null;
    this.petGender = null;
    this.petType = null;
  }
}
