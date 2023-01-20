import { useState } from "react";
import './accordion.css';

const Accordion = () => {

    const data = [
        {
            id: 1,
            question: 'What question would you like to ask?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nam deleniti officiis doloremque itaque placeat earum, quis eos pariatur quas, eius ipsam laborum ea quo a maiores quibusdam ratione!'
        },
        {
            id: 2,
            question: 'What question would you like to ask?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nam deleniti officiis doloremque itaque placeat earum, quis eos pariatur quas, eius ipsam laborum ea quo a maiores quibusdam ratione!'
        },
        {
            id: 3,
            question: 'What question would you like to ask?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nam deleniti officiis doloremque itaque placeat earum, quis eos pariatur quas, eius ipsam laborum ea quo a maiores quibusdam ratione!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nam deleniti officiis doloremque itaque placeat earum, quis eos pariatur quas, eius ipsam laborum ea quo a maiores quibusdam ratione!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nam deleniti officiis doloremque itaque placeat earum, quis eos pariatur quas, eius ipsam laborum ea quo a maiores quibusdam ratione!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nam deleniti officiis doloremque itaque placeat earum, quis eos pariatur quas, eius ipsam laborum ea quo a maiores quibusdam ratione!'
        },
        {
            id: 4,
            question: 'What question would you like to ask?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nam deleniti officiis doloremque itaque placeat earum, quis eos pariatur quas, eius ipsam laborum ea quo a maiores quibusdam ratione!'
        },
    ];

    const [openAccordion, setOpenAccordion] = useState(1);
    const toggleAccordion = (id) => {
        setOpenAccordion(id);
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div className="accordion">
                    <h2 className="accordion__title">FAQ</h2>
                    {data.map(item => (
                        <div className="item" onClick={() => toggleAccordion(item.id)} key={item.id}>
                            <div className="item__question">
                                <h3 /* className={openAccordion === item.id ? 'activeQestion' : ''} */>{item.question}</h3>
                                <div className="item__btn">
                                    <span className={"item__minus " + (openAccordion === item.id && "item__plus")}></span>
                                </div>
                            </div>
                            <div className="item__answer">
                                <p className={"inactiveAnswer " + (openAccordion === item.id && "activeAnswer")}>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Accordion;