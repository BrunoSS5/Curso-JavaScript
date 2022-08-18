//AULA 02 VIDEO 02 - ARQUIVO: atualizando-lista.js

/*
Metodo é o .splice()
Esse metodo permite que possamos remover itens e coloque outro no lugar do qual retiramos, o primeiro parametro é o indice onde será o inicio, o parametro dois é a quantidade de elementos que desejamos remover apartir do ponto inicial que definimos, no ultimo parametro serve para colocar o elemento que desejamos inserir na array.

Exemplo splice(parametro 1 - inicio da remoção, parametro 2 - quantidade de elemtos para serem removidos,parametro 3 - item a ser colocado.)

OBS:
Podemos passar esse metodo sem o terceiro parametro e ele vai funcionar normalmente, caso não deserjamos inserir nenhum elemento, tambem podemos inserir algum elemento sem precisar remover algum utilizando zero no parametro 2.
*/

const listaDeChamada1 = ['Mariazinha', ' Juvelnal', ' Fernando', ' Caio','Karol',' Lara']

listaDeChamada1.splice(1,2, 'Santos')
console.log(`Lista de Chamada: ${listaDeChamada1}`)
//Saida - Lista de Chamada: Mariazinha,Santos, Caio,Karol, Lara

//COLOCANDO ZERO NO SEGUNDO PARAMETRO.

const listaDeChamada2 = ['João', ' Pedro', ' thiago', ' Maria',' Selene',' Ruanito']

listaDeChamada2.splice(2,0, ' Bruno')


console.log(`Lista de Chamada: ${listaDeChamada2}`)
//Saida - Lista de Chamada: João, Pedro, Bruno, thiago, Maria, Selene, Ruanito