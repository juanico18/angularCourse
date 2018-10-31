import { Component } from '@angular/core';

@Component({
    selector: 'saludo',
    template: `<p>Hello {{name}}</p>`
})

export class SaludoCompoment {
    name: string = "SaludoCompoment";
    constructor() { }

    ngOnInit() {
    }
}