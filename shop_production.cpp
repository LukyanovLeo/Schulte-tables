#include <iostream>
#include <string>
using namespace std;

class publication
   {
   private:
      string title;
      float price;
   public:
      void getdata()
         {
         cout << "\nEnter title: "; cin >> title;
         cout << "   Enter price: "; cin >> price;
         }
      void putdata() const
         {
         cout << "\nTitle: " << title;
         cout << "\n   Price: " << price;
         }
   };

class sales
   {
   private:
      enum { MONTHS = 3 };		//объяление константы через перечисление
      float salesArr[MONTHS];
   public:
      void getdata();
      void putdata() const;
   };

void sales::getdata()		//объявление методов вне класса
   {
   cout << "   Enter sales for 3 months\n";
   for(int j=0; j<MONTHS; j++)
      {
      cout << "      Month " << j+1 << ": ";
      cin >> salesArr[j];
      }
   }

void sales::putdata() const
   {
   for(int j=0; j<MONTHS; j++)
      {
      cout << "\n   Sales for month " << j+1 << ": ";
      cout << salesArr[j];
      }
   }
class disk 			
{
	char type;
public:
	void getdata()		 
	{ cout << "   Enter disk type (c/d) : "; cin >> type;	}
	void putdata() const
	{ cout << "\n   disk : ";
		switch(type)
		{
		case 'c': cout << "CD";  break;
		case 'd': cout << "DVD"; break;
		default : cout << "This type is not allowed\n"; break;
		}
	}
};

class book : private publication, private sales, private disk //производные класс от классов 
									   publication, sales, disk
   {
   private:
      int pages;
   public:
      void getdata()
         {
         publication::getdata();
		 disk::getdata();
         cout << "   Enter number of pages: "; cin >> pages;
         sales::getdata();
         }
      void putdata() const
         {
         publication::putdata();
		 disk::putdata();
         cout << "\n   Pages: " << pages;
         sales::putdata();
         }
   };

class tape : private publication, private sales, private disk
   {
   private:
      float time;
   public:
      void getdata()
         {
         publication::getdata();
		 disk::getdata();
         cout << "   Enter playing time: "; cin >> time;
         sales::getdata();
         }
      void putdata() const
         {
         publication::putdata();
		 disk::putdata();
         cout << "\n   Playing time: " << time;
         sales::putdata();
         }
   };

int main()
   {
   book book1;       
   tape tape1;

   book1.getdata();   //инициализация полей производных классов
   tape1.getdata();

   book1.putdata();   //вывод значений на экран
   tape1.putdata();
   cout << endl;
   system("pause");
   return 0;
   }
