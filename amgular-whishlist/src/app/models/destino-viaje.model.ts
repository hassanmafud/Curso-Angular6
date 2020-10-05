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
    this.servicios = ['pileta', 'desayuno'];
  }
  isSelected(): boolean {
    return this.selected;
  }
  setSelected(s: boolean) {
    this.selected == s;
  }
  voteUp() {
    this.votes += 1;
  }
  voteDown() {
    this.votes -= 1;
  }
}
