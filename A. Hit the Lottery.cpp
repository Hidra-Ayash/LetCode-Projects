#include <iostream>
#include <bits/stdc++.h>
using namespace std;
int main()
{
  int n1 = 1,
      n2 = 5,
      n3 = 10,
      n4 = 20,
      n5 = 100;
  int count = 0;
  int num;
  cin >> num;
  while (num > 0)
  {
    if (num >= n5)
    {
      num -= n5;
    }
    else if (num >= n4 && num < n5)
    {
      num -= n4;
    }
    else if (num >= n3 && num < n4)
    {
      num -= n3;
    }
    else if (num >= n2 && num < n3)
    {
      num -= n2;
    }
    else if (num >= n1 && num < n2)
    {
      num -= n1;
    }
    count++;
  }
  cout << count << endl;
}
