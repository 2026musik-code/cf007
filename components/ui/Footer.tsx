'use client';

import { Github, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Footer() {
  const [updating, setUpdating] = useState(false);
  const router = useRouter();

  const handleUpdate = async () => {
    setUpdating(true);
    try {
      const res = await fetch('/api/revalidate', { method: 'POST' });
      if (res.ok) {
        router.refresh(); // Refresh the current route
        alert('Data updated successfully!');
      } else {
        alert('Failed to update data.');
      }
    } catch (error) {
      console.error('Update error:', error);
      alert('An error occurred while updating.');
    } finally {
      setUpdating(false);
    }
  };

  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">FILM AGENT</h3>
          <p className="text-sm">
            Premium entertainment platform for drama and movie lovers.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Movies</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Series</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">My List</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="text-white font-medium mb-4">Support</h4>
           <ul className="space-y-2 text-sm">
             <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
             <li><Link href="#" className="hover:text-white transition-colors">Terms of Use</Link></li>
             <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
           </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Connect</h4>
          <div className="flex gap-4">
             <a href="https://github.com/2026musik-code/cf007" target="_blank" className="hover:text-white transition-colors">
               <Github className="w-6 h-6" />
             </a>
          </div>
          <div className="mt-6">
             <button
               onClick={handleUpdate}
               disabled={updating}
               className="flex items-center gap-2 text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded transition-colors disabled:opacity-50"
             >
               <RefreshCw className={`w-3 h-3 ${updating ? 'animate-spin' : ''}`} />
               {updating ? 'Updating...' : 'Update Data'}
             </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-xs">
        &copy; {new Date().getFullYear()} Film Agent. All rights reserved.
      </div>
    </footer>
  );
}
