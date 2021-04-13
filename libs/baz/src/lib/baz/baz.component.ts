import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'incrementalbuildlazyloading-baz',
  templateUrl: './baz.component.html',
  styleUrls: ['./baz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BazComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
