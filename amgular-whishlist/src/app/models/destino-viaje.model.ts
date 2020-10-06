import { v4 as uuid } from 'uuid';
export class DestinoViaje {
  private selected: boolean;
  public servicios: string[];
  public votes: number;
  id = uuid();
  constructor(
    public nombre: string,
    public u: string,
  ) {
    this.votes = 0;
    this.servicios = ['pileta', 'desayuno', 'merienda'];
  }
  isSelected(): boolean {
    return this.selected;
  }
  setSelected(m: boolean): void{
    // tslint:disable-next-line: no-unused-expression
    this.selected === m;
  }
  voteUp(): void{
    this.votes += 1;
  }
  voteDown(): void{
    this.votes -= 1;
  }
}
