import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "MyAssistant"
  items = [

  ];
  toastCtrl: any;
  inputDialogService: any;
 
  constructor(public navController: NavController, public toastController: ToastController, public alertController: AlertController, public dataService: AppserviceService) {}

  async removeItem(item, index) {
    console.log('Removing Item-', item, index);
    const toast= await this.toastController.create({
      message: 'Removing Item: ' + item.name + ' ...',
      duration: 3000
    });
    toast.present();

    this.items.splice(index, 1);
  }

  async editItem(item, index) {
    console.log('Edited Item-', item, index);
    const toast= await this.toastController.create({
      message: 'Editing Item: ' + item.name + ' ...',
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
    
  }
  showEditTaskPrompt(task: any, index: any) {
    throw new Error('Method not implemented.');
  }
  addTask(){ 
   console.log("Adding Task")
   this.showAddTaskPrompt
   ();
  }
  showAddTaskPrompt() {
    throw new Error('Method not implemented.');
  }

  addItem() {
    console.log('Adding Item');
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const prompt= await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Whats The Plan?',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
/* Level of importance is the priority notification of each plan*/
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Level of Importance'
        },
        {
          name: 'notes',
          type: 'text',
          placeholder: 'notes'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    await prompt.present();
  }
}