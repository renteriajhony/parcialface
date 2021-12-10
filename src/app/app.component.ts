import { Component, OnInit } from '@angular/core';
import { AlertasService } from './services/alertas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'alertas';
  data:any;

  constructor(public service:AlertasService) {}
  ngOnInit(): void {
    this.service.getPublications().subscribe( _data => {
      this.data = _data;
    });
  }
}
