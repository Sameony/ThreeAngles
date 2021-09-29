const s1 = document.querySelector(".side-chk-1");
const s2 = document.querySelector(".side-chk-2");
const s3 = document.querySelector(".side-chk-3");
const btn_chk_side = document.querySelector(".btn-chk-sides");
const op_side = document.querySelector(".output-chk-sides");

const a1 = document.querySelector(".side-ang-1");
const a2 = document.querySelector(".side-ang-2");
const a3 = document.querySelector(".side-ang-3");
const btn_ang_side = document.querySelector(".btn-ang-sides");
const op_ang = document.querySelector(".output-ang-sides");

const h1 = document.querySelector(".height");
const b1 = document.querySelector(".base");
const btn_hypo = document.querySelector(".btn-get-hypo");
const output_hypo = document.querySelector(".output-hypo");

btn_hypo.addEventListener("click", function getHypo(){
    var height = h1.value;
    var base = b1.value;
    if (h1.value === "" && b1.value === "")
        output_hypo.innerText = ("What are we supposed to find with this excessive information?")
    else if (base === "" || height === "")
        output_hypo.innerText = "You may have missed a side or two...";
    else if (isNaN(h1.value) || isNaN(b1.value))
        output_hypo.innerText = "Please enter valid numerical inputs."
    else {
        height=height*height;
        base=base*base;

        var res = Math.sqrt(height+base);
        
        output_hypo.innerText = ("Length of hypotenuse is : "+res.toFixed(2));
    }
})

btn_chk_side.addEventListener("click", function calcSide() {
    if (s1.value === "" && s2.value === "" && s3.value === "")
        op_side.innerText = ("What are we supposed to find with this excessive information?")
    else if (s1.value === "" || s2.value === "" || s3.value === "")
        op_side.innerText = "You may have missed a side or two...";
    else if (isNaN(s1.value) || isNaN(s2.value) || isNaN(s3.value))
        op_side.innerText = "Please enter valid numerical inputs."
    else {
        var ah = parseInt(s1.value);
        var bh = parseInt(s2.value);
        var ch = parseInt(s3.value);
        
        if((ah+bh) <ch || (ah+ch)<bh || ah>(bh+ch))
            op_side.innerText = "You cannot make a triangle with these dimensions";
        else
            op_side.innerText = ("You can make a triangle out of those dimensions!!");
    }

})

btn_ang_side.addEventListener("click", function calcang() {
    if (a1.value === "" && a2.value === "" && a3.value === "")
        op_ang.innerText = ("What are we supposed to find with this excessive information?")
    else if (a1.value === "" || a2.value === "" || a3.value === "")
        op_ang.innerText = "You may have missed an angle or two...";
    else if (isNaN(a1.value) || isNaN(a2.value) || isNaN(a3.value))
        op_ang.innerText = "Please enter valid numerical inputs."
    else {
        var a = parseInt(a1.value);
        var b = parseInt(a2.value);
        var c = parseInt(a3.value);
        
        if(a+b+c!=180)
            op_ang.innerText = "You cannot make a triangle with these Angles";
        else
            op_ang.innerText = ("You can make a triangle out of those Angles!!");
    }

})