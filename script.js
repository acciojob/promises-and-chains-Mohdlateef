//your JS code here. If requi
document.getElementById("btn").addEventListener("click",resolve);
let age=document.getElementById("age");
let name=document.getElementById("name");
// alert(name.value);
function resolve(e) {
	e.preventDefault();
	let b=name.value;
	alert(b)
	let a=age.value;
	let promise=new Promise((rest,resol)=>{
		if(a>18)
		{
			
		}
	})
	
}
