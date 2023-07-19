import { useTranslation } from "react-i18next";
import { socials } from "../datasets/datas"
import emailjs, { init } from "@emailjs/browser";
import { useState, useRef, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';

const Footer = () => {
    const { t } = useTranslation();
    const [modal, setModal] = useState(false);
    const form = useRef();
   
    const toggle = () => {
        setModal(!modal)
    };

    init("53c91Hwblm1zRRUNM");

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_tnxoo6j", "template_r5kpzxr", e.target, "53c91Hwblm1zRRUNM")
            .then(
                (result) => {
                    toast('🦄 Message Sent Successfully', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    console.log(result.text);
                }
            )
            .catch((error) => {
                console.log("Error sending email:", error);
            });
    };

        const [contact, setContact] = useState({
            from_name: "",
            reply_to: "",
            message: "",
        });

        const [ContactErrs, setContactErrs] = useState({
            from_name: "",
            reply_to: "",
            message: "",
        });

        const [valid, setValid] = useState(false);
      
        const ContactFormSchema = yup.object().shape({
            from_name: yup.string().required("required"),
            reply_to: yup.string().email().required("required"),
            message: yup.string().min(25, "min. 25 characters"),
        });

        const inputChangeHandler = (e) => {
            const { name, value } = e.target;
        
            yup.reach(ContactFormSchema, name)
              .validate(value)
              .then((valid) => {
                setContactErrs({ ...ContactErrs, [name]: "" });
              })
              .catch((err) => {
                setContactErrs({ ...ContactErrs, [name]: err.errors[0] });
              });
        
              setContact({ ...contact, [name]: value });
          };

          useEffect(() => {
            ContactFormSchema.isValid(contact).then((vld) => setValid(vld));
          }, [contact]);
        
          useEffect(() => {
            console.log("contactErrs: ", ContactErrs);
          }, [ContactErrs]);

    return (
        <div className="footer">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <h1>{t('footerTitle')}</h1>
            <p>{t('footerText')}</p>
            <button className="email-button" onClick={toggle}>hello@emresert.com</button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Contact me</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit} ref={form}>
                        <FormGroup>
                            <Label for="from_name">
                                Name
                            </Label>
                            <Input
                                id="from_name"
                                name="from_name"
                                type="text"
                                onChange={inputChangeHandler}
                                value={contact.from_name}
                                invalid={!!ContactErrs.from_name}
                            />
                            <FormFeedback>{ContactErrs.from_name}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="reply_to">
                                Email
                            </Label>
                            <Input
                                id="reply_to"
                                name="reply_to"
                                type="email"
                                onChange={inputChangeHandler}
                                value={contact.reply_to}
                                invalid={!!ContactErrs.reply_to}
                            />
                            <FormFeedback>{ContactErrs.reply_to}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="message">
                                How can I help you?
                            </Label>
                            <Input
                                id="message"
                                name="message"
                                type="textarea"
                                onChange={inputChangeHandler}
                                value={contact.message}
                                invalid={!!ContactErrs.message}
                            />
                            <FormFeedback>{ContactErrs.message}</FormFeedback>
                        </FormGroup>
                        <Button type="submit" disabled={!valid}>
                            Submit
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>

            <div className="socials">{socials.map((i) => (
                <a href={i.link} target="_blank"><i className={i.icon}></i></a>
            ))}</div>
            <ToastContainer />
        </div>
    )
}

export default Footer