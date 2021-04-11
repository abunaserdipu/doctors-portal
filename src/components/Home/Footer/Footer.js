import React from 'react';
import FooterDetail from '../FooterDetail/FooterDetail';
const footerData = [
    {
        name: 'Emergency Dental Care',
        name: 'Check Up',
        name: 'Treatment of Personal Diseases',
        name: 'Tooth Extraction',
        name: 'Check Up'
    },
    {
        title: 'Services',
        name: 'Emergency Dental Care',
        name: 'Check Up',
        name: 'Treatment of Personal Diseases',
        name: 'Tooth Extraction',
        name: 'Check Up',
        name: 'Check Up',
        name: 'Check Up',
    },
    {
        title: 'Oral Health',
        name: 'Emergency Dental Care',
        name: 'Check Up',
        name: 'Treatment of Personal Diseases',
        name: 'Tooth Extraction',
        name: 'Check Up',
        name: 'Check Up',
        name: 'Check Up',
    },
    {
        title: 'Address',
        address: 'New York-101010 Hudson Yards',
        icon: '',
    },
]

const Footer = () => {
    return (
        <section className="my-5">
            <div className="container">
                <div className="row">
                {
                    footerData.map(footer => <FooterDetail footer={footer}></FooterDetail>)
                }
                </div>
            </div>
        </section>
    );
};

export default Footer;