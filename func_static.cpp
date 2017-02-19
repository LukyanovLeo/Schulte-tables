#include <iostream>

using namespace std;

int swap(int c)
{
	static int num = 0;
	num++;		//функция увеличивает на 1 значение локальной static-переменной 
	return num;	//и возвращает её значение
}

int main()
{
	setlocale (LC_ALL, "rUs");
	int func;

	for (int i=0; i<10; i++)
	{
		func = swap(0);	 //циклический подсчёт кол-ва вызовов функции
	}


	cout << "Функция была вызвана " << func << " раз\n";  
//вывод кол-ва раз вывода функции

	system ("pause");
	return 0;
}
