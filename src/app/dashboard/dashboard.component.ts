import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public pets: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.GetAllPets();
  }

  GetAllPets() {
    this.http.get('http://localhost:3000/pets')
      .subscribe((data) => this.pets = data);
  }

}
