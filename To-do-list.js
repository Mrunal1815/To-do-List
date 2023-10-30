const taskEntry=document.getElementById("tskEntry");
const taskList=document.getElementById("task-li");

function addTask(){
	if (taskEntry.value=="") {
		alert("Enter a task!");
	}else{
		let li =document.createElement("li");
		li.innerHTML =taskEntry.value;
		taskList.appendChild(li);
		let span= document.createElement("span");
		span.innerHTML = "&#10060;";
		li.appendChild(span);
		saveData();
	}
	taskEntry.value="";
}
taskList.addEventListener(
	"click",
	function (event) 
	{
		if (event.target.tagName ==="LI") 
		{
			event.target.classList.toggle("checked");
			saveData();
		}
			else if (event.target.tagName === "SPAN")
			{
				event.target.parentElement.remove();
				saveData();
			}
			console.log(event);
		}, 
		false
	);

function saveData() {
	localStorage.setItem("myTask", taskList.innerHTML);
}
function displayData() {
	taskList.innerHTML= localStorage.getItem("myTask");
}
displayData();