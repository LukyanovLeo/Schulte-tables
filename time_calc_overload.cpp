#include <iostream>
using namespace std;

class time
{
private:
    int hrs, mins, secs;
public:
	time() : hrs(0), mins(0), secs(0) //no-arg constructor
	{ }                           //3-arg constructor
	time(int h, int m, int s) : hrs(h), mins(m), secs(s)       
	{ }
	void display()                    //format 11:59:59
	{cout << hrs << ":" << mins << ":" << secs; }
	
	time operator + (time t2)         //add two times
	{
		int s = secs + t2.secs;        //add seconds
		int m = mins + t2.mins;        //add minutes
		int h = hrs + t2.hrs;          //add hours
		if( s > 59 )                   //if secs overflow,
		{ s -= 60; m++; }              //carry a minute
		if( m > 59 )                   //if mins overflow,
		{ m -= 60; h++; }              //carry an hour
		return time(h, m, s);          //return temp value
	}
	time operator - (time t2)         //add two times
	{
		int s = secs - t2.secs;        //add seconds
		int m = mins - t2.mins;        //add minutes
		int h = hrs - t2.hrs;          //add hours
		if( s > 59 )                   //if secs overflow,
		{ s -= 60; m++; }              //carry a minute
		if( m > 59 )                   //if mins overflow,
		{ m -= 60; h++; }              //carry an hour
		return time(h, m, s);          //return temp value
	}
	time operator * (time t2)               //add two times
	{
		float s = secs * t2.secs;        //add seconds
		float m = mins * t2.mins;        //add minutes
		float h = hrs * t2.hrs;          //add hours
		if( s > 59 )                     //if secs overflow,
		{ s -= 60; m++; }                //carry a minute
		if( m > 59 )                     //if mins overflow,
		{ m -= 60; h++; }                //carry an hour
		return time(h, m, s);            //return temp value
	}
	time operator++ ()
	{
		return time(++hrs, ++mins, ++secs);
	}
	time operator++ (int)
	{
		return time(hrs++, mins++, secs++);
	}
	time operator-- (int)
	{
		return time(hrs--, mins--, secs--);
	}
	time operator-- ()
	{
		return time(--hrs, --mins, --secs);
	}
};

int main()
   {
   time time1(5, 59, 59);               //create and initialze
   time time2(4, 10, 10);               //two times
   time time3(1, 2, 4);
   time time4;
   time time5(1, 2, 4);		      //create another time
   cout << "\ntime1 = "; time1.display();
   cout << "\ntime2 = "; time2.display();
   cout << "\ntime3 = "; time3.display();
   cout << "\ntime5 = "; time5.display();
   ++time1;
   --time2;

   cout << "\n\ntime1 = "; time1.display();
   cout << "\ntime2 = "; time2.display();

   time3 = time1 + time2;               
   time2--;

   cout << "\ntime3 = "; time3.display();
   time3++;
   cout << "\n\ntime2 = "; time2.display();
   cout << "\ntime3 = "; time3.display(); 

   time3 = time1 - time2;
   time4 = time2 * time5;
   cout << "\ntime3 = "; time3.display(); 
   cout << "\ntime4 = "; time4.display(); 
   cout << endl;
   system("pause");
   return 0;
}
