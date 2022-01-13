import { Component, OnInit } from '@angular/core';
import Contact from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact/contact.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact = new Contact();
  contacts: Contact[] = [];
  editing: boolean = false;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {}

  async addContact() {
    await this.contactService.addContactToDb(this.contact);
    this.contacts.push(this.contact);
    this.contact = new Contact();
  }

  async fetchContacts() {
    this.contacts = [];

    let res: any = await this.contactService.getContacts();

    for (let i = 0; i < res.contacts.length; i++) {
      const contact = new Contact();
      
      contact.id = res.contacts[i]._id;
      contact.name = res.contacts[i].name;
      contact.email = res.contacts[i].email;
      contact.phone = res.contacts[i].phone;
      contact.createdAt = res.contacts[i].createdAt;
      contact.updatedAt = res.contacts[i].updatedAt;

      this.contacts.push(contact);
    }
  }

 editContact(contact: Contact) {
    this.editing = true;
    this.contact = contact;
  }

  async updateContact() {
    await this.contactService.updateContactOnDb(this.contact);
    this.contact = new Contact();
    this.editing = false;
  }

  async deleteContact(contact: Contact) {
    await this.contactService.deleteContactOnDb(contact);
    this.contacts = this.contacts.filter((x) => x.id != contact.id);
  }

}
