//线性表：具有相同数据类型的多个数据元素的有限序列
//线性表分为顺序存储和链式存储，当为顺序存储时，必须占用一片连续的存储单元 
/*InitList(&L):初始化
Length(L)
LocateElem(L,e)按值查找
GetElem(L,i)按位查找
ListInsert(&L,i,e)在第i个位置插入元素e；即下标为i-1
ListDelete(&L,i,&e)删除第i个元素，将它的值返回给e
Empty(L)判断空的操作
DestroyList(&L)
PrintList(输出） 

存储地址=第一个元素的存储地址+每个元素所占的地址单元个数*（所求的元素的序数-1）
顺序表的主要特点是随机存储，O（1）；存储密度高，插入和删除需要移动大量的元素
*/ 

//顺序存储的线性表增删改查的实现
#include <stdio.h>
#define MAXSIZE 100 
typedef struct{
	char name[10];
	long int num;//后面不能是数组 
	char sex[3];
	float score;
}ElemType;
typedef struct {
	int length;
	ElemType data[MAXSIZE];//定义一个数组，存放学生的数据 ，因为学生数据很杂 ,所以得有很杂的类型 
    //所以呢，ElemType可作为数据类型，同样SeqList也是 
}SeqList;//定义一个顺序表
//有表了之后呢，接下来应该就是表的初始化了
//指针，int *p; 
/*void InitList(SeqList *L){
	L->length=0;//==是判断左右相等返回真1 
} */
//然后就各种算法实现
//判空算法
/*int EmptyList(SeqList L,i){
	int n;
	//先判断第i个位置
	if(i<1||i>length+1)
	{
		printf("表满了");
		return 0;  
	 } 
	 else 
	 return 1;
}*/
//输入算法
 void Input(SeqList *L){
 	int i=0;
 	printf ("-----请输入 学号 姓名   性别 分数--------\n");
	do{
	i++;
	scanf("%d%s%s%f",&L->data[i].num,&L->data[i].name,&L->data[i].sex,&L->data[i].score);
	}while(L->data[i].num!=0);
 L->length=--i;}//非常必要
//插入算法
int InsertList(SeqList *L,int i,ElemType e){
	int n;
	//先判断第i个位置
	if(L->length==MAXSIZE-1)
	{
	printf("表满\n"); 
	return -1;
	}
	if(i<1||i>L->length+1)
	{
		printf("位置错误");
		return 0; 
	 } 
	 
	 for(n=L->length;n>=i;n--){//i已经默认是第m+1个了，插入所以有下标从0到length 
	 	L->data[n+1]=L->data[n];
	 	 L->data[i]=e;
	 L->length++;
	 return 1;
	 }
	
} 
//删除算法
//&什么用处呢，指针部分重修 
int DeleteList(SeqList *L,int i){
	if(i<1||i>L->length){
		printf("位置错误");
		return -1; 
	} 
	
	int j; 
	
	for(j=i-1;j<L->length;j++){
		L->data[j]=L->data[j+1];
		L->length--;
		return 1;
	}
	
	
}
//查找算法
//按值查找
/*int LocateElem(SeqList *L,int x){
	int i;
	for(i=0;i<L->length;i++){
		if(L->data[i].num==x){
			printf("找到了");
			return i+1; 
		}
		else
		{
			printf("没有找到");
			return 0;
		}
	}*/
	/*while(i<=L->length && L->data[i].num!=x)
            i++;
    if (i>L->length)  return -1; 
     else    return i; */ 

int LocateElem(SeqList *L,int x){//为什么要带*
	int i=1;
	while(i<=L->length && L->data[i].num!=x)
            i++;
    if (i>L->length)  return -1; 
     else    return i; 
}

//输出算法
void Output(SeqList L){
	int i;
	for(i=1;i<=L.length;i++){
		printf("%d\t%s\t%s\t%f\n",L.data[i].num,L.data[i].name,L.data[i].sex,L.data[i].score);
	}}//输出的i要对应输入插入等其他算法即可成功 

 
