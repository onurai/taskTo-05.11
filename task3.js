function front_back3(str)
 {
    if (str.length>=3)
    {
        str_length = 3;
        back = str.substring(str.length-3);
        return back + str + back;
    }
    else
    {
        return str;
    }
 }
console.log(front_back3("onur"));
console.log(front_back3("el"));
console.log(front_back3("kamran"));
console.log(front_back3("at"));
