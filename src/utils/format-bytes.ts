export function convertBytesToMBorGB(bytes: number) {
  const bytesInMB = 1048576;
  const bytesInGB = 1073741824;

  //   if (bytes < bytesInMB) return bytes + ' Bytes';

  if (bytes < bytesInGB) return (bytes / bytesInMB).toFixed(2) + ' MB';

  return (bytes / bytesInGB).toFixed(2) + ' GB';
}
