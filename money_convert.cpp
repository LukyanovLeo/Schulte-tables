#include <iostream>

using namespace std;

class bMoney
{
	int dollar, cent;
public:
	bMoney(): dollar(0), cent(0)
	{ }
	bMoney(int d, int c): dollar(d), cent(c)
	{ }
	void get()		//вывод
	{ cout << " $ " << dollar << "," << cent << endl; }
};
class sterling
{
	int pound, shil, penni;
public: 
	sterling(): pound(0), shil(0), penni(0)
	{ }
	sterling(int pp, int s, int p): pound(pp), shil(s), penni(p)
	{ cout << " P:" << pound << "." << shil << "." << penni << endl; }

	operator bMoney() const	//преобразование фунтов к долларам
	{
		int i_dol, cen;
		double dec, all, dol;
		dec = (shil*12+penni)/2.4*0.01; 
		all = pound + dec;
		dol = all*1.6;
		i_dol = (int)dol;
		cen = (int)((dol - i_dol)*100);
		return bMoney(dol, cen);
	}
};
 int main()
 {
	 setlocale(LC_ALL, "rUs");
	 bMoney b;
	 sterling s(14, 2, 3);
	 b = s;
	 b.get();
	 system("pause");
	 return 0;
 }
