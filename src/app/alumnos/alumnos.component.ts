import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Alumno } from '../model/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit, DoCheck, OnDestroy  {
	public alumnos : Array<Alumno>;
    constructor() { 
    		this.alumnos = [
    		new Alumno(
				1, //Id
				'Alejandro', //Nombre
				'Torres', //Apellido Paterno
				'Espinoza', //Apellido Paterno
				'DSM-502', //Grupo
				8 //Promedio
				),
    		new Alumno(
				1, //Id
				'Esteban', //Nombre
				'Aquino', //Apellido Paterno
				'Aquitampoco', //Apellido Paterno
				'DSM-501', //Grupo
				9 //Promedio
				),
    		new Alumno(
				1, //Id
				'Juliana', //Nombre
				'Mendoza', //Apellido Paterno
				'Vargas', //Apellido Paterno
				'DSM-503', //Grupo
				7 //Promedio
				),
    		new Alumno(
				1, //Id
				'Alejandra', //Nombre
				'Martinez', //Apellido Paterno
				'Perez', //Apellido Paterno
				'DSM-504', //Grupo
				8 //Promedio
				),
    		new Alumno(
				1, //Id
				'Cristian', //Nombre
				'Andrade', //Apellido Paterno
				'Estrada', //Apellido Paterno
				'DSM-505', //Grupo
				6 //Promedio
				)
    		];
    }

  
  //Hook (evento) OnInit
	//Se debe de importar primeramente y después implementar en el método
	ngOnInit(){
		console.log("OnInit ejecutado.");
	}

	//Hook (evento) DoCheck
	//Se ejecuta cada que se detecta un cambio o modificación en la interfaz
	ngDoCheck(){
		console.log("DoCheck ejecutado.");
	}

	//Hook (evento) onDestroy
	//Se ejecuta cada que se elimina o finaliza un componente
	ngOnDestroy(){
		console.log("Se eliminó un componente de productos.");
	}
}
