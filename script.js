//your JS code here. If requi
document.getElementById("btn").addEventListener("click",resolve);
let age=document.getElementById("age");
let name=document.getElementById("name");
// alert(name.value);
function resolve(e) {
	e.preventDefault();
	let b=name.value;
	// alert(b)
	let a=age.value;
	promise(a,b).then((data)=>{
		alert(data);
	}).catch((data)=>{alert(data)});
	
	})
	
}

const promise=function(age,name){
    let pr=new Promise((res,rej)=>{
        if(age>18)
        {
            res(`Welcome ${name}. YOu can vote`);
        }
        else{
            res(`Oh sorry ${name} you aren't old enough`);
        }
    })
    return pr;
}