/*Import the Stories*/ 
import Stories from './Stories/Stories';


export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to Tumble Tales</h1>
      <Stories />
    </div>
  );
}
