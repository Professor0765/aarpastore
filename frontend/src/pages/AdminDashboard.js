import React, { useEffect, useState } from 'react';
import AdminPanel from '../components/AdminPanel';
import { fetchAdminMetrics } from '../services/api';

const AdminDashboard = () => {
    const [metrics, setMetrics] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMetrics = async () => {
            try {
                const data = await fetchAdminMetrics();
                setMetrics(data);
            } catch (error) {
                console.error('Error fetching admin metrics:', error);
            } finally {
                setLoading(false);
            }
        };

        getMetrics();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            {metrics ? (
                <AdminPanel metrics={metrics} />
            ) : (
                <div>No metrics available</div>
            )}
        </div>
    );
};

export default AdminDashboard;