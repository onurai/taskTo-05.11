function task1_nearestto100(x, y) 
{
    if (x != y)
    {
        x1 = Math.abs(x - 100);
        y1 = Math.abs(y - 100);
        //abs ancaq ededin modulunu verir 
        if (x1 < y1)
        {
          return x;
        }
        if (x1 > y1)
        {
          return y;
        }
        return 0;
    }
    else
    {
        return 'Numbers are equals, pls select unequal ones';
    }
}
  
  console.log(task1_nearestto100(50, 60));