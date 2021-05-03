import { Component } from '@angular/core'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent{

  createVehicle(placa: HTMLInputElement,
    chassi : HTMLInputElement,
    renavam: HTMLInputElement,
    modelo: HTMLInputElement,
    marca: HTMLInputElement,
    ano: HTMLInputElement)
    {

      console.log(placa.value,chassi.value,renavam.value,modelo.value,marca.value,ano.value)
      alert('created!')


    }
}
