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
  setSelected(m: boolean){
    this.selected == m;
  }
  isSelected(): boolean {
    return this.selected;
  }
  voteDown(){
    this.votes--;
  }
  voteUp(){
    this.votes++;
  }
 
}
