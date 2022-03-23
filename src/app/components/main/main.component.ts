import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  images = [
    `https://www.izmirfiloarackiralama.com/upload/images/filokiralama.jpg`,
    'https://www.atkfilo.com/images/kayseri-oto-kiralama.jpg',
  ].map((n) => `${n}`);
  constructor() {}

  ngOnInit(): void {}
}
