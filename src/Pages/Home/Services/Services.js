import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'



const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='services' className='container'>
            <div className="row">
                <h1 className='sertices-title mt-5'>Our Services: {services.length}</h1>
                <div className='services-container'>
                    {
                        services.map(service => <Service
                            key={service.if}
                            service={service}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;