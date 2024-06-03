import { Injectable } from '@angular/core';
import {Options} from '../../student-pages/interface/estudiante.interface'

@Injectable({
  providedIn: 'root'
})
export class Utils{
	constructor() { }

	setMode(perfil:boolean,record:boolean,representante:boolean):string[]{
		let option: string[] = ['0', '0', '0'];
		if (perfil && !record && !representante) {
	      // Solo incluye el perfil
	       option[0]='1';
	       option[1]='0';
	       option[2]='0';
	    } else if (!perfil && record && !representante) {
	      // Solo incluye el record
	       option[0]='0';
	       option[1]='1';
	       option[2]='0';
	    } else if (!perfil && !record && representante) {
	      // Solo incluye el representante
	       option[0]='0';
	       option[1]='0';
	       option[2]='1';
	    } else if (perfil && record && !representante) {
	      // Incluye el perfil y el record
	       option[0]='1';
	       option[1]='1';
	       option[2]='0';
	    } else if (perfil && !record && representante) {
	      // Incluye el perfil y el representante
	       option[0]='1';
	       option[1]='0';
	       option[2]='1';
	    } else if (!perfil && record && representante) {
	      // Incluye el record y el representante
	       option[0]='0';
	       option[1]='1';
	       option[2]='1';
	    } else if (perfil && record && representante) {
	      // Incluye el perfil, el record y el representante
	       option[0]='1';
	       option[1]='1';
	       option[2]='1';
	    } else {
	      // Ninguna opción seleccionada
	       option[0]='0';
	       option[1]='0';
	       option[2]='0';
	    }
		return option;
	}
	getMode(str:string[]):number{
		const optionString = str.join('');
        //console.log(optionString);
		if(optionString==="100"){
			return 1;
		}else if(optionString==="010"){
			return 2;
		}else if(optionString==="001"){
			return 3;
		}else if(optionString==="110"){
			return 4;
		}else if(optionString==="101"){
			return 5;
		}else if(optionString==="011"){
			return 6;
		}else if(optionString==="111"){
			return 7;
		}else if(optionString==="000"){
			return 8;
		}else return -1;
	}
}