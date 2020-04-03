
class empleado {
	constructor(nombre,apellido,cedula,cargo,antiguedad,salario,extras){
		this.nombre = nombre;
		this.apellido = apellido;
		this.cedula = cedula;
		this.cargo = cargo;
		this.antiguedad = antiguedad;
		this.salario = salario;
		this.extras = extras ;
	}

	salario(){
		return `El empleado ${this.nombre} ${this.apellido} con cedula ${this.cedula} y cargo: ${this.cargo}. 
		Tiene una antiguedad de ${this.antiguedad}, tambien hizo ${this.extras} hora extras por eso su salario este mes fue :
		${this.salario}`
	}
}

   var nombre = "";
   var apellido = "";
   var cedula = "";
   var cargo = "";
   var antiguedad = "";
   var salario = "";
   var extras = "";
   var numetrabajador = {};	 
   var otroEmp = 0;
   var guarda = [];

   function agregar(){

   	    nombre = document.getElementById("nombre").value;
   	    let acceso = 0;

        for(i = 0 ; i<otroEmp ; i++){
            if(nombre == guarda[i]["nombre"]){
            	acceso++;
            }
        }
   	  	
   	  	if((acceso == 0) && (nombre != "")){
   	  	apellido = document.getElementById("apellido").value;
   	  	cedula = document.getElementById("cedula").value;
   	  	cargo = document.getElementById("cargo").value;
   	  	antiguedad = document.getElementById("antiguedad").value;
   	  	salario = document.getElementById("salario").value;
   	  	extras = document.getElementById("extras").value;
        numetrabajador = new empleado(nombre,apellido,cedula,cargo,antiguedad,salario,extras);
        // localStorage.setItem("numetrabajador", JSON.stringify(numetrabajador)); 
        guarda[otroEmp] = numetrabajador;

        if((guarda[otroEmp]["nombre"] != "")&&(guarda[otroEmp]["apellido"] != "")&&(guarda[otroEmp]["cedula"] != "")
        	&&(guarda[otroEmp]["cargo"] != "")&&(guarda[otroEmp]["antiguedad"] != "")&&(guarda[otroEmp]["salario"] != "")
        	&&(guarda[otroEmp]["extras"] != "")){
        	 otroEmp++;
        	let id = "id" + otroEmp;
            let elemento = document.createElement("div");
            let contenido = document.createTextNode(`El empleado ${this.nombre} ${this.apellido} cedula ${this.cedula} y cargo: ${this.cargo}. 
		     Tiene una antiguedad de ${this.antiguedad} años , tambien hizo ${this.extras} hora extras por eso su salario este mes fue :
		    ${this.salario}`);
            elemento.appendChild(contenido);
            document.getElementById("salEmp").appendChild(elemento);
            elemento.setAttribute("id",id);
            
            document.getElementById(id).style.backgroundColor = "#FFFFFF";
            document.getElementById(id).style.width = "800px";
            document.getElementById(id).style.heigth = "250px"
            document.getElementById(id).style.color = "rgba(23,45,23,0.8)";
            document.getElementById(id).style.fontSize = "32px";
            document.getElementById(id).style.marginLeft = "20px";
            document.getElementById(id).style.marginTop = "10px";

        	console.log(otroEmp);
        } 
        console.log(otroEmp);
        }
    }   

    function cambiar(dato){
    	var id = "id" + (dato + 1 );
    	console.log(dato);
    	var contenedor = `El empleado ${guarda[dato]["nombre"]} ${guarda[dato]["apellido"]} cedula ${guarda[dato]["cedula"]} y cargo: ${guarda[dato]["cargo"]}. 
		     Tiene una antiguedad de ${guarda[dato]["antiguedad"]} años , tambien hizo ${guarda[dato]["extras"]} hora extras por eso su salario este mes fue :
		    ${guarda[dato]["salario"]}`;
    	document.getElementById(id).innerHTML = contenedor;
    }

    function modificar(dato){
    	var cambio = 0;
    	nombre = document.getElementById("nombre").value;
    	for(i = 0; i< guarda.length ; i++){
    		
            if(nombre == guarda[i]["nombre"]){
                cambio = i;
                console.log();
            }
            console.log("no entro");
    	}
        console.log("cambio " + cambio);
    	switch(dato){
    		case "apellido" :
                   apellido = document.getElementById("apellido").value;
                   datosEmpleado = new empleado(nombre,apellido,cedula,cargo,antiguedad,salario,extras);
                   guarda[cambio]["apellido"] = apellido;
                   cambiar(cambio);
    		break;
    		case "cedula" :
                  cedula = document.getElementById("cedula").value;
                  datosEmpleado = new empleado(nombre,apellido,cedula,cargo,antiguedad,salario,extras);
                  guarda[cambio]["cedula"] = cedula;
                  cambiar(cambio);
    		break;
    		case "cargo" :
                   cargo = document.getElementById("cargo").value;
                   datosEmpleado = new empleado(nombre,apellido,cedula,cargo,antiguedad,salario,extras);
                   guarda[cambio]["cargo"] = cargo;
                   cambiar(cambio);
    		break;
    		case "antiguedad" :
                   antiguedad = document.getElementById("antiguedad").value;
                   datosEmpleado = new empleado(nombre,apellido,cedula,cargo,antiguedad,salario,extras);
                   guarda[cambio]["antiguedad"] = antiguedad;
                   cambiar(cambio);
    		break;
    		case "salario" :
                   salario = document.getElementById("salario").value;
                   datosEmpleado = new empleado(nombre,apellido,cedula,cargo,antiguedad,salario,extras);
                   guarda[cambio]["salario"] = salario;
                   cambiar(cambio);
    		break;
    		case "extras" :
                   extras = document.getElementById("extras").value;
                   datosEmpleado = new empleado(nombre,apellido,cedula,cargo,antiguedad,salario,extras);
                   guarda[cambio]["extras"] = extras;
                   cambiar(cambio);
    		break;
    		default :
    		break;
    	}
    }