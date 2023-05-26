import React from 'react'
import './about.css'

export const About = () => {
    return (
        <div id='about'>
            <div className="about">
                <div className="about-container">
                    <div className="aboutme">
                        <h1>Yunus Emre KORKMAZ</h1>
                        <p>
                            Bursa Uludağ Üniversitesi, Elektrik - Elektronik Mühendisliği'ni 3. senemde terk ederek yazılım ile ilgilenmeye başladım.
                            Yazılım konusunda Javascript, React, React Native alanlarında sertifikalar aldım ve şuan da Vue.js hakkında bir sertifika almaya çalışıyorum.
                            Kodlama yaparken yaptığım işin tek tuşla sonucunu görebilmek beni çok mutlu ediyor. Böylece hatalarımı anlık olarak düzeltebileceğim bir meslek imkanım doğuyor.
                            Tasarım alanlarına daha büyük bir ilgi duysam da back end alanında da çalışma yapma isteğimi göz ardı etmiyorum.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1569084024058-1632922a4e1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=419&q=80" alt="" />
                    </div>
                    <h1 className='mainTitle'>#aboutme</h1>
                </div>
            </div>
        </div>

    )
}
