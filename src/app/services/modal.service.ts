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

  /**
   * #unregister
   * Removes a modal instance that matches a specific modal id.
   * @param id 
   */
  unregister(id: string) {
    this.modals = this.modals.filter(
      element => element.id !== id
    );
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
