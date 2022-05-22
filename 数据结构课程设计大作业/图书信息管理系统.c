#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct bookInfo 
{
	char name[20];   //书名
	char author[20];  //作者
	char publish[20]; //出版社
	float price;	 //书籍的价格
	int num;		 //书的数量
};

struct Node 
{
	struct bookInfo data;
	struct Node* next;
};

struct Node* listBook = NULL;
//创建表头： 表头就是一个结构体变量

struct Node* createHead() //创建表头 
{
	//动态内存申请 如何使用变量 
	struct Node* headNode = (struct Node*)malloc(sizeof(struct Node));
	//变量的基本规则:使用前必须初始化
	headNode->next = NULL;
	return headNode;
}

//创建节点: 为插入做准备
//把用户的数据变为结构体变量
struct Node* createNode(struct bookInfo  data)
{
	struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
	newNode->data = data;
	newNode->next = NULL;
	return newNode;
}
//插入：只需要一种插入方式，表头法插入 
void insertNodeByHead(struct Node* headNode, struct bookInfo  data)
{
	struct Node* newNode = createNode(data);
	//必须先连接后断开
	newNode->next = headNode->next;
	headNode->next = newNode;
}

void deleteNodeByName(struct Node* headNode, char *bookName) 
{
//按照书名删除 
	struct Node* posLeftNode = headNode;
	struct Node* posNode = headNode->next;
	//书籍名字是字符串，所以要用字符串比较函数
	while (posNode != NULL && strcmp(posNode->data.name,bookName)) //strcmp比较函数，和外面传过来的参数char bookName
	 
	{
		posLeftNode = posNode;
		posNode = posLeftNode->next;
	}
	//讨论查找的结果
	if (posNode == NULL)//没有找到要删除的结点 
		return;
	else
	{
		printf("删除成功!\n");
		posLeftNode->next = posNode->next;
		free(posNode);
		posNode = NULL;
	}
}

struct Node* searchByName(struct Node* headNode, char* bookName) 
{
	struct Node* posNode = headNode->next;
	while (posNode != NULL && strcmp(posNode->data.name, bookName)) 
	{
		posNode = posNode->next;
	}
	return posNode;
}

void printlistBook(struct Node* headNode)
{
	struct Node* pMove = headNode->next;//表头-headNode->next第一个节点  
	printf("书名\t作者名\t出版社\t价格\t数量\n");
	while (pMove!=NULL)
	{
		
		printf("%s\t%s\t%s\t%.1f\t%d\n", pMove->data.name, pMove->data.author,pMove->data.publish,pMove->data.price, pMove->data.num);
		pMove = pMove->next;
	}
}


//直接文件操作
//写操作对list操作 
void saveInfoToFile(const char* fileName, struct Node* headNode) 
{
	FILE* fp = fopen(fileName, "w");//打开文件指针 ，w为写 
	struct Node* pMove = headNode->next;
	while (pMove != NULL) 
	{
		fprintf(fp, "%s\t%s\t%s\t%.1f\t%d\n", pMove->data.name, pMove->data.author,pMove->data.publish,pMove->data.price, pMove->data.num);
		pMove = pMove->next;
	}
	fclose(fp);
}

//文件读操作
void readInfoFromFile(const char* fileName, struct Node* headNode) 
{
	FILE* fp = fopen(fileName, "r");  //第一次打开文件肯定不存在，r为读 
	if (fp == NULL) 
	{	//不存在就创建出来这个文件
		fp = fopen(fileName, "w+");
	}
	struct bookInfo tempData;
	while (fscanf(fp, "%s\t%s\t%s\t%f\t%d\n", tempData.name,tempData.author,tempData.publish, &tempData.price, &tempData.num) != EOF) 
	{
		insertNodeByHead(listBook, tempData);//读一个信息就插到链表中去 
	}
	fclose(fp);
}

