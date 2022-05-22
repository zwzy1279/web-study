#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct bookInfo 
{
	char name[20];   //����
	char author[20];  //����
	char publish[20]; //������
	float price;	 //�鼮�ļ۸�
	int num;		 //�������
};

struct Node 
{
	struct bookInfo data;
	struct Node* next;
};

struct Node* listBook = NULL;
//������ͷ�� ��ͷ����һ���ṹ�����

struct Node* createHead() //������ͷ 
{
	//��̬�ڴ����� ���ʹ�ñ��� 
	struct Node* headNode = (struct Node*)malloc(sizeof(struct Node));
	//�����Ļ�������:ʹ��ǰ�����ʼ��
	headNode->next = NULL;
	return headNode;
}

//�����ڵ�: Ϊ������׼��
//���û������ݱ�Ϊ�ṹ�����
struct Node* createNode(struct bookInfo  data)
{
	struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
	newNode->data = data;
	newNode->next = NULL;
	return newNode;
}
//���룺ֻ��Ҫһ�ֲ��뷽ʽ����ͷ������ 
void insertNodeByHead(struct Node* headNode, struct bookInfo  data)
{
	struct Node* newNode = createNode(data);
	//���������Ӻ�Ͽ�
	newNode->next = headNode->next;
	headNode->next = newNode;
}

