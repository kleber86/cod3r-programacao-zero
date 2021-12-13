let nota = 7;

switch(nota){
  case 10:
    console.log('Parabéns')
    break;
  case 9: case 8: case 7:
    console.log('Aprovado')
    break;
  case 6: case 5: case 4: case 3: case 2:
    console.log('Reprovado')
    break;
  case 1:
      console.log('Sem chance')
      break
  default:
    console.log('Valor invalido!')
}