//���Ա�������ͬ�������͵Ķ������Ԫ�ص���������
//���Ա��Ϊ˳��洢����ʽ�洢����Ϊ˳��洢ʱ������ռ��һƬ�����Ĵ洢��Ԫ 
/*InitList(&L):��ʼ��
Length(L)
LocateElem(L,e)��ֵ����
GetElem(L,i)��λ����
ListInsert(&L,i,e)�ڵ�i��λ�ò���Ԫ��e�����±�Ϊi-1
ListDelete(&L,i,&e)ɾ����i��Ԫ�أ�������ֵ���ظ�e
Empty(L)�жϿյĲ���
DestroyList(&L)
PrintList(����� 

�洢��ַ=��һ��Ԫ�صĴ洢��ַ+ÿ��Ԫ����ռ�ĵ�ַ��Ԫ����*�������Ԫ�ص�����-1��
˳������Ҫ�ص�������洢��O��1�����洢�ܶȸߣ������ɾ����Ҫ�ƶ�������Ԫ��
*/ 

//˳��洢�����Ա���ɾ�Ĳ��ʵ��
#include <stdio.h>
#define MAXSIZE 100 
typedef struct{
	char name[10];
	long int num;//���治�������� 
	char sex[3];
	float score;
}ElemType;
typedef struct {
	int length;
	ElemType data[MAXSIZE];//����һ�����飬���ѧ�������� ����Ϊѧ�����ݺ��� ,���Ե��к��ӵ����� 
    //�����أ�ElemType����Ϊ�������ͣ�ͬ��SeqListҲ�� 
}SeqList;//����һ��˳���
//�б���֮���أ�������Ӧ�þ��Ǳ�ĳ�ʼ����
//ָ�룬int *p; 
/*void InitList(SeqList *L){
	L->length=0;//==���ж�������ȷ�����1 
} */
//Ȼ��͸����㷨ʵ��
//�п��㷨
/*int EmptyList(SeqList L,i){
	int n;
	//���жϵ�i��λ��
	if(i<1||i>length+1)
	{
		printf("������");
		return 0;  
	 } 
	 else 
	 return 1;
}*/
//�����㷨
 void Input(SeqList *L){
 	int i=0;
 	printf ("-----������ ѧ�� ����   �Ա� ����--------\n");
	do{
	i++;
	scanf("%d%s%s%f",&L->data[i].num,&L->data[i].name,&L->data[i].sex,&L->data[i].score);
	}while(L->data[i].num!=0);
 L->length=--i;}//�ǳ���Ҫ
//�����㷨
int InsertList(SeqList *L,int i,ElemType e){
	int n;
	//���жϵ�i��λ��
	if(L->length==MAXSIZE-1)
	{
	printf("����\n"); 
	return -1;
	}
	if(i<1||i>L->length+1)
	{
		printf("λ�ô���");
		return 0; 
	 } 
	 
	 for(n=L->length;n>=i;n--){//i�Ѿ�Ĭ���ǵ�m+1���ˣ������������±��0��length 
	 	L->data[n+1]=L->data[n];
	 	 L->data[i]=e;
	 L->length++;
	 return 1;
	 }
	
} 
//ɾ���㷨
//&ʲô�ô��أ�ָ�벿������ 
int DeleteList(SeqList *L,int i){
	if(i<1||i>L->length){
		printf("λ�ô���");
		return -1; 
	} 
	
	int j; 
	
	for(j=i-1;j<L->length;j++){
		L->data[j]=L->data[j+1];
		L->length--;
		return 1;
	}
	
	
}
//�����㷨
//��ֵ����
/*int LocateElem(SeqList *L,int x){
	int i;
	for(i=0;i<L->length;i++){
		if(L->data[i].num==x){
			printf("�ҵ���");
			return i+1; 
		}
		else
		{
			printf("û���ҵ�");
			return 0;
		}
	}*/
	/*while(i<=L->length && L->data[i].num!=x)
            i++;
    if (i>L->length)  return -1; 
     else    return i; */ 

int LocateElem(SeqList *L,int x){//ΪʲôҪ��*
	int i=1;
	while(i<=L->length && L->data[i].num!=x)
            i++;
    if (i>L->length)  return -1; 
     else    return i; 
}

//����㷨
void Output(SeqList L){
	int i;
	for(i=1;i<=L.length;i++){
		printf("%d\t%s\t%s\t%f\n",L.data[i].num,L.data[i].name,L.data[i].sex,L.data[i].score);
	}}//�����iҪ��Ӧ�������������㷨���ɳɹ� 

 
