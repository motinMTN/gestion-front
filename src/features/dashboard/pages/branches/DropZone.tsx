import { useDropzone } from 'react-dropzone';

interface DropZoneProps {
  onFilesChange: (acceptedFiles: File[]) => void; // Propiedad para manejar los archivos
}

const DropZone: React.FC<DropZoneProps> = ({ onFilesChange }) => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop: acceptedFiles => {
      onFilesChange(acceptedFiles);
    },
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: '2px dashed gray',
        borderRadius: '4px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: isDragActive ? '#e0e0e0' : '#f9f9f9',
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>¡Suelta los archivos aquí!</p>
      ) : (
        <p>Arrastra y suelta algunos archivos aquí, o haz clic para seleccionar archivos</p>
      )}
      <ul>
        {acceptedFiles.map(file => (
          <li key={file.path}>{file.path} - {file.size} bytes</li>
        ))}
      </ul>
    </div>
  );
};

export default DropZone;