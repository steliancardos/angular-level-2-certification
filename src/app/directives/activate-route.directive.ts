import {
  Directive,
  Input,
  OnInit,
  ElementRef,
  Renderer2,
  ChangeDetectorRef,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[appActivateRoute]',
  standalone: true,
})
export class ActivateRouteDirective {
  @Input() appActivateRoute!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private el: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      const targetUrl = `/${this.appActivateRoute}`;

      if (currentUrl.includes(targetUrl)) {
        this.renderer.addClass(this.el.nativeElement, 'active');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'active');
      }
    });
  }
}
