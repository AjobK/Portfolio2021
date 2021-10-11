import { Component, OnInit, Output, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { environment } from '../../environments/environment'
import { faUserCircle, faCommentAlt, faEnvelope, faExclamationCircle, faSyncAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('contactForm') form: NgForm | undefined
  @Output() formHasBeenSent: boolean = false
  @Output() isUnableToSendForm: boolean = false
  @Output() isSending: boolean = false
  contactIcon = faUserCircle
  contactIconExtra = faCommentAlt
  contactSendingIcon = faSyncAlt

  constructor() { }

  ngOnInit(): void { }

  onSubmit(form: NgForm): void {
    this.isSending = true

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
      this.contactIcon = faUserCircle
      this.contactIconExtra = faCommentAlt

      this.formHasBeenSent = true
      form.reset()
      this.isSending = false
    })
    .catch(() => {
      this.contactIcon = faEnvelope
      this.contactIconExtra = faExclamationCircle

      this.formHasBeenSent = true
      this.isUnableToSendForm = true
      this.isSending = false
    })
  }

  showContactForm() {
    this.formHasBeenSent = false
  }

  resetForm() {
    this.form?.reset()
  }
}
