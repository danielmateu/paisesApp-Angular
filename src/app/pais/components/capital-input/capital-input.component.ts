import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-capital-input',
  templateUrl: './capital-input.component.html',
  styleUrls: []
})
export class CapitalInputComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        // console.log('debouncer:', valor)
        this.onDebounce.emit(valor)
      })
  }

  buscar() {
    this.onEnter.emit(this.termino)

  }

  teclaPresionada(event: any){
    const valor = event.target.value;
    // console.log(valor)
    // console.log(this.termino)
    this.debouncer.next(this.termino);
  }
}
