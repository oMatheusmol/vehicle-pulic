import { Component } from '@angular/core'

@Component({
  selector: 'app-get-vehicles',
  templateUrl: './get-vehicles.component.html',
  styleUrls:['./get-vehicles.component.css']
})

export class GetVehiclesComponent{
  getAllVehicles() {
    alert('found all!')
  }
  getplaca(){
    alert('found placa!')
  }
  getchassi(){
    alert('found chassi!')
  }
  getrenavam(){
    alert('found renavam!')
  }
  getmodelo(){
    alert('found modelo!')
  }
  getmarca(){
    alert('found marca!')
  }
  getano(){
    alert('found ano!')
  }
}
