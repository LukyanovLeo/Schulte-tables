#include <iostream>

using namespace std;

class date
{
private:
	float sal;
	int numb, day, month, year, job;
	enum etype {laborer, secretary, manager, accountant, executive, researcher};
public:
	void showdata()		//вывод информации о сотруднике
	{ 
		cout << "Полная информация : " << endl << numb << " " << sal << "  " << day << "/" << month << "/" << year << "  ";
		switch (job)   
		{
		case 0: 
		cout << "laborer\n";
		break;
		case 1: 
		cout << "secretary\n";
		break;
		case 2: 
		cout << "manager\n";
		break;
		case 3: 
		cout << "accountant\n";
		break;
		case 4: 
		cout << "executive\n";
		break;
		case 5: 
		cout << "researcher\n";
		}
	}
	void setdata()		//ввод информации о сотруднике
	{
		cout << "Введите номер сотрудника : ";
		cin  >> numb;
		cout << "Введите размер его зарплаты : ";
		cin  >> sal;
		char ch, let;
		cout << "Введите дату в формате дд/мм/гггг : ";
		cin  >> day >> ch >> month >> ch >> year;
		cout << "Введите 1-ю букву професси сотрудника : ";
		cin  >> let;
		switch (let)   //выстраивание соответствия между буквой и профессией
		{
		case 'l': 
		job = laborer;
		break;
		case 's': 
		job = secretary;
		break;
		case 'm': 
		job = manager;
		break;
		case 'a': 
		job = accountant;
		break;
		case 'e': 
		job = executive;
		break;
		case 'r':
		job = researcher;
		}
	}
};

int main()
{
	setlocale(LC_ALL, "rUs");
	date d1, d2, d3;		//3 сотрудника

	d1.setdata();
	d1.showdata();
	d2.setdata();
	d2.showdata();
	d3.setdata();
	d3.showdata();

	system ("pause");
	return 0;
}
