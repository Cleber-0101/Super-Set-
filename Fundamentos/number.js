"use strict";
{
    const idade = 30;
    const preco = 19.99;
    const valorTexto = "42.5";
    console.log("toFixed:", preco.toFixed(1));
    console.log("toPrecision:", preco.toPrecision(3));
    console.log("toExponential:", preco.toExponential(2));
    console.log("toString:", idade.toString());
    console.log("valueOf:", idade.valueOf());
    console.log("Number.isInteger:", Number.isInteger(idade));
    console.log("Number.isNaN:", Number.isNaN(Number("texto")));
    console.log("Number.isFinite:", Number.isFinite(preco));
    console.log("Number.parseFloat:", Number.parseFloat(valorTexto));
    console.log("Number.parseInt:", Number.parseInt("42"));
}
