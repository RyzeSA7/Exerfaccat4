let total_eleitores = parseInt(prompt("digite o total de eleitores"))
let vt_brancos = parseInt(prompt("digite os votos brancos"))
let vt_nulos = parseInt(prompt("digite os votos nulos"))
let votos_validos = parseInt(prompt("digite os votos validos"))
let porcetagem_vt_brancos = total_eleitores / 100 * vt_brancos
let porcetagem_vt_nulos = total_eleitores / 100 * vt_nulos
let porcetagem_vt_validos = total_eleitores / 100 * votos_validos
alert ("a porcetagem dos votos" + vt_brancos + "é: " + porcetagem_vt_brancos)
alert ("a porcetagem de votos" + vt_validos + " é: " + porcetagem_vt_validos)

