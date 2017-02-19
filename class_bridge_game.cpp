#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

enum Suit {clubs, diamonds, hearts, spades};	//масть
const int jack = 11;		//численные эквиваленты карт
const int queen = 12;
const int king = 13;
const int ace = 14;

class card
{
private:
	int number;
	Suit suit;
public:
	void set(int n, Suit s)	//объ€вление карты
	{
		suit = s;
		number = n;
	}
	void display()	//демонстраци€ карты и символа еЄ масти
	{
		if ((number >= 2) && (number <= 10))
		{
			cout << number;
		}
		else 
		{
			switch(number)
			{
			case jack: cout << "J"; break;
			case queen:cout << "Q"; break;
			case king: cout << "K"; break;
			case ace:  cout << "A";
			}
		}
		switch (suit)
		{
		case clubs:    cout << static_cast<char>(5); break;
		case diamonds: cout << static_cast<char>(4); break;
		case hearts:   cout << static_cast<char>(3); break;
		case spades:   cout << static_cast<char>(6); break;
		}
	}
};

int main()
{
	setlocale(LC_ALL, "rUs");
	card deck[52];
	int j;

	cout << endl;
	for(j=0; j<52; j++)
	{
		int num = (j % 13) + 2;
		Suit su = Suit (j / 13);
		deck[j].set(num, su);
	}

	cout << "»сходна€ колода:\n";
	for (j=0; j<52; j++)
	{
		deck[j].display();
		cout << " ";
		if (!((j+1) % 13))
		{cout << endl;}
	}
	srand (time(NULL));
	for (j=0; j<52; j++)
	{
		int k = rand() % 52;
		card temp = deck[j];
		deck[j] = deck[k];
		deck[k] = temp;
	}
	cout << "ѕеремешанна€ колода:\n";
	for (j=0; j<52; j++)
	{
		static int u = 0;
		if (!(j % 13) || (j==0))
		{++u; cout << endl << endl << "√руппа карт є " << u << endl;}
		deck[j].display();
		cout << " ";		
	}

	cout << endl;

	system ("pause");
	return 0;
}
