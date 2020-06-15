
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";

const editorConfiguration = {
  plugins: [Essentials, Bold, Italic, Paragraph],
  toolbar: ["bold", "italic"]
};

export default editorConfiguration