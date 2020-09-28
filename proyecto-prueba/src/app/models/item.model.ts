export class Item{
	id: number;
	descripcion: string;
	img: string;


	constructor(id:number, desc:string, img:string){
		this.id =  id;
		this.descripcion = desc;
		this.img = img;
	}	
}