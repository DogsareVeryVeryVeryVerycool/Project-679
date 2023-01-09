menu_list_array = ["Veg Margherita Pizza",
                        "Chicken Tandoori Pizza",
                        "Veg Supreme Pizza",
                        "Paneer Tikka Pizza",
                        "Deluxe Veggie Pizza",
                        "Veg Extravaganza Pizza"];

                        
   function getmenu(){
        var htmldata="";
        menu_list_array.sort()
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        ; 
    }

    function add_item(){
        var htmldata;
		var imgtags='<img id="im1" src="pizzaImg.png">'
        var item=document.getElementById("add_item").value;
        menu_list_array.sort();       
       htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;
         menu_list_array.sort();
    }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.sort();
    const str =item;
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    words.join(" ");
    const finalitem = str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
   // console.log(item);
   // console.log(str2);
   // console.log(words);
   // console.log(finalitem);
    menu_list_array.push(finalitem);
	add_item();
}


