export class DestinoViaje{
	private selected: boolean;
// tslint:disable-next-line: indent
	constructor(public nombre: string , public u: string){
	}

	isSelected(): boolean{
		return this.selected;
	}
	setSelected(s: boolean){
		this.selected == s;
	}
}
