const ProfilePage = () => {
    return (
      <div className="container mx-auto py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Your Profile</h2>
        <p className="text-lg mb-12">View and manage your journal entries.</p>
        {/* Example of a list of journal summaries */}
        <div className="space-y-4">
          {[1, 2, 3].map((entry) => (
            <div key={entry} className="bg-gray-800 p-4 rounded-lg text-white shadow">
              <h3 className="text-xl font-semibold mb-2">Journal Entry {entry}</h3>
              <p>Sample journal entry content here...</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProfilePage;
  