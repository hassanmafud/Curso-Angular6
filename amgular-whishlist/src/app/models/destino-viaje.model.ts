import { v4 as uuid } from 'uuid';
export class DestinoViaje {
  private selected: boolean;
  public servicios: string[];
  id = uuid();
  public votes: number;
  constructor(
    public nombre: string,
    public u: string)
  {
    this.servicios = ['pileta', 'desayuno', 'merienda'];
    this.votes = 0;
  }
  isSelected(): boolean {
    return this.selected;
  }
  setSelected(m: boolean): void {
    // tslint:disable-next-line: no-unused-expression
    this.selected === m;
  }
  voteUp(){
    this.votes++;
  }
  voteDown(){
    this.votes--;
  }
}
