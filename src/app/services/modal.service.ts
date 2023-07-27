import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean
}
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() { }

  register(id: string) {
    this.modals.push({
      id,
      visible: false
    })
  }

  isModalOpen(id: string) : boolean {
    // optional chaining, only progresses past ? if truthy value is returned
    return !!this.modals.find(element => element.id === id)?.visible; // double negation to convert to boolean
  }

  toggleModal(id: string) {
    const modal = this.modals.find(element => element.id === id);

    if (modal) {
      modal.visible = !modal.visible;
    }
    // this.visible = !this.visible
  }
}
