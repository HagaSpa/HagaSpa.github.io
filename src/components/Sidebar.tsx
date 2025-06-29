import React from 'react';
import Image from 'next/image';
import { Mail, Globe } from 'lucide-react';
import { GithubIcon, TwitterIcon } from './BrandIcons';
import { ContactItem } from './types';

const contactItems: ContactItem[] = [
  { icon: Mail, text: "justicesparrow@gmail.com", href: "mailto:justicesparrow@gmail.com" },
  { icon: GithubIcon, text: "HagaSpa", href: "https://github.com/hagaspa" },
  { icon: TwitterIcon, text: "haga_spa", href: "https://x.com/haga_spa" },
  { icon: Globe, text: "hagaspa.com", href: "https://hagaspa.com" },
];

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-80 lg:flex-shrink-0 bg-blue-50 p-8 lg:border-r lg:border-slate-400 shadow-lg">
      <div className="flex flex-col items-center lg:sticky lg:top-8">
        <div className="relative max-w-24 mx-auto">
          <Image
            className="rounded-full"
            src="https://github.com/hagaspa.png"
            alt="HagaSpa profile picture"
            width={96}
            height={96}
            unoptimized
          />
        </div>
        <h1 className="text-3xl mb-2 font-bold text-slate-900">HagaSpa</h1>
        <p className="text-center text-slate-700 mt-2">Software Engineer</p>
        <div className="mt-8 text-left w-full">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-400 pb-2">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-slate-800">
            {contactItems.map((item) => (
              <li key={item.href} className="flex items-center">
                <item.icon className="w-4 h-4 mr-3 text-slate-500" />
                <a href={item.href} className="hover:text-blue-500">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