void deleteNodeByName(struct Node* headNode, char *bookName) 
{
//��������ɾ�� 
	struct Node* posLeftNode = headNode;
	struct Node* posNode = headNode->next;
	//�鼮�������ַ���������Ҫ���ַ����ȽϺ���
	while (posNode != NULL && strcmp(posNode->data.name,bookName)) //strcmp�ȽϺ����������洫�����Ĳ���char bookName
	 
	{
		posLeftNode = posNode;
		posNode = posLeftNode->next;
	}
	//���۲��ҵĽ��
	if (posNode == NULL)//û���ҵ�Ҫɾ���Ľ�� 
		return;
	else
	{
		printf("ɾ���ɹ�!\n");
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
	struct Node* pMove = headNode->next;//��ͷ-headNode->next��һ���ڵ�  
	printf("����\t������\t������\t�۸�\t����\n");
	while (pMove!=NULL)
	{
		
		printf("%s\t%s\t%s\t%.1f\t%d\n", pMove->data.name, pMove->data.author,pMove->data.publish,pMove->data.price, pMove->data.num);
		pMove = pMove->next;
	}
}


//ֱ���ļ�����
//д������list���� 
void saveInfoToFile(const char* fileName, struct Node* headNode) 
{
	FILE* fp = fopen(fileName, "w");//���ļ�ָ�� ��wΪд 
	struct Node* pMove = headNode->next;
	while (pMove != NULL) 
	{
		fprintf(fp, "%s\t%s\t%s\t%.1f\t%d\n", pMove->data.name, pMove->data.author,pMove->data.publish,pMove->data.price, pMove->data.num);
		pMove = pMove->next;
	}
	fclose(fp);
}

//�ļ�������
void readInfoFromFile(const char* fileName, struct Node* headNode) 
{
	FILE* fp = fopen(fileName, "r");  //��һ�δ��ļ��϶������ڣ�rΪ�� 
	if (fp == NULL) 
	{	//�����ھʹ�����������ļ�
		fp = fopen(fileName, "w+");
	}
	struct bookInfo tempData;
	while (fscanf(fp, "%s\t%s\t%s\t%f\t%d\n", tempData.name,tempData.author,tempData.publish, &tempData.price, &tempData.num) != EOF) 
	{
		insertNodeByHead(listBook, tempData);//��һ����Ϣ�Ͳ嵽������ȥ 
	}
	fclose(fp);
}

//�㷨��һ��˼�� 
//���۸�����
void pricebubbleSortlistBook(struct Node* headNode) 
{
	for (struct Node* p = headNode->next; p != NULL; p = p->next) 
	{
		for (struct Node* q = headNode->next; q->next != NULL; q = q->next) 
		{ 
			if (q->data.price > q->next->data.price) 
			{
				//����ֵ
				struct bookInfo tempData = q->data;
				q->data = q->next->data;
				q->next->data = tempData;
			}
		}
	}
	printlistBook(headNode);
}

//��������� 
void numbubbleSortlistBook2(struct Node* headNode) 
{
	for (struct Node* p = headNode->next; p != NULL; p = p->next) 
	{
		for (struct Node* q = headNode->next; q->next != NULL; q = q->next) 
		{
			if (q->data.num > q->next->data.num) 
			{
				//����ֵ
				struct bookInfo tempData = q->data;
				q->data = q->next->data;
				q->next->data = tempData;
			}
		}
	}
	printlistBook(headNode);
}

//����������
void namebubbleSortlistBook3(struct Node* headNode) 
{
	for (struct Node* p = headNode->next; p != NULL; p = p->next) 
	{
		for (struct Node* q = headNode->next; q->next != NULL; q = q->next) 
		{ 
			if (q->data.name > q->next->data.name) 
			{
				//����ֵ
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
	    printf("\t\t|             ����               |\n");
	    printf("\t\t|   1-�۸�����      2-�������   |\n");
	    printf("\t\t|   3-��������      4-�����ϲ�   |\n");
	    printf("\t\t|********************************|\n");
		printf("������1-4����ѡ��\n");
		scanf("%d",&select);
		switch(select){
			case 1:
				{
		        printf("�۸�����");
				pricebubbleSortlistBook(listBook);
				break;
				} 
			case 2:
				{
			    printf("�������");
				numbubbleSortlistBook2(listBook);
				break;
				}
			case 3:
				{
			    printf("��������");
				namebubbleSortlistBook3(listBook);
				break;
				}
			case 4:
			    return; 
		}
		printf("�����������\n");
		getchar(); 
	}
}

//�û����������������
void pquantitydis()
{
printf(" \n\t\t **********************************\n");
printf("\t\t * *\t\t\t\t* *\n");
printf("\t\t * *\t\t\t\t* *\n");
printf("\t\t * *\t\t\t\t* *\n");
printf("\t\t * *  ��ӭ����ͼ����Ϣ����ϵͳ  * *\n");
printf("\t\t * *\t\t\t\t* *\n");
printf("\t\t * *\t\t\t\t* *\n");
printf("\t\t * *\t\t\t\t* *\n");
printf("\t\t **********************************\n");

}

void check()
{
char userName[10];//�û���
char userPWD[10];//����
int i,sum;
system("color 0B");
for(i = 1; i < 4; i++)
{
printf("\n �����������û���:");
//scanf("%s",userName);
gets(userName);
printf("\n ��������������:");
//scanf("%s",userName);
gets(userPWD);
    if ((strcmp(userName,"zjjbook")==0) && (strcmp(userPWD,"123456")==0))/*��֤�û���������*/
    {
        printf("\n -------------*�û�����������ȷ����ʾ���˵�*------------------\n\n\n");
        return;
    }
    else
    {
        if (i < 3)
        {
           // printf("�û��������������ʾ�û���������");
            printf("�û����������������������!");
        }
        else
        {
           // printf("����3������û��������룬�˳�ϵͳ��");
            printf("��������3�ν��û������������ϵͳ���˳�!");
            exit(1);
        }
    }
}
} 

//1.д�˵�--->ģ��
void makeMenu() 
{   
	printf("\t\t|--------------------------------|\n");
	printf("\t\t|---------ͼ�����ϵͳ-----------|\n");
	printf("\t\t|   0-�˳�ϵͳ      1-�Ǽ��鼮   |\n");
	printf("\t\t|   2-����鼮      3-�����鼮   |\n");
	printf("\t\t|   4-�黹�鼮      5-�鼮����   |\n");
	printf("\t\t|   6-ɾ���鼮      7-�����鼮   |\n");
	printf("\t\t|--------------------------------|\n");
	printf("������(0~7):");
}

//2.������
void keyDown() 
{
	int userKey = 0;
	//����һ����ʱ�ı����洢�鼮��Ϣ
	struct bookInfo tempBook;  
	struct Node* result = NULL;
	scanf("%d", &userKey);
	switch (userKey) 
	{
	case 0:
	    {
		printf("�� �˳� ��\n");
		printf("�˳��ɹ�\n");
		//��ֹ����
		system("pause"); 
		exit(0);//�رյ���������
		break;	
	    }
	case 1:
		{
		printf("�� �Ǽ� ��\n");
		printf("�����鼮����Ϣ(name,author,publish,price,num):");
		scanf("%s%s%s%f%d", tempBook.name,tempBook.author,tempBook.publish,&tempBook.price, &tempBook.num);
		insertNodeByHead(listBook, tempBook);//�������� 
		saveInfoToFile("bookinfo.txt", listBook);//���޸ľͱ����ȥ 
		break;
		}
	case 2: 
	    {
		printf("�� ��� ��\n");
		printlistBook(listBook);
		break;
		}
	case 3:
		{
		printf("�� ���� ��\n");		//�鼮���ڿ��Խ��� ���鼮��������-1 �����ڽ���ʧ��
		printf("��������ĵ�������");
		scanf("%s", tempBook.name);
		result = searchByName(listBook, tempBook.name);
		if (result==NULL) 
		{
			printf("û������鼮�޷�����!\n");
		}
		else 
		{
			if (result->data.num > 0) 
			{
				result->data.num--;
				printf("���ĳɹ�!\n");
			}
			else 
			{
				printf("��ǰ�鼮�޿���ڣ�����ʧ��!\n");
			}
		}
		break;
		}
	case 4:
		{
		printf("�� �黹 ��\n");		//��ǰ�鼮������+1
		printf("������黹��������");
		scanf("%s", tempBook.name);
		result = searchByName(listBook, tempBook.name);
		if (result == NULL)
		{
			printf("������Դ�Ƿ�!\n");
		}
		else
		{
			result->data.num++;
			printf("�鼮�黹�ɹ�!\n");
		}
		break;
		}
	case 5:
		{
		printf("�� ���� ��\n");
		paixu(listBook);
		break;
		}
	case 6:
		{
		printf("�� ɾ�� ��\n");
		printf("������ɾ������:");
		scanf("%s", tempBook.name);
		deleteNodeByName(listBook, tempBook.name);
		saveInfoToFile("bookinfo.txt", listBook);
		break;
		}
	case 7:
		{
		printf("�� ���� ��\n");
		printf("������Ҫ��ѯ������:");
		scanf("%s", tempBook.name);
		result = searchByName(listBook, tempBook.name);//���ú������� 
		if (result == NULL) 
		{
			printf("δ�ҵ������Ϣ!\n");
		}
		else
		{
			printf("����\t������\t������\t�۸�\t����\n");
			printf("%s\t%s\t%s\t%.1f\t%d\n", result->data.name,result->data.author,result->data.publish,result->data.price, result->data.num);
		}
		break;
		}
	default:
		printf("�� error ��\n");
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
		system("pause");//������ 
		system("cls");//����
	}
	system("pause");
	return 0;
}




