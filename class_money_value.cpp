#include <iostream>
#include <stdlib.h>
#include <cstring> //для strlen()
#include <iomanip> //для setprecision()
using namespace std;
const int SZ = 100;

class Money 
{
private:
	char money[SZ]; 
	long double newmoney;
public:
	Money()
	{ }
	void mstold(char mas[]) //перевод строки в чило типа long double
	{			    
	for (int i=0, j=0; i<strlen(mas); i++)
		{
			if (isdigit(mas[i]) || mas[i] == '.') 
//функция исключает все символы из строки кроме цифр
			{
			money[j++] = mas[i];
			} 
		}
		newmoney = atof(money);
	}
	void get_money() const //форматированный вывод денежной суммы
	{ cout << "Ваша сумма : " << fixed << setprecision(2) << newmoney << endl; }
	
};

int main () 
{ 
	setlocale (LC_ALL, "rus");

	char mas[100], ch;
	Money m;
	
	do
	{
	cout << "Введите денежную сумму : ";
	cin >> mas;
	m.mstold(mas);
	m.get_money();
	cout << "\nПродолжить (y/n) ? ";
	cin >> ch;
	}
	while (ch != 'n');
	system("pause");
	return 0;
}
