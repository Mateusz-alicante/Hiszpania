
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Image from '@ckeditor/ckeditor5-image/src/image';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote"
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';

import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';

import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

const editorConfiguration = {
  plugins: [Essentials, Bold, Italic, Paragraph, Image, 
  ImageUpload, SimpleUploadAdapter, Alignment, BlockQuote,
  Underline, Strikethrough, Subscript, Superscript,
  ImageCaption, ImageStyle, ImageToolbar, ImageResize],
  toolbar: ["bold", "italic","|",
  "alignment","|",
  "imageUpload", "|",
  "blockQuote", "|",
  "underline", "strikethrough", "subscript", "superscript", "|",
  "undo", "redo"],
  simpleUpload: {
    // The URL that the images are uploaded to.
    uploadUrl: '/api/imageUpload/upload',

    // Headers sent along with the XMLHttpRequest to the upload server.
    headers: {
        'X-CSRF-TOKEN': 'CSFR-Token',
        Authorization: 'Bearer <JSON Web Token>'
    }
},
image: {
  toolbar: [
    'imageStyle:full',
    'imageStyle:side',
    '|',
    'imageTextAlternative',
    "|",
    ""
  ]
},
language: "pl"
};

// function MyCustomUploadAdapterPlugin( editor ) {
//   editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
//       return new MyUploadAdapter( loader );
//   };
// }

// class MyUploadAdapter {
//   constructor( loader ) {
//       // CKEditor 5's FileLoader instance.
//       this.loader = loader;

//       // URL where to send files.
//       this.url = '/api.imageUpload';
//   }

//   // Starts the upload process.
//   upload() {
//     this.loader.file
//     .then( file => console.log(file.stream()) );
//   }

//   // Aborts the upload process.
//   abort() {
//       if ( this.xhr ) {
//           this.xhr.abort();
//       }
//   }

// }

export default editorConfiguration