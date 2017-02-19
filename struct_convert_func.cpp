#include <iostream>

using namespace std;


struct sterling
{
	int pound, shil, penni;  //структура со переменными 
};				    //денежной системы старого образца

void get_sterling(int, int, int, sterling&);  		 //перевод из int в структурный тип
void sum_and_transform(sterling&, sterling, sterling); //сложение значений
void show_sterling(sterling); 				 //вывод значений
int main()
{
	setlocale (LC_ALL, "rus");

	int pound_1, shil_1, penni_1,
		pound_2, shil_2, penni_2;
	sterling p1, p2, p;
	char ch; 

	cout << "¬ведите первое значение суммы в формате \"фунты.шиллинги.пенсы\" : ";
	cin  >> pound_1 >> ch >> shil_1 >> ch >> penni_1;   //ввод значений
	
	cout << "¬ведите второе значение суммы в формате \"фунты.шиллинги.пенсы\" : ";
	cin  >> pound_2 >> ch >> shil_2 >> ch >> penni_2;

	get_sterling(pound_1, shil_1, penni_1, p1);
	get_sterling(pound_2, shil_2, penni_2, p2);  //вычисление суммы
	sum_and_transform(p, p1, p2);
	show_sterling(p);

	system ("pause");
	return 0;
}
void get_sterling(int f, int s, int p, sterling& pp)
{
	pp.pound = f;
	pp.shil = s; 
	pp.penni = p;
}
void sum_and_transform(sterling& pp, sterling pp1, sterling pp2)
{
	int a, b, all;  //локальные переменные, необходимые дл€ поиска суммы
	a = (pp1.pound*240) + (pp1.shil*12) + pp1.penni; //общее кол-во пенсов в сумме
	b = (pp2.pound*240) + (pp2.shil*12) + pp2.penni;
	all = a + b; 			//общее кол-во пенсов в 2-х суммах
	a = all / 240; 		//вычисление фунтов после сложени€
	b = (all % 240) / 12; 	//вычисление шиллингов после сложени€    
	all = ((all % 240) % 12); //вычисление пенсов после сложени€
	pp.pound = a; 	//присвоение полученных выше значений структурной переменной
	pp.shil = b; 
	pp.penni = all;
}
void show_sterling(sterling pp)
{
	cout << "—умма введЄнных значений равна : " << pp.pound << "." << pp.shil << "." << pp.penni << endl;  //вывод информации в нужном формате
}
