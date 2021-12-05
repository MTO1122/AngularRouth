import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-butto',
  templateUrl: './butto.component.html',
  styleUrls: ['./butto.component.css']
})
export class ButtoComponent implements OnInit {

  constructor(private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
