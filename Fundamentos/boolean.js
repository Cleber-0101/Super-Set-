"use strict";
{
    const estaAtivo = true;
    const estaConcluido = false;
    console.log("toString:", estaAtivo.toString());
    console.log("valueOf:", estaConcluido.valueOf());
    console.log("AND (&&):", estaAtivo && estaConcluido);
    console.log("OR (||):", estaAtivo || estaConcluido);
    console.log("NOT (!):", !estaAtivo);
    console.log("Boolean(1):", Boolean(1));
    console.log("Boolean(0):", Boolean(0));
    console.log('Boolean("texto"):', Boolean("texto"));
    console.log('Boolean(""):', Boolean(""));
}
