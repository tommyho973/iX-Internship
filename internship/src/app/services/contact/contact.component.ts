import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Contact from 'src/app/models/contact';


@Injectable({
  providedIn: 'root',
})
export class ContactService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addContactToDb(contact: Contact) {
    this.http
      .post(this.url + '/contact/contact', {
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
      })
      .subscribe((postResponse) => {
        console.log(postResponse);
      });
  }

  getContacts() {
    return this.http.get(this.url + '/contact/contacts').toPromise();
  }

  updateContactOnDb(contact: Contact) {
    this.http.put(this.url + '/contact/' + contact.id, {
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    }).toPromise();
  }

  deleteContactOnDb(contact: Contact) {
    const deleteUrl = this.url + '/contact/' + contact.id;
    return this.http.delete(deleteUrl).toPromise();
  }
}
