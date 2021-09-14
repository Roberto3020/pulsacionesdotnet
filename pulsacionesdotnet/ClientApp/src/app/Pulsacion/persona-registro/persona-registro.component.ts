import { Component, OnInit } from '@angular/core';
import { Persona } from '../moduls/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
persona: Persona;
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.persona = new Persona();
  }
add() {
  this.persona.CalcularPulsacion();
  this.personaService.post(this.persona);
  alert('Se creo la persona' + JSON.stringify(this.persona));
}
}
