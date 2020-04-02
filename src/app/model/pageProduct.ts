import { Product } from './product';
import { FinanceProduct } from './financeProduct';

export interface PageProduct{
	//总记录数
	total?: number;
	//结果集
	list ?: FinanceProduct;
	//当前页
	 pageNum?: number;
	//每页的数量
pageSize?:number;
	//当前页的数量
	 size?:number;
	//由于startRow和endRow不常用，这里说个具体的用法
	//可以在页面中"显示startRow到endRow 共size条数据"
	//当前页面第一个元素在数据库中的行号
	 startRow?:number;
	//当前页面最后一个元素在数据库中的行号
	endRow?:number;
	//总页数
	pages?:number;
   
	//前一页
	prePage?:number;
	//下一页
	nextPage?:number;
   
	//是否为第一页
	isFirstPage?:boolean;
	//是否为最后一页
 isLastPage?:boolean; 
	//是否有前一页
	hasPreviousPage?:boolean; 
	//是否有下一页
	hasNextPage?:boolean; 
	//导航页码数
	navigatePages?:number;
	//所有导航页号
	navigatepageNums?:Array<number>;
	//导航条上的第一页
	 navigateFirstPage:number;
	//导航条上的最后一页
	 navigateLastPage?:number;

}
 