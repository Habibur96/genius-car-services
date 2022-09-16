import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css'


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://carservices.free.beeceptor.com')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="container">
            <div className="row">
                <div>
                    <h1 className='services-title text-primary text-center mt-5 mb-5'>Our Services</h1>

                    <div className="services-container ">

                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;