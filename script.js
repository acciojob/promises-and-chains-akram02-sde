

form.addEventListener('submit',(e)=>{
	e.preventDefault()
	checkAge(age.value, name.value).then(data=>alert(data))
							.catch(data=>alert(data))
})


async function checkAge(age,name){
	return new Promise((res, rej)=>{
		if(age>18){
			setTimeout(()=>res(`Welcome, ${name}. You can vote.`),4000)
		}
		else{
			setTimeout(()=>res(`Oh sorry ${name}. You aren't old enough.`),4000)
		}
	})
}