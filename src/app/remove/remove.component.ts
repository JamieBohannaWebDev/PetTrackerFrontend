import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss']
})
export class RemoveComponent implements OnInit {
  public pets: any = [];
  public response: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GetAllPets();
  }

  GetAllPets() {
    this.http.get('http://localhost:3000/pets')
      .subscribe((data) => this.pets = data);
  }

  DeletePet(id: string) {
    this.http.delete<any>(`http://localhost:3000/pets/${id}`).subscribe(data => this.response);

    setTimeout(() => {
      this.GetAllPets();
    }, 250);
  }

}