//算法是一种思想 
//按价格排序
void pricebubbleSortlistBook(struct Node* headNode) 
{
	for (struct Node* p = headNode->next; p != NULL; p = p->next) 
	{
		for (struct Node* q = headNode->next; q->next != NULL; q = q->next) 
		{ 
			if (q->data.price > q->next->data.price) 
			{
				//交换值
				struct bookInfo tempData = q->data;
				q->data = q->next->data;
				q->next->data = tempData;
			}
		}
	}
	printlistBook(headNode);
}

//按库存排序 
void numbubbleSortlistBook2(struct Node* headNode) 
{
	for (struct Node* p = headNode->next; p != NULL; p = p->next) 
	{
		for (struct Node* q = headNode->next; q->next != NULL; q = q->next) 
		{
			if (q->data.num > q->next->data.num) 
			{
				//交换值
				struct bookInfo tempData = q->data;
				q->data = q->next->data;
				q->next->data = tempData;
			}
		}
	}
	printlistBook(headNode);
}

//按书名排序
void namebubbleSortlistBook3(struct Node* headNode) 
{
	for (struct Node* p = headNode->next; p != NULL; p = p->next) 
	{
		for (struct Node* q = headNode->next; q->next != NULL; q = q->next) 
		{ 
			if (q->data.name > q->next->data.name) 
			{
				//交换值
				struct bookInfo tempData = q->data;
				q->data = q->next->data;
				q->next->data = tempData;
			}
		}
	} 
	printlistBook(headNode);
}

void paixu(struct Node* headNode){
	int select;
	while(1){
		printf("\t\t|********************************|\n");
	    printf("\t\t|             排序               |\n");
	    printf("\t\t|   1-价格排序      2-库存排序   |\n");
	    printf("\t\t|   3-书名排序      4-返回上层   |\n");
	    printf("\t\t|********************************|\n");
		printf("请输入1-4进行选择：\n");
		scanf("%d",&select);
		switch(select){
			case 1:
				{
		        printf("价格排序");
				pricebubbleSortlistBook(listBook);
				break;
				} 
			case 2:
				{
			    printf("库存排序");
				numbubbleSortlistBook2(listBook);
				break;
				}
			case 3:
				{
			    printf("书名排序");
				namebubbleSortlistBook3(listBook);
				break;
				}
			case 4:
			    return; 
		}
		printf("按任意键返回\n");
		getchar(); 
	}
}

//用户名及其密码的输入
void pquantitydis()
{
printf(" \n\t\t **********************************\n");
printf("\t\t * *\t\t\t\t* *\n");
printf("\t\t * *\t\t\t\t* *\n");
printf("\t\t * *\t\t\t\t* *\n");
printf("\t\t * *  欢迎进入图书信息管理系统  * *\n");
printf("\t\t * *\t\t\t\t* *\n");
printf("\t\t * *\t\t\t\t* *\n");
printf("\t\t * *\t\t\t\t* *\n");
printf("\t\t **********************************\n");

}

void check()
{
char userName[10];//用户名
char userPWD[10];//密码
int i,sum;
system("color 0B");
for(i = 1; i < 4; i++)
{
printf("\n 请输入您的用户名:");
//scanf("%s",userName);
gets(userName);
printf("\n 请输入您的密码:");
//scanf("%s",userName);
gets(userPWD);
    if ((strcmp(userName,"zjjbook")==0) && (strcmp(userPWD,"123456")==0))/*验证用户名和密码*/
    {
        printf("\n -------------*用户名和密码正确，显示主菜单*------------------\n\n\n");
        return;
    }
    else
    {
        if (i < 3)
        {
           // printf("用户名或密码错误，提示用户重新输入");
            printf("用户名或密码错误，请重新输入!");
        }
        else
        {
           // printf("连续3次输错用户名或密码，退出系统。");
            printf("您已连续3次将用户名或密码输错，系统将退出!");
            exit(1);
        }
    }
}
} 

