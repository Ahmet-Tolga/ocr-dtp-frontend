// // Importlar
// import { Action } from 'redux';

// // Dosya metadata tipini tanımlama
// interface FileMetadata {
//     name: string;
//     size: number;
//     type: string;
//     lastModified: number;
// }

// // UploadFileAction fonksiyonu
// export const UploadFileAction = (files: File[]): Action & { payload: FileMetadata[] } => {
//     const fileMetadata = files.map(file => ({
//         name: file.name,
//         size: file.size,
//         type: file.type,
//         lastModified: file.lastModified,
//     }));

//     return {
//         type: "UPLOAD",
//         payload: fileMetadata,
//     };
// };
    