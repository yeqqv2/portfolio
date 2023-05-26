import React from 'react'
import './contact.css'
import Input from 'react-phone-number-input/input'
import { useState } from 'react'

export const Contact = () => {
    const [value, setValue] = useState('+90')
    return (
        <div id='contact'>
            <div className="contact">
                <div className="contact-container">
                    <div className="contact-context">
                        <form className='form'>
                            <label id='label1'>isim</label>
                            <input type="text" placeholder='adınız ve soyadınızı giriniz' />
                            <label id='label2'>telefon</label>
                            <Input
                                placeholder='telefon numaranızı giriniz'
                                value={value}
                                onChange={setValue}
                                defaultCountry='TR'
                            />
                            <label id='label3'>mesaj</label>
                            <textarea type="text" maxLength={180} placeholder='mesajınızı giriniz' />
                        </form>
                        <button>Gönder</button>
                    </div>
                    <h1 className='mainTitle'>#contact</h1>
                </div>
            </div>
        </div>
    )
}
