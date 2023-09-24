import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import * as emailjs from "emailjs-com";
import {Context} from "../../context/context";
emailjs.init("uniC_-ckBxxsUGOPt")


export function Contact() {

    const { register, handleSubmit} = useForm();

    const [isActive, setIsActive] = useState(false);

    const {dutch} = useContext(Context);

    function sendFormToEmail() {
        let tempParams = {
            user_email:document.getElementById("user_email").value,
            message:document.getElementById("message").value
        };

        emailjs.send('service_qseye83','template_vr94teb',tempParams)
            .then(function(res){
                console.log("success", res.status)
                setIsActive(true);
                setTimeout(() => {
                    window.location.reload()
                    setIsActive(false)
            }, 3000);
        })
    }

    return (
        <section className="bg-gray-400 p-5 max-w-2xl">
            { dutch ?
                <p>Wil je iets meer weten over mij of een van mijn projecten? Via dit formulier kan je mij bereiken! Vergeet niet je emailadres + een bericht in te tikken voor verzending! Ik doe mijn best om binnen 48 uur te reageren en ben ook bereikbaar via LinkedIn.</p>
                :
                <p>Would you like to know more about me or one of my projects? You can reach me through this form! Don't forget to enter your email address + a message before sending! I'll do my best to respond within 48 hours and am also reachable via LinkedIn.</p>
            }
            <form onSubmit={handleSubmit(sendFormToEmail)}>
                <fieldset className="border-2 flex justify-center flex-col align-middle">
                    <h4 className="flex justify-start">Email:</h4>
                    <input type='email' {...register('email',
                        {
                            required: 'Emailadres mag niet leeg zijn',
                        })} name="user_email" id="user_email"/>
                    { dutch ? <h4 className="flex justify-start">Bericht:</h4> :
                        <h4 className="flex justify-start">Message:</h4>
                    }
                    <textarea className="h-60" name="message" id="message"/>

                    <button
                        type="submit" onClick={sendFormToEmail}
                    > { dutch ? <p className={`${isActive && "bg-green-900"}`}>Versturen.</p> :
                        <p className={`${isActive && "bg-green-900"}`}>Send.</p>}
                    </button>
                </fieldset>
            </form>
        </section>
    );
}