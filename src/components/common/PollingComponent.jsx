import React, { useEffect, useState } from 'react';

const PollingComponent = ({ orderId, onComplete }) => {
    const [status, setStatus] = useState('PROCESSING');

    useEffect(() => {
        const intervalId = setInterval(async () => {
            try {
                // TODO: Replace with actual API call
                // const response = await axios.get(`/api/orders/${orderId}/status`);
                // if (response.data.status === 'COMPLETED') {
                //     onComplete(response.data);
                //     clearInterval(intervalId);
                // }
                console.log(`Polling status for order ${orderId}...`);
            } catch (error) {
                console.error("Polling error", error);
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, [orderId, onComplete]);

    return (
        <div className="text-center p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-2"></div>
            <p>Generating your cosmic report... ({status})</p>
        </div>
    );
};

export default PollingComponent;
