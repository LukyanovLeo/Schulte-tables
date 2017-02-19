#include <iostream>

using namespace std;

class safearay
{
private:
	int arr[10][10];    			//максимальный размер массива
	int lim1, lim2;			//пользовательские границы
public:
	safearay(): lim1(2), lim2(5) 	//конструктор, инициализирующий границы массива
	{				       //и выводящий их на экран
		cout << "Предел i : " << lim1 << endl;
		cout << "Предел j : " << lim2 << endl;
	}
	void putel(int i, int j, int v) //вставка значения по индексам
	{
		if ((i>=0) && (i<=lim1) && (j>=0) && (j<=lim2))
			arr[i][j] = v;
		else
		{cout << "Выход за пределы!"; system("pause"); cout << endl; exit(1); }
	}
	void getel(int i, int j) 		//демонстрация значения элемента по индексам
	{
		if ((i>=0) && (i<=lim1) && (j>=0) && (j<=lim2))
		cout << "Элемент с индексами (" << i << "," << j << ") :" << arr[i][j] << endl;
	}
};

int main()
{
	setlocale(LC_ALL, "rUs");
	char ch;
	int index1, index2, value;
	safearay s;
	cout << "Введите индексы элемента массива в формате \"i,j\" : ";
	cin  >> index1 >> ch >> index2;
	cout << "Введите значение элемента : ";
	cin  >> value;
	s.putel(index1, index2, value);
	s.getel(index1, index2);

	system("pause");
	return 0;
}
