#include <iostream>
using namespace std;
const int LIMIT = 100;         //макс. размер массива
class safearray
   {
   protected:
        int arr[LIMIT];
   public:
        int& operator [] (int n)  //оператор [] для свойств класса
        {
			if( n<0 || n>=LIMIT )
		    { cout << "\nIndex out of bounds"; exit(1); }
			return arr[n];
		}
   };
class bounds : private safearray
	{
	public:
		const int lower, upper;
		bounds(int low, int up): lower(low), upper(up)
		{ }
		int& operator []  (int n)
		{
			if( n<lower || n>=upper )
			{ cout << "\nIndex out of bounds"; exit(1); }
			return arr[n];
		}
	};
int main ()
{
	bounds b(10,20);
	for(int i=b.lower; i<b.upper; i++)
	{ b[i] = i*10; }
	for(int i=b.lower; i<b.upper; i++)
	{ cout << b[i] << endl; }
	system("pause");
	return 0;
}
