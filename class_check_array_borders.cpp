#include <iostream>

using namespace std;

const int LIMIT = 30;
class safearay
{
private:
	int arr[LIMIT];
public:
	void putel(int i, int v) 		//вставка значения элемента по его индексам
	{
		if ((i>=0) && (i<=LIMIT))  //проверка принадлежности границам
			arr[i] = v;
		else			
		{cout << "Выход за пределы!"; system("pause"); cout << endl; exit(1); }
	}
	void getel(int i)			//вывод элемента по его индексам
	{
		if ((i>=0) && (i<=LIMIT))
		cout << "Элемент с индексом " << i << " :" << arr[i] << endl;
		else
		{cout << "Выход за пределы!"; system("pause"); cout << endl; exit(1); }
	}
};

int main()
{
	setlocale(LC_ALL, "rUs");
	int index, value;
	safearay s;
	cout << "Размер массива : " << LIMIT << "\nВведите индекс и значение элемента массива : ";
	cin  >> index >> value;
	s.putel(index, value);
	s.getel(index);

	system("pause");
	return 0;
}
