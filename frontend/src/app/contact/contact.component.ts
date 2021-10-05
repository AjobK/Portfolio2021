import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    fetch(`${ environment.backendUrl }/api/contact`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        email : form.value?.email,
        message: form.value?.message
      })
    })
    .then(() => {
      window.alert('Messaged received succesfully!\n\nI will get back to you as soon as possible.')
      form.reset()
    })
    .catch(() => {
      window.alert('Something went wrong...\n\nTry again at a later time or contact me on linkedIn.')
    })
  }

}
