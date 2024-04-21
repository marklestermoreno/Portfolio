"use client"

import { useRef } from 'react';

import { preloadImageAssets } from "@/utils/preloadAssets";
import { motion } from "framer-motion";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";

import { toast } from "react-toastify";
import emailjs from 'emailjs-com';
import { ContactInfo } from "@/interfaces/ContactInfo";

export default function Contacts() {

    const [isLoading, setLoading] = useState(true);
    const [isFormLoading, setFormLoading] = useState(false);
    const [contactsImages, setContactsImages] = useState<HTMLImageElement[]>([]);
    const formRef = useRef<HTMLFormElement>(null);


    // const router = useRouter();

    useEffect(() => {
        const preloadAssets = async () => {

            const contacts = await preloadImageAssets("CONTACTS");
            setContactsImages(contacts);

            setLoading(false);
        };
        preloadAssets();

    }, []);
    


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();
        
        setFormLoading(true);

        emailjs.sendForm('service_0ld9o9e', 'template_u4489sh', event.currentTarget, 'llaBp5MDHXXVueueG')
        .then(() => {
                toast("Information Submitted " + "Your response has been submitted. I will contact you soon. Thank You! ");
            }, (error) => {
                toast("There was an error " + "Try Again later! or contact me directly through my other social media account ");
                console.log(error.text);
            });

        setFormLoading(false);
    }

    const [form, setForm] = useState<ContactInfo>({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: keyof ContactInfo) => {
        let { value } = e.target;

        if (fieldName === 'phone' && value !== '' && !/^\d+$/.test(value)) {
            return;
        }

        setForm(prevForm => ({
            ...prevForm,
            [fieldName]: value
        }));
    };

    return (
        <>
            <div id="contacts" className="flex flex-col text-center items-center py-20">
                <h2 className=' text-white text-xl lg:text-4xl font-bold text-center'>
                    Contact Hub: <span className='text-[#ff014f]'>
                        Get in touch! </span>                </h2>
                <p className='text-center text-gray-500 mx-5 md:mx-32 mt-5'>
                    Please note that the information you provide in this form <br />
                    will only be used for contact purposes. We respect your privacy <br />
                    and assure you that your information will not be stored or used <br />
                    for any other purposes.
                </p>
                <div className="contacts-container flex md:flex-row items-center bg-gray-100 mt-10 mx-10 p-10 w-auto">
                    <motion.div animate={{ x: 0 }} initial={{ x: -1000 }} transition={{ duration: 0.5 }}>
                        <h1 className="text-[#ff014f] uppercase font-semibold text-start mb-3">Please fill out the information</h1>
                        <div className="border-t border-1 border-[#787878]" />
                        <form onSubmit={handleSubmit} ref={formRef}
                            autoComplete="off"
                            className='flex flex-col justify-start items-start text-left mt-8 mb-2'>
                            <span className='text-sm text-white font-medium'> Your Full Name </span>
                            <input
                                type="text"
                                name="name"
                                disabled={isFormLoading}
                                value={form.name}
                                onChange={(e) => handleChange(e, 'name')}
                                className='text-neutral-800 px-3 py-1 w-full rounded-sm mt-2 font-medium text-[15px] focus:outline-none 
                                    focus:ring-2 focus:ring-[#fe4066] focus:invalid:border-red-500 focus:invalid:ring-red-500 transition-all duration-200'
                                placeholder='Input Name'
                                required
                            />

                            <span className='text-sm text-white font-medium mt-2'> Your Contact Number </span>
                            <input
                                type="text"
                                name="name"
                                value={form.phone}
                                disabled={isFormLoading}
                                maxLength={11}
                                onChange={(e) => handleChange(e, 'phone')}
                                className='text-neutral-800 px-3 py-1 w-full rounded-sm mt-2 font-medium text-[15px] focus:outline-none 
                                    focus:ring-2 focus:ring-[#fe4066] focus:invalid:border-red-500 focus:invalid:ring-red-500 transition-all duration-200'
                                placeholder='e.g. 09123456789'
                                required
                            />

                            <span className='text-sm text-white font-medium mt-2'> Your Email </span>
                            <input
                                type="email"
                                name="name"
                                value={form.email}
                                disabled={isFormLoading}
                                onChange={(e) => handleChange(e, 'email')}
                                className='text-neutral-800 px-3 py-1 w-full rounded-sm mt-2 font-medium text-[15px] focus:outline-none 
                                    focus:ring-2 focus:ring-[#fe4066] focus:invalid:border-red-500 focus:invalid:ring-red-500 transition-all duration-200'
                                placeholder='Input valid email'
                                required
                            />

                            <span className='text-sm text-white font-medium mt-2'> Your Subject </span>
                            <input
                                type="text"
                                name="name"
                                required
                                value={form.subject}
                                disabled={isFormLoading}
                                onChange={(e) => handleChange(e, 'subject')}
                                className='text-neutral-800 px-3 py-1 w-full rounded-sm mt-2 font-medium text-[15px] focus:outline-none 
                                    focus:ring-2 focus:ring-[#fe4066] focus:invalid:border-red-500 focus:invalid:ring-red-500 transition-all duration-200'
                                placeholder='Input Subject'
                            />

                            <span className='text-sm text-white font-medium mt-2'> Your Message </span>
                            <textarea rows={3} style={{
                                overflow: 'auto',
                                resize: 'none'
                            }}
                                name='user_message'
                                required
                                value={form.message}
                                disabled={isFormLoading}
                                onChange={(e) => handleChange(e, 'message')}
                                className='px-3 py-1.5 w-full rounded-sm mt-3 text-black font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#fe4066]  focus:invalid:border-red-500 focus:invalid:ring-red-500'
                                placeholder='Input Message' />




                            <div className='flex sm:flex-row xxsm:flex-col justify-around w-full py-10 '>
                                <button type='reset' disabled={isFormLoading}
                                    className='border border-[#fe40066] text-sm text-white font-medium px-4 py-2 rounded-lg hover:scale-110 duration-150'>
                                    Reset
                                </button>
                                <br />
                                <button type='submit' disabled={isFormLoading}
                                    className={isFormLoading ?
                                        'bg-[#ff5577] text-white text-sm font-medium px-4 py-2 rounded-lg'
                                        :
                                        'bg-[#fe4066] text-white text-sm font-medium px-4 py-2 rounded-lg hover:scale-110 duration-150'
                                    }
                                >
                                    {isFormLoading ?
                                        'Sending ...'
                                        :
                                        'Send Email'
                                    }
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    <motion.div animate={{ x: 0 }} initial={{ x: 1000 }} transition={{ duration: 0.5 }} className="ml-10 hidden md:flex">
                        {contactsImages.length > 0 && contactsImages[0] && (
                            <img src={contactsImages[0].src ?? ""} alt="contacts-profile" className="w-80 grayscale hover:filter-none hover:cursor-pointer transition-all duration-300" />
                        )}
                    </motion.div>
                </div>
            </div>
        </>

    )
}