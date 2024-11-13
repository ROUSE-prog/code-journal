import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      

      {/* Main Journal Entries Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Recent Journal Entries</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Debugging Tips for JavaScript",
              date: "September 18, 2024",
              summary: "Quick tips on effective debugging strategies in JavaScript...",
            },
            {
              title: "CSS Grid vs Flexbox",
              date: "May 10, 2024",
              summary: "A comparison of CSS Grid and Flexbox for layout designs...",
            },
            {
              title: "Getting Started with Next.js",
              date: "March 20, 2023",
              summary: "A beginner's guide to setting up a project with Next.js...",
            },
          ].map((entry, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">{entry.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{entry.date}</p>
              <p className="text-gray-700">{entry.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Feature Update Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div>
            <h4 className="text-sm uppercase font-semibold text-gray-500 mb-1">
              Latest Update
            </h4>
            <h2 className="text-2xl font-bold">
              Introducing Syntax Highlighting for Your Code Entries.
            </h2>
          </div>
          <button className="btn btn-outline rounded-full px-4 py-2 mt-4 md:mt-0">
            Learn More
          </button>
        </div>
      </section>

      {/* Community and Research Section */}
      <section className="bg-black text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h5 className="text-gray-500 uppercase font-semibold text-sm mb-4">
            Explore the Community
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
            Discover insights, connect with fellow coders, and share knowledge.
          </h2>
          <button className="btn btn-primary rounded-full px-6 py-3">
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
