import React from 'react';
import {useForm} from "react-hook-form";

export function Contact() {

    const { register, handleSubmit} = useForm();

    function sendFormToEmail(dataForm) {

    }

    return (
        <section className="bg-gray-400 p-5 max-w-2xl">
            <p>Wil je iets meer weten over mij of een van mijn projecten? Via dit formulier kan je mij bereiken! Vergeet niet je emailadres + een bericht in te tikken voor verzending! Ik doe mijn best om binnen 48 uur te reageren en ben ook bereikbaar via LinkedIn.</p>
            <form onSubmit={handleSubmit(sendFormToEmail)}>
                <fieldset className="border-2 flex justify-center flex-col align-middle">
                    <h4 className="flex justify-start">Emailadres</h4>
                    <input type='email' {...register('email',
                        {
                            required: 'Emailadres mag niet leeg zijn',
                        })}/>
                    <h4 className="flex justify-start">Bericht:</h4>
                    <textarea className="h-60">


                    </textarea>

                    <button
                        type={"submit"}
                    > <p>Versturen.</p>
                    </button>
                </fieldset>
            </form>
        </section>
    );
}