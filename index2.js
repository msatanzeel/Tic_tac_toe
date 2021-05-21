var cell=document.querySelectorAll("td");
var turn = 0;
var number = 1;
var game_finish = false;
var arr = [];

for(var i=0;i<9;i++)
	arr[i] = '-';

const rt_value = (loc)=> {
	if(arr[loc]==='X')
		return 1;
	else if(arr[loc]==='O')
		return 2;
	else return 0;
}

const validate = () => {
    
	if(arr[0]===arr[1] && arr[1]===arr[2])
    {
        if(rt_value(0)!=0)
        return rt_value(0);
    }

	if(arr[3]===arr[4] && arr[3]===arr[5])
    {
        if(rt_value(3)!=0)
        return rt_value(3);
    }
		
	if(arr[6]===arr[7] && arr[7]===arr[8])
    {
        if(rt_value(6)!=0)
        return rt_value(6);
    }
		
	if(arr[3]===arr[0] && arr[3]===arr[6])
    {
        if(rt_value(3)!=0)
        return rt_value(3);
    }
		
	if(arr[1]===arr[4] && arr[4]===arr[7])
    {
        if(rt_value(1)!=0)
        return rt_value(1);
    }
		
	if(arr[2]===arr[5] && arr[5]===arr[8])
    {
        if(rt_value(2)!=0)
        return rt_value(2);
    }
		
	if(arr[0]===arr[4] && arr[4]===arr[8])
    {
        if(rt_value(0)!=0)
        return rt_value(0);
    }
		
	if(arr[2]===arr[4] && arr[4]===arr[6])
    {
        if(rt_value(2)!=0)
        return rt_value(2);
    }

    return 0;
		

}

function write()
{
	var chk = validate();
    console.log(chk);
	if(chk===1)
	{
		document.querySelector(".class2").innerHTML="Player one has won the game,click on the restart button to contiue";
        document.querySelector(".class2").style.backgroundColor='red';
		game_finish = true;
        return;
	}
	else if(chk===2)
	{
		document.querySelector(".class2").innerHTML="Player two has won the game,click on the restart button to contiue";
        document.querySelector(".class2").style.backgroundColor='red';
		game_finish = true;
        return;
	}
    
    if(number===1)
    {
        document.querySelector(".class2").innerHTML="It's player two turn now";
        number=2;
        return;
    }
    else
    {
        document.querySelector(".class2").innerHTML="It's player one turn now";
        number=1;
        return;
    }
}

const fill = (loc) => {
	if(arr[loc]!='-' || game_finish===true)
		return;
	turn++;
	if(turn>9)
	{
		document.querySelector(".class2").innerHTML="No more moves left";
		return;
	}
    if(number===1)
    {
    	arr[loc] = 'X';
        cell[loc].innerText='X';
        cell[loc].style.backgroundColor='yellow';
    }
    else
    {
    	arr[loc] = 'O';
        cell[loc].innerText='O';
        cell[loc].style.backgroundColor='green';
    }

    write();
}
cell[0].addEventListener("click",function(){fill(0);})
cell[1].addEventListener("click",function(){fill(1);})
cell[2].addEventListener("click",function(){fill(2);})
cell[3].addEventListener("click",function(){fill(3);})
cell[4].addEventListener("click",function(){fill(4);})
cell[5].addEventListener("click",function(){fill(5);})
cell[6].addEventListener("click",function(){fill(6);})
cell[7].addEventListener("click",function(){fill(7);})
cell[8].addEventListener("click",function(){fill(8);})