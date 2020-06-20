
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

import Font from '@ckeditor/ckeditor5-font/src/font';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Link from "@ckeditor/ckeditor5-link/src/link"

import List from "@ckeditor/ckeditor5-list/src/list"
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';

import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';

import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency';

import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';

import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';


const customColorPalette = [
  {
      color: 'hsl(4, 90%, 58%)',
      label: 'Red'
  },
  {
      color: 'hsl(340, 82%, 52%)',
      label: 'Pink'
  },
  {
      color: 'hsl(291, 64%, 42%)',
      label: 'Purple'
  },
  {
      color: 'hsl(262, 52%, 47%)',
      label: 'Deep Purple'
  },
  {
      color: 'hsl(231, 48%, 48%)',
      label: 'Indigo'
  },
  {
      color: 'hsl(207, 90%, 54%)',
      label: 'Blue'
  },

  // ...
];

// const editorConfiguration = {

//   plugins: [Essentials, Bold, Italic, Paragraph, Image, 
//   ImageUpload, SimpleUploadAdapter, Alignment, BlockQuote,
//   Underline, Strikethrough, Subscript, Superscript,
//   ImageCaption, ImageStyle, ImageToolbar, ImageResize,
//   Font, FontFamily, Highlight, Heading, TodoList, List,
//   SpecialCharacters, SpecialCharactersEssentials, SpecialCharactersCurrency,
//   TableToolbar, Table, TableProperties, TableCellProperties, Link],

  
//   toolbar: ["bold", "italic","|",
//   "alignment","|",
//   "imageUpload", "insertTable", "|",
//   "blockQuote", "link", "|",
//   "fontFamily", "fontSize", "highlight", "|",
//   'heading', "specialCharacters", "|",
//   'bulletedList', 'numberedList', "todoList", "|",
//   'fontColor', 'fontBackgroundColor', "|",
//   "underline", "strikethrough", "subscript", "superscript", "|",
//   "undo", "redo"],

//   simpleUpload: {
//     // The URL that the images are uploaded to.
//     uploadUrl: '/api/imageUpload/upload',

//     // Headers sent along with the XMLHttpRequest to the upload server.
//     headers: {
//         'X-CSRF-TOKEN': 'CSFR-Token',
//         Authorization: ""
//     }
// },
// fontFamily: {
//   options: [
//       'default',
//       'Arial, Helvetica, sans-serif',
//       'Courier New, Courier, monospace',
//       'Georgia, serif',
//       'Lucida Sans Unicode, Lucida Grande, sans-serif',
//       'Tahoma, Geneva, sans-serif',
//       'Times New Roman, Times, serif',
//       'Trebuchet MS, Helvetica, sans-serif',
//       'Verdana, Geneva, sans-serif'
//   ]
// },
// link: {
//   // Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
//   addTargetToExternalLinks: true,

//   // Let the users control the "download" attribute of each link.
//   decorators: [
//       {
//           mode: 'manual',
//           label: 'Downloadable',
//           attributes: {
//               download: 'download'
//           }
//       }
//   ]
// },

// table: {
//   contentToolbar: [
//       'tableColumn', 'tableRow', 'mergeTableCells',
//       'tableProperties', 'tableCellProperties'
//   ],

//   // Set the palettes for tables.
//   tableProperties: {
//       borderColors: customColorPalette,
//       backgroundColors: customColorPalette
//   },

//   // Set the palettes for table cells.
//   tableCellProperties: {
//       borderColors: customColorPalette,
//       backgroundColors: customColorPalette
//   }
// },

// heading: {
//   options: [
//       { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
//       { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
//       { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
//   ]
// },

// fontSize: {
//   options: [
//     'tiny',
//     'small',
//     'default',
//     'big',
//     'huge'
//   ]
// },

// image: {
//   toolbar: [
//     'imageStyle:full',
//     'imageStyle:side',
//     '|',
//     'imageTextAlternative',
//     "|",
//     ""
//   ]
// },
// language: "pl",
// };


const editorConfiguration = function(token) {
  const config = {

    plugins: [Essentials, Bold, Italic, Paragraph, Image, 
    ImageUpload, SimpleUploadAdapter, Alignment, BlockQuote,
    Underline, Strikethrough, Subscript, Superscript,
    ImageCaption, ImageStyle, ImageToolbar, ImageResize,
    Font, FontFamily, Highlight, Heading, TodoList, List,
    SpecialCharacters, SpecialCharactersEssentials, SpecialCharactersCurrency,
    TableToolbar, Table, TableProperties, TableCellProperties, Link],
  
    
    toolbar: ["bold", "italic","|",
    "alignment","|",
    "imageUpload", "insertTable", "|",
    "blockQuote", "link", "|",
    "fontFamily", "fontSize", "highlight", "|",
    'heading', "specialCharacters", "|",
    'bulletedList', 'numberedList', "todoList", "|",
    'fontColor', 'fontBackgroundColor', "|",
    "underline", "strikethrough", "subscript", "superscript", "|",
    "undo", "redo"],
  
    simpleUpload: {
      // The URL that the images are uploaded to.
      uploadUrl: '/api/imageUpload/upload',
  
      // Headers sent along with the XMLHttpRequest to the upload server.
      headers: {
          Authorization: token
      }
  },
  fontFamily: {
    options: [
        'default',
        'Arial, Helvetica, sans-serif',
        'Courier New, Courier, monospace',
        'Georgia, serif',
        'Lucida Sans Unicode, Lucida Grande, sans-serif',
        'Tahoma, Geneva, sans-serif',
        'Times New Roman, Times, serif',
        'Trebuchet MS, Helvetica, sans-serif',
        'Verdana, Geneva, sans-serif'
    ]
  },
  link: {
    // Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
    addTargetToExternalLinks: true,
  
    // Let the users control the "download" attribute of each link.
    decorators: [
        {
            mode: 'manual',
            label: 'Downloadable',
            attributes: {
                download: 'download'
            }
        }
    ]
  },
  
  table: {
    contentToolbar: [
        'tableColumn', 'tableRow', 'mergeTableCells',
        'tableProperties', 'tableCellProperties'
    ],
  
    // Set the palettes for tables.
    tableProperties: {
        borderColors: customColorPalette,
        backgroundColors: customColorPalette
    },
  
    // Set the palettes for table cells.
    tableCellProperties: {
        borderColors: customColorPalette,
        backgroundColors: customColorPalette
    }
  },
  
  heading: {
    options: [
        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
    ]
  },
  
  fontSize: {
    options: [
      'tiny',
      'small',
      'default',
      'big',
      'huge'
    ]
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
  language: "pl",
  };
  return config
}

export default editorConfiguration