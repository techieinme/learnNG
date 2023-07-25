import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCcCardHover]'
  // selector:".ccCardHover"
})
export class CcCardHoverDirective implements OnInit, AfterViewInit {

  @Input('appCcCardHover') ccCardAttribute!:string;





  @HostBinding('class.card-outline-primary') private isHovering!: boolean; 
  @HostListener("mouseover") onMouseOver(){
    console.log("onmouseover")
    this.isHovering = true;
  }
  @HostListener("mouseout") onMouseOut(){
    console.log("onMouseOut",this.el.nativeElement)
    this.isHovering = false;

  }
  constructor(private el: ElementRef,
    private render : Renderer2
    ) { 
    console.log("Hello",this.ccCardAttribute);
    render.setStyle(el.nativeElement, 'backgroundColor', 'gray');
    render.setAttribute(el.nativeElement, 'id', 'gray');




  // @Input('appCcCardHover') config:Object ={
  //   querySelector :'.className'
  // };
  // el.nativeElement.querySelector(this.config.querySelector);
  }

  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    console.log("ngOnInit",this.ccCardAttribute);
  }
}
