#include <iostream>
using namespace std;
////////////////////////////////////////////////////////////////
struct link                           
{
   int data;                          
   link* next;                        
};	
class linklist                        
{
private:
   link* first;                    
   link* last;
public:
   linklist()                      
   { first = NULL; }            
   ~linklist();                    
   void additem(int d);            
   void display();                 
};
//--------------------------------------------------------------

void linklist::additem(int d)         
{
    link* newlink = new link; 
    newlink -> next = NULL;
    newlink -> data=d;
    if(first == NULL) 
    {
        first=newlink;
        last=newlink;
    }
    else
    {
        last -> next = newlink;
        last = newlink;
    } 
}
void linklist::display()              
{
   link* current = first;             
   while(current != NULL)           
   {
      cout << endl << current -> data;  
      current = current -> next;        
   }
}
linklist::~linklist()                 
{
   link* current = first;            
   while(current != NULL)           
   {
      link* temp = current;           
      current = current -> next;        
      delete temp;                    
   }
}
int main()
{
   linklist li;       

   li.additem(25);    
   li.additem(36);
   li.additem(49);
   li.additem(64);

   li.display();      
   cout << endl;
   system("pause");
   return 0;
}
