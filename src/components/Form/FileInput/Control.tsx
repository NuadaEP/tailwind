'use client';
import { ChangeEvent, ComponentProps } from 'react';
import { useFileInput } from './Root';

export type RootProps = ComponentProps<'input'>;

export function Control(props: RootProps) {
  const { id, onFileSelected } = useFileInput();

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return;

    const files = Array.from(event.target.files);

    onFileSelected(files);
  }

  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      {...props}
      onChange={handleFilesSelected}
    />
  );
}
