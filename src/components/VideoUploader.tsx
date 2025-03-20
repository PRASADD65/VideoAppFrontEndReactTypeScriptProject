import React, { useCallback } from 'react';

interface VideoUploaderProps {
  onVideoUpload: (file: File) => void;
}

const VideoUploader: React.FC<VideoUploaderProps> = ({ onVideoUpload }) => {
  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file && file.type.startsWith('video/')) {
        onVideoUpload(file);
      } else {
        alert('Please upload a valid video file.');
      }
    },
    [onVideoUpload]
  );

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileChange} />
    </div>
  );
};

export default VideoUploader;