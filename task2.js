function city_name(str) 
{
    if (str.length >= 3 && ((str.substring(0, 3) == 'New')))
    {
        return str;
    }
    else
    {
        return '';
    }
}
  
  console.log(city_name("NEW JERSEY"));
  console.log(city_name("New York"));
  console.log(city_name("London"));
  console.log(city_name("BAKU"));
  console.log(city_name("MASALLI"));