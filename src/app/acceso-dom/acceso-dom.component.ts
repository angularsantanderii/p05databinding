import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-acceso-dom',
  templateUrl: './acceso-dom.component.html',
  styleUrls: ['./acceso-dom.component.css']
})
export class AccesoDOMComponent implements OnInit {

  @ViewChild('lista') listaRef: ElementRef; // Sustituye a document.getElementByid('lista')
  @ViewChildren('item') itemsRef: QueryList<any>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.listaRef.nativeElement, 'padding-left', '200px'); // style...
  }

  setDone(i: number): void {
    this.itemsRef.forEach((elem: any, index: number) => {
      if(index === i) {
        if(elem.nativeElement.style.textDecoration === '') {
          this.renderer.setStyle(elem.nativeElement, 'text-decoration', 'line-through');
        } else {
          this.renderer.setStyle(elem.nativeElement, 'text-decoration', '');
        }
      }
    })
  }

}
