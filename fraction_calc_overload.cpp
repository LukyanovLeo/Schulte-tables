#include <iostream>
#include <cmath>

using namespace std;

class fraction
{
private:
	int num, den;
public:
	fraction(): num(0), den(0)
	{ }
	fraction(int n, int d): num(n), den(d)
	{ }
	void set_frac() 	//инициализация дробей
	{
		static int count = 0;
		++count;	//номер дроби
		char ch;
		cout << "Введите " << count << " дробь в формате \"(a/b)\" : ";
		cin  >> num >> ch >> den;
	}
	fraction operator+ (fraction f)	//сложение
	{
		int n = (num*f.den) + (f.num*den);
	    int d = den*f.den;
		return fraction(n, d);
	}
	fraction operator- (fraction f)	//вычитание
	{
		int n = (num*f.den) - (f.num*den);
	    int d = den*f.den;
		return fraction(n, d);
	}
	fraction operator* (fraction f)	//умножение
	{
		int n = num*f.num;
		int d = den*f.den;
		return fraction(n, d);
	}
	fraction operator / (fraction f)	//деление
	{
		int n = num*f.den;
		int d = f.num*den;
		return fraction(n, d);
	}
	void lowterms()			//сокращение дроби
	{
	long tnum, tden, temp, gcd;
	tnum = labs(num);			//используем неотрицательные значения
	tden = labs(den);			//нужен cmath
	if(tden == 0) 
	{					//проверка знаменателя 
		cout << "отсутствует. Причина: Недопустимый знаменатель\n"; 
		system("pause");
		exit(1);
		return;
	} 
	else if(tnum == 0) 
	{
		num = 0;
		den = 1;
		return;
	}
// Нахождение наибольшего общего делителя 
	while(tnum != 0) 
	{
	if(tnum < tden) 
		{		//если числитель больше знаменателя, меняем их местами
			temp = tnum;
			tnum = tden;
			tden = temp;
		}
	tnum = tnum - tden;
	}
	gcd = tden;		//делим числитель и знаменатель на НОД
	num = num / gcd;
	den = den / gcd;
	cout << num << "/" << den << endl;
	}
};
int main()
{
	setlocale(LC_ALL, "rUs");
	fraction f, f1, f2;
	char ch;
	do
	{
	f1.set_frac();
	f2.set_frac();
	cout << "Какое действие нужно совершить над этими дробями (+,-,*,/) ";
	cin  >> ch;
	switch(ch)	//вывод результата в формате, зависящем от операции
		{
		case '+':
			f = f1 + f2;
			cout << "Результат сложения : ";
			f.lowterms();
			break;
		case '-':
			f = f1 - f2;
			cout << "Результат вычитания : ";
			f.lowterms();
			break;
		case '*':
			f = f1 * f2;
			cout << "Результат умножения : ";
			f.lowterms();
			break;
		case '/':
			f = f1 / f2;
			cout << "Результат деления : ";
			f.lowterms();
		}
	cout << "Продолжить (y/n) ? ";
	cin  >> ch;
	}
	while(ch != 'n');
	system("pause");
	return 0;
}
