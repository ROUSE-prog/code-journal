import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSummaries } from './api/entries';
import { getToken } from '../auth/auth';

const Dashboard = () => {
  const [summaries, setSummaries] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push('/login'); // Redirect to login if no token
    } else {
      const fetchSummaries = async () => {
        const data = await getSummaries();
        setSummaries(data);
      };
      fetchSummaries();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
        <div className="space-y-4">
          {summaries.map((entry) => (
            <div key={entry.entry_id} className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Summary:</h3>
              <p className="text-gray-700">{entry.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