main ()
{
	SeqList L;
	ElemType x;//��Ҫ�� 
	int length;
	int i;
	int sys;
	int m;// �����㷨���ڼ���ѧ���к������
	int insert;//�����㷨���صı��� 
	int dele;//ɾ���㷨���ظ��ı��� 
	int num;//�����㷨����������Ҫ���ҵ�ֵ
	int locate;//�����㷨�ķ���ֵ�� 
	int findnum;//findnumΪ��һ�������
	while(1){
	printf("-----------------------ѧ����Ϣ����ϵͳ------------------------------\n");
	printf("-----------1-����ѧ����Ϣ            2-����ѧ����Ϣ------------------\n");
	printf("-----------3-ɾ��ѧ����Ϣ            4-����ѧ����Ϣ------------------\n");
	printf("-----------5-���ѧ����Ϣ            6-�˳�ѧ��ϵͳ------------------\n");
		printf("������1-6��ѡ��\n");
		scanf("%d",&sys);
		switch(sys){
			case 1:printf("����ѧ����Ϣ:\n");
			Input(&L);
			break;
			case 2:printf("����ѧ����Ϣ:");
			printf("�����¼");
			printf("ѧ��:") ;
			scanf("%d",&x.num);
			printf("����:") ;
			scanf("%s",&x.name);
			printf("�Ա�:") ;
			scanf("%s",&x.sex);
			printf("����:") ;
			scanf("%f",&x.score);
			printf("�ڼ���ѧ���к�����룺") ;
			scanf("%d",&m);
			insert=InsertList(&L,m+1,x);
			if(insert>0){
				printf("����ɹ�\n");
				 Output(L);
			}
			else
			printf("����ʧ��");break; 
			case 3:printf("ɾ��ѧ����Ϣ:");
			printf("������ɾ���ڼ�����¼��");
			scanf("%d",&dele); 
			dele=DeleteList(&L,dele);
			if(dele>0)
			printf("ɾ���ɹ�");break;
			case 4:printf("����ѧ����Ϣ:");
			printf("��������Ҫ���ҵ�ֵ");
			scanf("%d",&num); 
			findnum=locate=LocateElem(&L,num);
			if(locate>0){
				printf("���ҵ���\n");
				printf("%s\t%d\t%s\t%f\n",L.data[findnum].name,L.data[findnum].num,L.data[findnum].sex,L.data[findnum].score);
			}
			else
			printf("û�ҵ�");break;
			case 5: printf("���ѧ����Ϣ:\n");
			Output(L); break;
			case 6:exit (0);//�˳�ϵͳ���� 
			default:printf("�������"); 
		}
	} 
 } 
 /*�ڳ���Ϊn��˳���ĵ�i��λ�ò���һ��Ԫ�أ�Ԫ�ص��ƶ�����Ϊ��i֮���Ԫ�ذ���i����n-i+1.
 2.�ڳ���Ϊn��˳���ɾ����i��Ԫ����Ҫ�ƶ�n-i��Ԫ��
 3.˳��洢�����Ա����ʽڵ��ʱ�临�Ӷ�ΪO��1��������ɾ���ڵ��ʱ�临�Ӷ�ΪO(n);
 
 1.��ʽ�洢�Ĵ洢��ַ��һ����������
 2.����һ��ͷ����Ŀ���Ƿ��������ʵ��
 
 �������ʵ��ע������ͷ��㣬����Ĭ����ͷ���
 1.�տ�ʼĬ��ָ��ָ��ͷ��㣬���Ժ����㷨��Ҫָ��a1(L->next)��λ�ã���LNode *p->=L->next
 2.����Ų��һ��߰�ֵ����ͬ�����ǿ�ʼѭ����û�ҵ�����ָ��һֱָ����һ����ֱַ���ҵ�����ѭ����p=p->next
 3.��һ������n���ڵ�ĵ����������ֵΪx�Ľڵ�ʱ���ڲ��ҳɹ�������£���Ƚ�[(n+1)n/2]/n,�ȱ��������֮�����n��ƽ��ֵ
 4.�����㷨�� ListInsert(&L,i,x)�ڵ�i��λ�ò���Ԫ��x��
 (1)�����±��ˣ��ҵ���i-1��λ�ü���
 (2)��xԪ��ָ����һ����ַ��ָ��(s->next)��i-1ָ����һ����ַ��ָ�븳ֵ(p->next)
 (3)��i-1ָ����һ����ַ(p->next)ָ��xԪ��(s) 
 s->next=p->next;
 p->next=s;
 5.ɾ���㷨�� ListDelete(&L,i)ɾ����i�����
 (1)ѭ���ҵ���i-1����㣬ָ���Ϊp 
 (2) Ҫɾ���Ľ��ָ���Ϊp->next,��q���� 
 q=p->next;
 p->next= q->next;
 free(q); 
 
 ˫����������ָ�룬priorǰ����㣬next��̽ڵ�
 1.�����㷨 ������Ľ���Ϊs 
 (1)ѭ���ҵ���i-1����㣬ָ���Ϊp ,��ͼ��� 
 s->next=p->next;
 p->next->prior=s;
 s->prior=p;
 p->next=s; 
 2.ɾ���㷨 ��ɾ�����p�ĺ�̽��q
 (1)p->next=q->next;
 q->next->prior=p;
 free(q);
 
 ѭ��������L->next=L;
 ѭ��˫����(Ҳ��Ϊ�յ�����)L->next=L L->prior=L
 ѭ��˫������ÿһ��Ԫ�ض��к�� 
 
 ���Ա����ʽ�洢������Ƶ�������ɾ������Ԫ�ص���� 
 --------------------------------------------------
 ջ��
 ˳��ջ 
 �Ƚ����������ȳ���ֻ�ܴ�һ�˽���(��β��)
 1.���ܹ�ʽ��n����ͬ��Ԫ�ؽ�ջ����ջԪ�ز�ͬ���еĸ���Ϊ(1/n+1)C n 2n
 2.InitStack(&S),S.top=-1;
 StackEmpty(S),���Ƿ�Ϊ��S.top==-1;
 ��Ϊ����ΪS.top==maxsize-1;��Ϊtop��-1��ʼ���ܹ���maxsize�� 
 Push(&S,x)��ջ������ʱS.data[++top]=x;ջ��ָ���ȼ�1���ٽ�ֵ��ջ��Ԫ�� 
 Pop(&S,&x)��ջ����ȡջ��Ԫ��ֵ��Ȼ��ջ��ָ���ټ�һ��x=S.data[top--]; 
 GetTop(S,&x)��ջ��Ԫ�أ�x=S.data[top] 
 Destroy(&S)
 3.����ͬ���Ա�һ���������top�൱�����Ա��length 
 4.��˳��ջ��ѹ����Ԫ�أ�Ӧ�����ƶ�ջ��ָ�룬�ٴ���Ԫ�� 
 5.ѡ���⣺һ��ջ����ջ˳��1 2 3 4 5����ջ�Ĳ��������������ʲô 
 
 ��ջ
 1.ͬ��ջ����һ��ָ��next
 2.��ջ�Ա�˳ջ���ŵ�����ջ����ͨ���������ջ�������
 3.�ݹ��㷨��ջ
 ---------------------------------------------------------------------
 ����
 ˳��
 1.�Ŷӣ���β������ͷ����ֻ�����ڱ��һ�˽��в��룬�ڱ������һ�˽���ɾ�����Ƚ��ȳ���������
 ͬ���Ա�ֻ��length�ĳ�front��ͷ��rear��β,��ͷָ��ָ���ͷԪ�أ���βָ��ָ���βԪ�ص���һ��λ�� 
 2.InitQueue(&Q); ��ͷ�Ͷ�βָ�붼��ͬһ��λ��Q.front=Q.rear=0; 
 QueueEmpty(Q);Q.front==Q.rear==0; 
 EnQueue(&Q,x);��ӶӲ���ʱ������ֵ����βԪ�أ���βָ���ټ�һ  Q.data[rear++]=x;����Q.rear=mxsize��ô���� 
 DeQueue(&Q,&x);���� �Ӳ���ʱ����ȡ��ͷԪ��ֵ���ٽ���ͷָ���һ x=Q.data[front++];
 GetHead(Q,&x);��ȡ��ͷԪ�� x=Q.data[rear--];
 ѭ������
 1.��ʼ��Q.front=Q.rear=0; 
 2.�ӿգ�Q.rear==Q.front;
 3. ����ָ���1��Q.front=(Q.front+1)%maxsize; 
��βָ���һ��Q.rear=(Q.rear+1)%maxsize;  
 ���г��ȣ�(Q.rear+maxsize-Q.front)%maxsize; 
 4.������(Q.rear+1)%maxsize==Q.front
 ������Ԫ�ظ�����(Q.rear-Q.front+maxsize)%maxsize;
 
 ���ӣ�
 ɾ����㣺�ö�ͷԪ�ص�ָ��ָ����һ������
 front=front->next;
 -----------------------------------------------------------------------------
 ������������߶���ַ���ɵ�����
 �Ӵ�������������������ַ���ɵ�������
 ģʽƥ�䣺�Ӵ��Ķ�λ��������������Ӵ��������е�λ�ã�һ���ַ�һ���ַ��Ƚ�ֱ���ҵ�Ϊֹ���㷨
 
 1.t="child",s="cake"
 ��Strlength(t)=5;
 SubString(&l2,t,2,2)='hi'
 Concat(&T,SubString(&l1,s,3,1), SubString(&l2,t,2,2))='khi';
 ------------------------------------------------------------------------------
 */ 
  
 
  
 
 
