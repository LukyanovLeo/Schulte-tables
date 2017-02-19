#include <iostream>

using namespace std;
unsigned int alltimes = 0, number = 1;
class ship
{
private:
	int degree, times;
	float minutes;
	char side;
public:
	ship(): times(0)	//конструктор с подсчётом кол-ва созданных переменных
	{
		alltimes++;
		times = alltimes;
		cout << "Корабль №" << times << endl;
	}
	void set_angle()	//ввод данных
	{
		cout << "Введите информацию о корабле : ";
		cin  >> degree >> minutes >> side;
	}
	void get_angle()	//вывод данных
	{
		cout << "Корабль №" << number << " " << degree << "\xB0" << minutes << "\" ";
		switch (side)
		{
		case 'W':
			cout << "W" << endl;
			break;
		case 'E':
			cout << "E" << endl;
			break;
		case 'S':
			cout << "S" << endl;
			break;
		case 'N':
			cout << "N" << endl;
		}
		number++;
	}
};

int main()
{
	setlocale(LC_ALL, "rUs");
	ship sh1, sh2, sh3;
	cout << "Всего кораблей : " << alltimes << endl;

	sh1.set_angle();
	sh2.set_angle();
	sh3.set_angle();
	cout << endl;
	sh1.get_angle();
	sh2.get_angle();
	sh3.get_angle();

	system("pause");
	return 0;
}
