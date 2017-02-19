#include <iostream>

using namespace std;

struct time
{
	int hours;    
	int minutes;	
	int seconds;
};
long time_to_secs(time t)
{
	long totalsec;
	totalsec = (t.hours * 3600) + (t.minutes * 60) + t.seconds;   
//перевод часов, минут и секунд в секунды
	return totalsec;
}

void secs_to_time(long ttl)
{
	time t;
	t.hours = ttl / 3600;
	t.minutes = ttl % 3600 / 60;    //перевод секунд в формат чч:мм:сс
	t.seconds = ttl % 3600 % 60;
	cout << "Сумма 2-х времён : " << t.hours << ":" << t.minutes << ":" << t.seconds << endl;				//и вывод значения
}

int main()
{
	setlocale(LC_ALL, "rUs");
	time t1, t2;
	char ch;
	long totalsec1 = 0, totalsec2 = 0, totalsec;	//

	cout << "Ввдеите время №1 (в формате чч:мм:сс) : ";				  
	cin  >> t1.hours >> ch >> t1.minutes >> ch >> t1.seconds; 

	cout << "Ввдеите время №2 (в формате чч:мм:сс) : ";			       
	cin  >> t2.hours >> ch >> t2.minutes >> ch >> t2.seconds;  

	totalsec1 = time_to_secs(t1);      //использование 1 функции по отдельности для 2 
	totalsec2 = time_to_secs(t2);      //введённых значений времени 
	totalsec = totalsec1 + totalsec2;  //сложение полученных значений
	secs_to_time(totalsec);	        //перевод суммы в формат чч:мм:сс

	system ("pause");
	return 0;
}
