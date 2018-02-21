1.Object
2.Array
	1> arr instanceof Array======> true/false
	2> Array.isArray(arr)========> true/false
	// Array to String
	3> arr.toString()============> String("a,b,c")
	4> arr.toLocalString()=======> String("a,b,c")
	5> arr.valueOf()=============> String("a,b,c")
	6> arr.join()================> String("a,b,c")
		arr.join("|")============> String("a|b|c")
	// Array chance it'self
	7> arr.push(element)=========> Array(changed arr)
	8> arr.pop()=================> Array(changed arr)
	9> arr.shift()===============> Array(changed arr)
	10>arr.unshift(element)======> Array(changed arr)
	11>arr.sort()================> Array(changed arr)
	12>arr.reverge()=============> Array(changed arr)
	13>arr.concat(elements,arr)==> Array(new Array)
	14>arr.splice(startIndex,deleteNumbers,addItems)=======> Array(changed arr)
	15>arr.indexOf(item,startIndex)========================> Number(index) 
	16>arr.lastIndexOf(item,startIndex)====================> Number(index)
	17>arr.every(function(item,index,array){})=============> true/false
	18>arr.some(function(item,index,array){})==============> true/false
	19>arr.filter(function(item,index,array){})============> Array(items return true)
	20>arr.forEach(function(item,index,array){})===========> Array(changed arr)
	21>arr.map(function(item,index,array){})===============> Array(changed arr)
	22>arr.reduce(function(preItem,curItem,index,array){})=> Number(items sum)
	23>arr.reduceRight(function(preItem,curItem,index,array){})=>Number(items sum)
3.Date
4.RegExp
5.Function
6.String
	str = "abcde"
	1> String(date of allKinds)======> String("date")
	2> str.length ===================> Number(str.length)
	3> str.charAt(0)=============> String(1)
	4> str.charCodeAt(4)=========> String("101")
	5> str.concat("123")=========> String(new string "abced123")
	6> slice(startCount,endCount)===================> String(new String) 
	7> subString(startCount,endCount)===============> String(new String)
	8> subStr(startCount,endNumber)============ String(new String)=====> String(new String)
	9> str.indexOf("o",startIndex)==================> Number(first index(from right))
	10>str.lastIndexOf("0",startIndex)==============> Number(first index(from left))
	11>str.trim()===================================> Number(new String)(delete right and left white space)
	12>str.toLowerCase()============================> String(new String)
	13>str.toLocaleLowerCase()======================> String(new String)
	14>str.toUpperCase()============================> String(new String) 
	15>str.toLocaleUpperCase()======================> String(new String)
	16>str.match(RegExp)============================> Array()
	17>str.search(RegExp)===========================> Number(-1 or index)
	18>str.replace(RegExp,items or function(match,pos,originalText){})==> String(new String)
	19>str.split(",")===============================> Array(new Array)("blue,yellow,green")
7.Number
8.Boolean