main ()
{
	SeqList L;
	ElemType x;//必要的 
	int length;
	int i;
	int sys;
	int m;// 插入算法：在几号学生中后面插入
	int insert;//插入算法返回的变量 
	int dele;//删除算法返回给的变量 
	int num;//查找算法，请输入您要查找的值
	int locate;//查找算法的返回值用 
	int findnum;//findnum为等一下输出用
	while(1){
	printf("-----------------------学生信息管理系统------------------------------\n");
	printf("-----------1-输入学生信息            2-插入学生信息------------------\n");
	printf("-----------3-删除学生信息            4-查找学生信息------------------\n");
	printf("-----------5-浏览学生信息            6-退出学生系统------------------\n");
		printf("请输入1-6个选择：\n");
		scanf("%d",&sys);
		switch(sys){
			case 1:printf("输入学生信息:\n");
			Input(&L);
			break;
			case 2:printf("插入学生信息:");
			printf("插入记录");
			printf("学号:") ;
			scanf("%d",&x.num);
			printf("姓名:") ;
			scanf("%s",&x.name);
			printf("性别:") ;
			scanf("%s",&x.sex);
			printf("分数:") ;
			scanf("%f",&x.score);
			printf("在几号学生中后面插入：") ;
			scanf("%d",&m);
			insert=InsertList(&L,m+1,x);
			if(insert>0){
				printf("插入成功\n");
				 Output(L);
			}
			else
			printf("插入失败");break; 
			case 3:printf("删除学生信息:");
			printf("请输入删除第几条记录：");
			scanf("%d",&dele); 
			dele=DeleteList(&L,dele);
			if(dele>0)
			printf("删除成功");break;
			case 4:printf("查找学生信息:");
			printf("请输入您要查找的值");
			scanf("%d",&num); 
			findnum=locate=LocateElem(&L,num);
			if(locate>0){
				printf("查找到了\n");
				printf("%s\t%d\t%s\t%f\n",L.data[findnum].name,L.data[findnum].num,L.data[findnum].sex,L.data[findnum].score);
			}
			else
			printf("没找到");break;
			case 5: printf("浏览学生信息:\n");
			Output(L); break;
			case 6:exit (0);//退出系统操作 
			default:printf("输入错误"); 
		}
	} 
 } 
 /*在长度为n的顺序表的第i个位置插入一个元素，元素的移动次数为，i之后的元素包含i，即n-i+1.
 2.在长度为n的顺序表删除第i个元素需要移动n-i个元素
 3.顺序存储的线性表，访问节点的时间复杂度为O（1）；增加删除节点的时间复杂度为O(n);
 
 1.链式存储的存储地址不一定是连续的
 2.增加一个头结点的目的是方便运算的实现
 
 单链表的实现注意有无头结点，以下默认有头结点
 1.刚开始默认指针指向头结点，所以后面算法都要指到a1(L->next)的位置，即LNode *p->=L->next
 2.按序号查找或者按值查找同理，都是开始循环，没找到就让指针一直指向下一个地址直到找到跳出循环，p=p->next
 3.从一个具有n个节点的单链表查找其值为x的节点时，在查找成功的情况下，须比较[(n+1)n/2]/n,等比数列求和之后除以n成平均值
 4.插入算法： ListInsert(&L,i,x)在第i个位置插入元素x；
 (1)不用下标了，找到第i-1个位置即可
 (2)让x元素指向下一个地址的指针(s->next)被i-1指向下一个地址的指针赋值(p->next)
 (3)让i-1指向下一个地址(p->next)指向x元素(s) 
 s->next=p->next;
 p->next=s;
 5.删除算法： ListDelete(&L,i)删除第i个结点
 (1)循环找到第i-1个结点，指针记为p 
 (2) 要删除的结点指针记为p->next,用q代替 
 q=p->next;
 p->next= q->next;
 free(q); 
 
 双链表：有两个指针，prior前驱结点，next后继节点
 1.插入算法 ，插入的结点记为s 
 (1)循环找到第i-1个结点，指针记为p ,画图理解 
 s->next=p->next;
 p->next->prior=s;
 s->prior=p;
 p->next=s; 
 2.删除算法 ：删除结点p的后继结点q
 (1)p->next=q->next;
 q->next->prior=p;
 free(q);
 
 循环单链表L->next=L;
 循环双链表(也是为空的条件)L->next=L L->prior=L
 循环双链表中每一个元素都有后继 
 
 线性表的链式存储适用于频繁插入或删除数据元素的情况 
 --------------------------------------------------
 栈：
 顺序栈 
 先进后出，后进先出，只能从一端进出(表尾处)
 1.万能公式：n个不同的元素进栈，出栈元素不同排列的个数为(1/n+1)C n 2n
 2.InitStack(&S),S.top=-1;
 StackEmpty(S),判是否为空S.top==-1;
 而为判满为S.top==maxsize-1;因为top从-1开始，总共有maxsize个 
 Push(&S,x)进栈，不满时S.data[++top]=x;栈顶指针先加1，再将值给栈顶元素 
 Pop(&S,&x)出栈，先取栈顶元素值，然后栈顶指针再减一，x=S.data[top--]; 
 GetTop(S,&x)读栈顶元素，x=S.data[top] 
 Destroy(&S)
 3.描述同线性表一样，这里的top相当于线性表的length 
 4.向顺序栈中压入新元素，应当先移动栈顶指针，再存入元素 
 5.选择题：一个栈的入栈顺序1 2 3 4 5，则栈的不可能输出序列是什么 
 
 链栈
 1.同链栈，有一个指针next
 2.链栈对比顺栈的优点是链栈便于通常不会出现栈满的情况
 3.递归算法用栈
 ---------------------------------------------------------------------
 队列
 顺队
 1.排队，队尾进，队头出。只允许在表的一端进行插入，在表的另外一端进行删除。先进先出，后进后出
 同线性表，只是length改成front队头，rear队尾,队头指针指向队头元素，队尾指针指向队尾元素的下一个位置 
 2.InitQueue(&Q); 队头和队尾指针都向同一个位置Q.front=Q.rear=0; 
 QueueEmpty(Q);Q.front==Q.rear==0; 
 EnQueue(&Q,x);入队队不满时，先送值到队尾元素，队尾指针再加一  Q.data[rear++]=x;但当Q.rear=mxsize怎么办呢 
 DeQueue(&Q,&x);出队 队不空时，先取队头元素值，再将队头指针加一 x=Q.data[front++];
 GetHead(Q,&x);读取队头元素 x=Q.data[rear--];
 循环队列
 1.初始：Q.front=Q.rear=0; 
 2.队空：Q.rear==Q.front;
 3. 队首指针进1：Q.front=(Q.front+1)%maxsize; 
队尾指针加一：Q.rear=(Q.rear+1)%maxsize;  
 队列长度：(Q.rear+maxsize-Q.front)%maxsize; 
 4.队满：(Q.rear+1)%maxsize==Q.front
 队列中元素个数：(Q.rear-Q.front+maxsize)%maxsize;
 
 链队：
 删除结点：让队头元素的指针指向下一个即可
 front=front->next;
 -----------------------------------------------------------------------------
 串：由零个或者多个字符组成的序列
 子串：串中任意个连续的字符组成的字序列
 模式匹配：子串的定位操作，它求的是子串在主串中的位置，一个字符一个字符比较直到找到为止的算法
 
 1.t="child",s="cake"
 则Strlength(t)=5;
 SubString(&l2,t,2,2)='hi'
 Concat(&T,SubString(&l1,s,3,1), SubString(&l2,t,2,2))='khi';
 ------------------------------------------------------------------------------
 */ 
  
 
  
 
 
