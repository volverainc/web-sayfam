import { useTranslation } from "react-i18next";
import { socials } from "../datasets/datas"
import emailjs, { init } from "@emailjs/browser";
import { useState, useRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const { t } = useTranslation();
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    init("53c91Hwblm1zRRUNM");
    const form = useRef();
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
                <ModalHeader toggle={toggle}>Drop me a line 👋</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit} ref={form}>
                        <FormGroup>
                            <Label for="name">
                                Name
                            </Label>
                            <Input
                                id="name"
                                name="from_name"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="reply_to"
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="textarea">
                                How can I help you?
                            </Label>
                            <Input
                                id="textarea"
                                name="message"
                                type="textarea"
                            />
                        </FormGroup>
                        <Button>
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