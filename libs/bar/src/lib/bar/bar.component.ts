import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'incrementalbuildlazyloading-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
