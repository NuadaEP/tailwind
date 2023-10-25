'use client';
import { User } from 'lucide-react';
import { useFileInput } from './Root';
import { useMemo } from 'react';

export function ImagePreview() {
  const { files } = useFileInput();

  const previewURL = useMemo(() => {
    if (files.length === 0) return null;

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (!previewURL)
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violett-500" />
      </div>
    );

  return (
    <img
      src={previewURL}
      alt="image"
      className="h-16 w-16 object-cover rounded-full"
    />
  );
}
