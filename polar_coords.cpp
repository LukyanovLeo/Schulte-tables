#include <iostream>
#include <cmath>
using namespace std;
const double pi = 3.14159265;	//число пи
class polar
{
private:
	unsigned int Dia;
	double Grad;


public:
	polar(): Dia(0), Grad(0)
	{ }
	polar(unsigned int d, double g): Dia(d), Grad(g)
	{ }
	void setdata()	//инициализация свойств
	{
		cout << "Введите полярные коорд-ты (радиус и угол) : ";
		cin  >> Dia >> Grad;
	}
	polar operator + (polar p)		//сложение
	{
		double X1, X2, Y1, Y2, all;
		X1 = Dia * cos(Grad);	//перевод в декартовую систему
		Y1 = Dia * sin(Grad);
		X2 = p.Dia * cos(p.Grad);
		Y2 = p.Dia * sin(p.Grad);
		X1 += X2;			//сложение
		Y1 += Y2;
		while (Y1 >= 2*pi)		
//вычитание 360 градусов всякий раз, когда значение угла превышает это число
		{ Y1 -= 2*pi; }
		all = pow(X1, 2) + pow(Y1, 2);//перевод снова в полярные коорд-ты
		Dia = sqrt(all);
		Grad = Y1/X1;
		Grad = atan(tan(Grad));
		return polar(Dia, Grad);
	}
	void set_angle()
	{ cout << "Введите полярные коорд-ты (R, Angle) : ";
	  cin  >> Dia >> Grad;}
	void getdata()
	{ cout << "(" << Dia << "," << Grad << ")\n"; }
};
int main()
{
	setlocale(LC_ALL, "rUs");
	polar p1, p3;
	polar p2(10, pi);
	p1.set_angle();
	p3 = p1 + p2;
	p3.getdata();
	system("pause");
	return 0;
}
