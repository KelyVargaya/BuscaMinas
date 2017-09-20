/*document.querySelector("#start").addEventListener('click', function(){
    
 buscapina({
    id: "#jugar",
    col: $("input[name='typeGame']:checked").val(),
    row: $("input[name='typeGame']:checked").val()
  });
  
  $("#config").hide();
  $("#tablerominas").show("slow");

})
function buscapina(){*/

var mensaje = document.getElementById("mensaje");
var minas = inicio();	

 function mostrarTablero(){
		crearTablero();
		generarBombas(minas);
		bombasAlrededor(minas);

		}
	window.onload = mostrarTablero;

 function inicio(){
	var tabla = [];
	for(var i = 0; i < 6; i++){			        
	    tabla[i] = [0,0,0,0,0,0];			        
	   }
	 return tabla;
	}		

function crearTablero(){
	for(var i = 0; i < 6; i++){
		for(var j = 0; j < 6; j++){			           
			  var div = document.createElement("div");
			       div.id = i + "" + j;			            
			         div.addEventListener("click",mostrarNumero, true);			            
			           tablerominas.appendChild(div);
			        }
			    }		    
			    
			}

function mostrarNumero(e){
	var auxstr = this.id.split("");				
	var myid = auxstr[0] + auxstr[1];			
		marcado = document.getElementById(myid);

		if(minas[parseInt(auxstr[0],6)][parseInt(auxstr[1],6)] == 0){					
				abrirAlrededor(parseInt(auxstr[0],6),parseInt(auxstr[1],6),minas);
				}else{
					if(minas[parseInt(auxstr[0],6)][parseInt(auxstr[1],6)] != "*"){
						document.getElementById(myid).innerHTML = "<p>" + minas[parseInt(auxstr[0],6)][parseInt(auxstr[1],6)] + "</p>";
					}else{
						marcado.style.backgroundImage = "url(assets/img/minita.png)";						
						abrirTablero(minas);
						mensaje.innerHTML = "BUMMM... Perdiste!!!";
					}
				}						
			}				

function bombasAlrededor(tablero){
		for(var i = 0; i < 6; i++){
			 for(var j = 0; j < 6; j++){			           
			           if(tablero[i][j] == "*"){
			           		if(i == 0 && j == 0){
			           			colocaNumeroBombas(i, j, i + 1, j + 1,tablero);
			           		}
			           		else if (i == 0 && (j > 0 && j < 7)) {
			           			colocaNumeroBombas(i, j - 1, i + 1, j + 1,tablero);
			           		}
			           		else if(i == 0 && j == 7){
			           			colocaNumeroBombas(i, j - 1, i + 1, j,tablero);
			           		}
			           }
			        }
			    }
			}

function colocaNumeroBombas(vari,varj,fini,finj,tablero){
	for(var i = vari; i <= fini; i++){
	   for(var j = varj; j <= finj; j++){			           
			 if(tablero[i][j] != "*"){
			       tablero[i][j] = (parseInt(tablero[i][j])+1);		           		
			         }
			  }
		 }
	}

function generarBombas(tablero){
	var fil = 0;
	var col = 0;

	fil = Math.floor((Math.random()*7)+0);
	col = Math.floor((Math.random()*7)+0);

		for(var i = 0; i < 6; i++){
			while (tablero[fil][col] == "*"){
				fil = Math.floor((Math.random()*7)+0);
					col = Math.floor((Math.random()*7)+0);
				}
			tablero[fil][col] = "*";			
		}
	}

function abrirCeros(vari,varj,fini,finj,cori,corj,tablero){
	for(var i = vari; i <= fini; i++){
		for(var j = varj; j <= finj; j++){		
			   var myid = i+""+j;
			    var cajita =  document.getElementById(myid)	           
			        if(cajita.textContent == ""){			           		
			           if(tablero[i][j] == 0){			           			
			           	if(i == cori && j == corj){			           				
			           		cajita.textContent = ""	; 
			           		cajita.style.backgroundColor = "white";	          				
			           		}else{
			           		if(cajita.style.backgroundColor != "white"){
			           			abrirAlrededor(i, j,tablero);
			           			}			           				
			           		}

			           	}else{
			           		if(tablero[i][j] != "*"){
			           			document.getElementById(myid).innerHTML = "<p>" + tablero[i][j] + "</p>"; 
			           			cajita.style.backgroundColor = "white";	
			           			}
			           		}			           			           		
			           }			           
			        }
			    }
			}

/*Abrimos todas nuestras bombas*/
function abrirAlrededor(xi,xj,tablero){
	if(xi == 0 && xj == 0){
		abrirCeros(xi, xj, xi + 1, xj + 1, xi, xj,tablero);
		}
	else if(xi == 0 && (xj > 0 && xj < 7)){
		abrirCeros(xi, xj - 1, xi + 1, xj + 1, xi, xj,tablero);
		}
		} 

function abrirTablero(tablero){
	for(var i = 0; i < 6; i++){
		  for(var j = 0; j < 6; j++){	
			   var myid = i+""+j;
			   var cajita =  document.getElementById(myid);		           
			       if(tablero[i][j] == "*"){			        		
			         cajita.style.backgroundImage = "url(assets/img/minita.png)";
			         }
			      }
			}
	}		

