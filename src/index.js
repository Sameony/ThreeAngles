const side_iso = document.querySelector("#side-iso");
const base_iso = document.querySelector("#base-iso");
const btn_iso = document.querySelector(".btn-iso");
var output_iso = document.querySelector(".output-iso");

const side_equi = document.querySelector(".side-equi");
const btn_equi = document.querySelector(".btn-equi");
var output_equi = document.querySelector(".output-equi");

const side_1 = document.querySelector(".heron-1");
const side_2 = document.querySelector(".heron-2");
const side_3 = document.querySelector(".heron-3");
const btn_heron = document.querySelector(".btn-heron");
var output_heron = document.querySelector(".output-heron");


btn_iso.addEventListener("click", function calcIso() {
    if (side_iso.value === "" && base_iso.value === "")
        output_iso.innerText = ("What are we supposed to find with this excessive information?");
    else if (side_iso.value === "" || base_iso.value === "")
        output_iso.innerText = ("You may have missed a side or two...");
    else if (isNaN(side_iso.value) || isNaN(base_iso.value))
        output_iso.innerText = ("Please enter valid input");
    else {
        var a = side_iso.value,
            b = base_iso.value;
        var interm = 4 * a * a - b * b;
        const final = (b / 4) * Math.sqrt(interm);
        
        if(isNaN(final))
            output_iso.innerText="You cannot make an isoceles triangle with those dimensions";
        else 
            output_iso.innerText = ("Area of isoceles triangle = " + final.toFixed(2));
    }

})

btn_equi.addEventListener("click", function calcEqui() {
    output_equi.innerText = "";
    var a = parseInt(side_equi.value);
    if (side_equi.value === "") {
        output_equi.innerText = ("What are we supposed to find with this excessive information?")
    } else if (isNaN(side_equi.value))
        output_equi.innerText = ("Please enter a valid value.");
    else {

        const r3 = Math.sqrt(3);
        var res = (r3 / 4) * Math.pow(a, 2);

        output_equi.innerText = ("Area of equilateral triangle = " + res.toFixed(2));
    }

})

btn_heron.addEventListener("click", function calcHeron() {
    if (side_1.value === "" && side_2.value === "" && side_3.value === "")
        output_heron.innerText = ("What are we supposed to find with this excessive information?")
    else if (side_1.value === "" || side_2.value === "" || side_3.value === "")
        output_heron.innerText = "You may have missed a side or two...";
    else if (isNaN(side_1.value) || isNaN(side_2.value) || isNaN(side_3.value))
        output_heron.innerText = "Please enter valid numerical inputs."
    else {
        var ah = parseInt(side_1.value);
        var bh = parseInt(side_2.value);
        var ch = parseInt(side_3.value);
        var s = (ah + bh + ch) / 2;
        var interim = s * (s - ah) * (s - bh) * (s - ch);
        var res = Math.sqrt(interim);
        if (isNaN(res) || res === 0)
            output_heron.innerText = "You cannot make a triangle with those dimensions...";
        else
            output_heron.innerText = ("Area of Scalene triangle = " + res.toFixed(2));
    }

})