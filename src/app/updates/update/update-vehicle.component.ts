import { Component } from '@angular/core'

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehiclesComponent{
  updateVehicle(placa: HTMLInputElement,
    chassi : HTMLInputElement,
    renavam: HTMLInputElement,
    modelo: HTMLInputElement,
    marca: HTMLInputElement,
    ano: HTMLInputElement)
    {

      console.log(placa.value,chassi.value,renavam.value,modelo.value,marca.value,ano.value)
    alert('updated!')
  }
}
