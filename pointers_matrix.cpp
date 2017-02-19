#include <iostream>
using namespace std;

class pack
{
private:
 
    int* ap;
    int n;
    int m;
public:
    pack(int n = 100, int m = 10): n(n), m(m)
    {
	  ap=new int[n];
	  setValue();
    }
    void setValue()
    {
	for(int k=0; k<n;)
	   for(int i=0;i<m;i++)
		*(ap+k++)=i*m;
    }

    int& operator[] (int i)
    {return ap[i];}



    void show()
	{
		for(int i=0; i<n; i++) 
		{cout << *(ap+i) << " ";}
		cout << endl;
	}
};

int main()
{
	pack p1;
	p1.show();
	system("pause");
	return 0;
}
