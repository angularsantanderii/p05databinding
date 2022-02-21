import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-acceso-dom',
  templateUrl: './acceso-dom.component.html',
  styleUrls: ['./acceso-dom.component.css']
})
export class AccesoDOMComponent implements OnInit {

  @ViewChild('lista') listaRef: ElementRef; // Sustituye a document.getElementByid('lista')

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.listaRef.nativeElement, 'padding-left', '200px'); // style...
  }

}