//1.写菜单--->模块
void makeMenu() 
{   
	printf("\t\t|--------------------------------|\n");
	printf("\t\t|---------图书管理系统-----------|\n");
	printf("\t\t|   0-退出系统      1-登记书籍   |\n");
	printf("\t\t|   2-浏览书籍      3-借阅书籍   |\n");
	printf("\t\t|   4-归还书籍      5-书籍排序   |\n");
	printf("\t\t|   6-删除书籍      7-查找书籍   |\n");
	printf("\t\t|--------------------------------|\n");
	printf("请输入(0~7):");
}

//2.做交互
void keyDown() 
{
	int userKey = 0;
	//产生一个临时的变量存储书籍信息
	struct bookInfo tempBook;  
	struct Node* result = NULL;
	scanf("%d", &userKey);
	switch (userKey) 
	{
	case 0:
	    {
		printf("【 退出 】\n");
		printf("退出成功\n");
		//防止闪屏
		system("pause"); 
		exit(0);//关闭掉整个程序
		break;	
	    }
	case 1:
		{
		printf("【 登记 】\n");
		printf("输入书籍的信息(name,author,publish,price,num):");
		scanf("%s%s%s%f%d", tempBook.name,tempBook.author,tempBook.publish,&tempBook.price, &tempBook.num);
		insertNodeByHead(listBook, tempBook);//插入链表 
		saveInfoToFile("bookinfo.txt", listBook);//做修改就保存进去 
		break;
		}
	case 2: 
	    {
		printf("【 浏览 】\n");
		printlistBook(listBook);
		break;
		}
	case 3:
		{
		printf("【 借阅 】\n");		//书籍存在可以借阅 ，书籍的总数量-1 不存在借阅失败
		printf("请输入借阅的书名：");
		scanf("%s", tempBook.name);
		result = searchByName(listBook, tempBook.name);
		if (result==NULL) 
		{
			printf("没有相关书籍无法借阅!\n");
		}
		else 
		{
			if (result->data.num > 0) 
			{
				result->data.num--;
				printf("借阅成功!\n");
			}
			else 
			{
				printf("当前书籍无库存在，借阅失败!\n");
			}
		}
		break;
		}
	case 4:
		{
		printf("【 归还 】\n");		//当前书籍的数量+1
		printf("请输入归还的书名：");
		scanf("%s", tempBook.name);
		result = searchByName(listBook, tempBook.name);
		if (result == NULL)
		{
			printf("该书来源非法!\n");
		}
		else
		{
			result->data.num++;
			printf("书籍归还成功!\n");
		}
		break;
		}
	case 5:
		{
		printf("【 排序 】\n");
		paixu(listBook);
		break;
		}
	case 6:
		{
		printf("【 删除 】\n");
		printf("请输入删除书名:");
		scanf("%s", tempBook.name);
		deleteNodeByName(listBook, tempBook.name);
		saveInfoToFile("bookinfo.txt", listBook);
		break;
		}
	case 7:
		{
		printf("【 查找 】\n");
		printf("请输入要查询的书名:");
		scanf("%s", tempBook.name);
		result = searchByName(listBook, tempBook.name);//调用函数返回 
		if (result == NULL) 
		{
			printf("未找到相关信息!\n");
		}
		else
		{
			printf("书名\t作者名\t出版社\t价格\t数量\n");
			printf("%s\t%s\t%s\t%.1f\t%d\n", result->data.name,result->data.author,result->data.publish,result->data.price, result->data.num);
		}
		break;
		}
	default:
		printf("【 error 】\n");
		break;
	}
}

int main() 
{   
   
    system("color 0B");
    pquantitydis();
	check();
	listBook= createHead();
	readInfoFromFile("bookinfo.txt", listBook);
	while (1) 
	{
		makeMenu();
		keyDown();
		system("pause");//防闪退 
		system("cls");//清屏
	}
	system("pause");
	return 0;
}




