function city_name(str) 
{
    if ((str.substring(0, 3) == 'New'))
    {
        return str;
    }
    else
    {
        return "New " + str;
    }
}
  
  console.log(city_name("Jersey"));
  console.log(city_name("New York"));
  console.log(city_name("London"));
  console.log(city_name("BAKU"));
  