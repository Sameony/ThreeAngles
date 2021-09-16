const side_iso=document.querySelector("#side-iso");
const base_iso=document.querySelector("#base-iso");
const btn_iso = document.querySelector(".btn-iso");
var output_iso=document.querySelector(".output-iso");

const side_equi = document.querySelector(".side-equi");
const btn_equi=document.querySelector(".btn-equi");
var output_equi = document.querySelector(".output-equi");


btn_iso.addEventListener("click",function calcIso(){
    var a=side_iso.value, b=base_iso.value;
    var interm = 4*a*a - b*b;
    const final = (b/4)*Math.sqrt(interm);
    output_iso.innerText= ("Area of isoceles triangle = "+ final.toFixed(2));
})

btn_equi.addEventListener("click",function calcEqui(){
    var a = side_equi.value;
    const r3 = Math.sqrt(3);
    var res = (r3/4)*Math.pow(a,2);
    
    output_equi.innerText = ("Area of equilateral triangle = "+res.toFixed(2));
})