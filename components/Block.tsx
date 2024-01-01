// IMPORT THE IMAGE COMPONENT FROM THE 'next/image' MODULE
import Image from 'next/image';

// DEFINE A FUNCTIONAL COMPONENT NAMED 'Block' THAT TAKES 'title' AND 'para' AS PROPS
const Block = ({ title, para }: { title: string, para: string }) => {
  return (
    // CONTAINER DIV WITH SPECIFIC STYLING FOR LAYOUT
    <div className='border-r border-gray-300 w-60 h-full flex items-center px-3'>
      {/* NEXT.JS IMAGE COMPONENT WITH SPECIFIC PROPERTIES */}
      <Image
        src={'/demo.svg'} // IMAGE SOURCE PATH
        alt='demo' // ALT TEXT FOR ACCESSIBILITY
        width={200} // IMAGE WIDTH
        height={200} // IMAGE HEIGHT
        className='w-10 h-10 rounded-full mr-5' // ADDITIONAL STYLING FOR THE IMAGE COMPONENT
      />
      {/* CONTAINER FOR TITLE AND PARAGRAPH TEXT */}
      <div>
        {/* TITLE HEADING WITH BOLD FONT */}
        <h3 className='font-bold'>{title}</h3>
        {/* PARAGRAPH TEXT WITH SPECIFIC STYLING FOR COLOR, SIZE, AND LINE CLAMP */}
        <p className='text-gray-400 text-xs line-clamp-1'>{para}</p>
      </div>
    </div>
  );
};

// EXPORT THE BLOCK COMPONENT AS THE DEFAULT EXPORT
export default Block;
