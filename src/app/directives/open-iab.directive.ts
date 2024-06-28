import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Device } from '@capacitor/device';

@Directive({
  selector: 'a[href]',
  standalone: true,
})
export class OpenIabDirective {
  private readonly el = inject(ElementRef);

  @HostListener('click', ['$event'])
  async onClick(event: PointerEvent) {
    event.preventDefault();
    const { platform } = await Device.getInfo();
    if (platform !== 'web') {
      await Browser.open({
        url: this.el.nativeElement.href,
        presentationStyle: 'popover',
      });
    } else {
      document.location.href = this.el.nativeElement.href;
    }
  }
}
