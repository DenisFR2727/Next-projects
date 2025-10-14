interface DownloadImageProps {
  url: string;
  fileName?: string;
  children: React.ReactNode;
}
export function DownloadImage({ url, fileName, children }: DownloadImageProps) {
  return (
    <a
      href={`${url}?force=true`}
      download={fileName}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </a>
  );
}
