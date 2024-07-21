import { LightningElement, api } from 'lwc';

export default class StudentTile extends LightningElement {
    @api student = {
        Name: 'Vanessa',
        PhotoUrl: '/services/images/photo/003B0FakePictId',
    }

    @api isSelcted = false;

    get tileSelected() {
        return this.isSelcted ? 'tile selected' : 'tile';
    }
}