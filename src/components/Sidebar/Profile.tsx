import { LogOut } from 'lucide-react';
import React from 'react';

export const Profile = () => {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/NuadaEP.png"
        alt="Profile Image"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Bruno Cardoso
        </span>
        <span className="truncate text-sm text-zinc-500">
          brunohenriquecardosoteixeira13@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto px-2 hover:bg-zinc-50 rounded-md"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
};
